/**
 * Mosaic Restaurant & Cafe — bookings & contact messages
 * ------------------------------------------------------
 * Paste this whole file into the Apps Script editor of a Google Sheet
 * (Sheet → Extensions → Apps Script). For every submission from the website it:
 *   1. appends a row to the "Bookings", "Messages" or "Orders" tab (created automatically),
 *   2. emails the restaurant,
 *   3. emails the customer a confirmation.
 *
 * SETUP (once):
 *   1. Project Settings (gear icon) → Script properties → add:
 *        WEBHOOK_SECRET = <a long random string, same as in the website's .env.local>
 *        NOTIFY_EMAIL   = mosaic2503@gmail.com   (where new bookings are sent; optional)
 *   2. Deploy → New deployment → type "Web app"
 *        Execute as: Me        Who has access: Anyone
 *      Authorise when asked, then copy the Web app URL (ends in /exec)
 *      into the website's .env.local as GOOGLE_SCRIPT_URL.
 *   3. After editing this file later: Deploy → Manage deployments → Edit → Version: New version.
 *      (The URL stays the same.)
 *
 * Emails are sent from the Google account that owns the script. A free Gmail
 * account can send about 100 emails per day this way (2 per booking).
 */

var RESTAURANT = {
  name: 'Mosaic Restaurant & Cafe',
  phone: '+260 771036277',
  address: '4622-2 Beit Road, Addis Ababa Drive, Lusaka',
};

var SHEETS = {
  reservation: {
    tab: 'Bookings',
    headers: ['Received', 'Status', 'Name', 'Email', 'Phone', 'Date', 'Time', 'Guests', 'Seating', 'Special requests'],
    row: function (d) {
      return [new Date(), 'New', d.name, d.email, d.phone, d.date, d.time, d.partySize, d.seating, d.requests];
    },
  },
  order: {
    tab: 'Orders',
    headers: ['Received', 'Status', 'Order ID', 'Type', 'Name', 'Phone', 'Email', 'Table', 'Delivery address',
              'Items', 'Subtotal (ZK)', 'Delivery fee (ZK)', 'Total (ZK)', 'Cooking request'],
    row: function (d) {
      return [new Date(), 'New', d.orderId, d.mode, d.name, d.phone, d.email, d.table, d.address,
              d.items, Number(d.subtotal), Number(d.deliveryFee), Number(d.total), d.notes];
    },
  },
  contact: {
    tab: 'Messages',
    headers: ['Received', 'Status', 'Name', 'Email', 'Phone', 'Subject', 'Message'],
    row: function (d) {
      return [new Date(), 'New', d.name, d.email, d.phone, d.subject, d.message];
    },
  },
};

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var props = PropertiesService.getScriptProperties();

    if (!props.getProperty('WEBHOOK_SECRET') || data.secret !== props.getProperty('WEBHOOK_SECRET')) {
      return json({ ok: false, error: 'unauthorised' });
    }
    var cfg = SHEETS[data.type];
    if (!cfg) return json({ ok: false, error: 'unknown type' });

    var d = clean(data);
    saveRow(cfg, d);

    var notify = props.getProperty('NOTIFY_EMAIL') || Session.getEffectiveUser().getEmail();
    if (data.type === 'reservation') {
      sendReservationEmails(d, notify);
    } else if (data.type === 'order') {
      sendOrderEmails(d, notify);
    } else {
      sendContactEmails(d, notify);
    }
    return json({ ok: true });
  } catch (err) {
    console.error(err);
    return json({ ok: false, error: String(err) });
  }
}

/* ---------- sheet ---------- */

function saveRow(cfg, d) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(cfg.tab);
    if (!sheet) {
      sheet = ss.insertSheet(cfg.tab);
      sheet.appendRow(cfg.headers);
      sheet.getRange(1, 1, 1, cfg.headers.length).setFontWeight('bold').setBackground('#f3e2b3');
      sheet.setFrozenRows(1);
    }
    sheet.appendRow(cfg.row(d).map(safeCell));
  } finally {
    lock.releaseLock();
  }
}

/* Stop values like "=HYPERLINK(...)" from being run as spreadsheet formulas. */
function safeCell(v) {
  if (typeof v === 'string' && /^[=+\-@]/.test(v)) return "'" + v;
  return v;
}

/* ---------- emails ---------- */

function sendReservationEmails(d, notify) {
  var details =
    row('Name', d.name) + row('Phone', d.phone) + row('Email', d.email) +
    row('Date', d.date) + row('Time', d.time) + row('Guests', d.partySize) +
    row('Seating', d.seating || '—') + row('Special requests', d.requests || '—');

  MailApp.sendEmail({
    to: notify,
    replyTo: d.email,
    name: RESTAURANT.name + ' Website',
    subject: 'New table booking: ' + d.name + ' · ' + d.date + ' ' + d.time + ' · ' + d.partySize + ' guests',
    htmlBody: wrap('New table booking', '<table cellpadding="6">' + details + '</table>'),
  });

  MailApp.sendEmail({
    to: d.email,
    name: RESTAURANT.name,
    subject: 'We received your booking request: ' + d.date + ' at ' + d.time,
    htmlBody: wrap(
      'Thank you, ' + esc(d.name) + '!',
      '<p>We have received your table request and will confirm it shortly.</p>' +
      '<table cellpadding="6">' + row('Date', d.date) + row('Time', d.time) + row('Guests', d.partySize) +
      row('Seating', d.seating || 'No preference') + '</table>' +
      '<p>Need to change something? Call or WhatsApp us on ' + RESTAURANT.phone + '.</p>'
    ),
  });
}

function sendOrderEmails(d, notify) {
  var itemsHtml = '<pre style="font-family:inherit;font-size:14px;line-height:1.6;margin:0">' + esc(d.items) + '</pre>';
  var totals = row('Subtotal', 'ZK ' + d.subtotal) +
    (Number(d.deliveryFee) ? row('Delivery fee', 'ZK ' + d.deliveryFee) : '') +
    row('Total', 'ZK ' + d.total);

  var staffMail = {
    to: notify,
    name: RESTAURANT.name + ' Website',
    subject: 'New ' + d.mode + ' order ' + d.orderId + ' · ' + d.name + ' · ZK ' + d.total,
    htmlBody: wrap('New ' + esc(d.mode) + ' order: ' + esc(d.orderId),
      '<table cellpadding="6">' + row('Name', d.name) + row('Phone', d.phone) + row('Email', d.email || '—') +
      (d.table ? row('Table', d.table) : '') + (d.address ? row('Delivery address', d.address) : '') +
      row('Cooking request', d.notes || '—') + '</table>' +
      '<h3 style="margin:16px 0 6px">Items</h3>' + itemsHtml +
      '<table cellpadding="6" style="margin-top:10px">' + totals + '</table>'),
  };
  if (d.email) staffMail.replyTo = d.email; // MailApp rejects an empty replyTo
  MailApp.sendEmail(staffMail);

  if (d.email) {
    MailApp.sendEmail({
      to: d.email,
      name: RESTAURANT.name,
      subject: 'Your Mosaic order ' + d.orderId + ' has been received',
      htmlBody: wrap('Thank you, ' + esc(d.name) + '!',
        '<p>We have received your <b>' + esc(d.mode.toLowerCase()) + '</b> order <b>' + esc(d.orderId) + '</b>.</p>' +
        itemsHtml + '<table cellpadding="6" style="margin-top:10px">' + totals + '</table>' +
        '<p>Questions about your order? Call or WhatsApp us on ' + RESTAURANT.phone + '.</p>'),
    });
  }
}

function sendContactEmails(d, notify) {
  MailApp.sendEmail({
    to: notify,
    replyTo: d.email,
    name: RESTAURANT.name + ' Website',
    subject: 'New website message: ' + (d.subject || 'General enquiry') + ' (' + d.name + ')',
    htmlBody: wrap('New message from the website',
      '<table cellpadding="6">' + row('Name', d.name) + row('Email', d.email) + row('Phone', d.phone || '—') +
      row('Subject', d.subject || '—') + '</table>' +
      '<p style="white-space:pre-wrap">' + esc(d.message) + '</p>'),
  });

  MailApp.sendEmail({
    to: d.email,
    name: RESTAURANT.name,
    subject: 'Thanks for contacting ' + RESTAURANT.name,
    htmlBody: wrap('Thank you, ' + esc(d.name) + '!',
      '<p>We have received your message and will get back to you soon.</p>' +
      '<p>For anything urgent, call or WhatsApp us on ' + RESTAURANT.phone + '.</p>'),
  });
}

/* ---------- helpers ---------- */

function clean(data) {
  var out = {};
  Object.keys(data).forEach(function (k) {
    if (k !== 'secret') out[k] = String(data[k] == null ? '' : data[k]).trim().slice(0, 2000);
  });
  return out;
}

function esc(s) {
  return String(s || '').replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

function row(label, value) {
  return '<tr><td style="color:#888">' + esc(label) + '</td><td><b>' + esc(value) + '</b></td></tr>';
}

function wrap(title, body) {
  return '<div style="font-family:Arial,sans-serif;max-width:560px;color:#222">' +
    '<h2 style="color:#b8860b;margin-bottom:4px">' + title + '</h2>' + body +
    '<hr style="border:none;border-top:1px solid #eee;margin:24px 0">' +
    '<p style="color:#888;font-size:12px">' + RESTAURANT.name + ' · ' + RESTAURANT.address + ' · ' + RESTAURANT.phone + '</p></div>';
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
