export type MenuItem = {
  name: string;
  price: string;
  description?: string;
};

export type MenuCategory = {
  title: string;
  items: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    title: "Coffee & Hot Drinks",
    items: [
      { name: "Espresso", price: "45", description: "Rich, concentrated coffee shot with bold flavor." },
      { name: "Double Espresso", price: "55", description: "Two shots of espresso for extra strength and intensity." },
      { name: "Americano", price: "60", description: "Espresso diluted with hot water for a smooth, balanced taste." },
      { name: "Macchiato", price: "55", description: "Espresso marked with a touch of milk foam." },
      { name: "Cappuccino", price: "70", description: "Espresso topped with steamed milk and velvety foam." },
      { name: "Cafe Latte", price: "75", description: "Smooth espresso blended with creamy steamed milk." },
      { name: "Mochaccino", price: "85", description: "Espresso, chocolate, and steamed milk topped with foam." },
      { name: "Hot Chocolate", price: "85", description: "Rich, creamy chocolate drink served hot." },
      { name: "White Hot Chocolate", price: "80", description: "Smooth white chocolate drink with a creamy finish." },
      { name: "Fresh Pak Tea", price: "50", description: "Classic black tea brewed fresh." },
      { name: "Ginger Tea", price: "60", description: "Warming tea infused with fresh ginger flavor." },
      { name: "Five Roses Tea", price: "50", description: "Premium aromatic tea with a smooth taste." },
      { name: "Green Tea", price: "65", description: "Light and refreshing tea packed with natural goodness." },
      { name: "Matcha", price: "90", description: "Premium Japanese green tea with a rich earthy taste." }
    ]
  },
  {
    title: "Iced Lattes",
    items: [
      { name: "Plain Latte", price: "70", description: "Refreshing iced coffee with creamy milk." },
      { name: "Black Latte", price: "100", description: "Strong chilled coffee with a bold finish." },
      { name: "Caramel Latte", price: "100", description: "Chilled latte sweetened with caramel syrup." },
      { name: "Vanilla Latte", price: "100", description: "Smooth iced latte flavored with vanilla." },
      { name: "Mocha Plain", price: "110", description: "Iced coffee blended with chocolate flavor." },
      { name: "Matcha Mango/Strawberry", price: "130", description: "Chocolate matcha with your choice of mango or strawberry twist." }
    ]
  },
  {
    title: "Frappes",
    items: [
      { name: "Chocolate Frappe", price: "100", description: "Blended iced chocolate drink, rich and refreshing." },
      { name: "White Chocolate Frappe", price: "100", description: "Creamy white chocolate blended over ice." },
      { name: "Salted Caramel Frappe", price: "100", description: "Sweet caramel with a hint of sea salt." },
      { name: "Matcha Frappe", price: "100", description: "Icy matcha blend with a smooth finish." }
    ]
  },
  {
    title: "Crush / Slush",
    items: [
      { name: "Mint Crush Lemonade", price: "100", description: "Fresh lemonade blended with cooling mint." },
      { name: "Passion Fruit Slush", price: "100", description: "Tropical passion fruit blended over ice." },
      { name: "Mango Slush", price: "100", description: "Sweet and refreshing mango ice blend." }
    ]
  },
  {
    title: "Boba Drinks",
    items: [
      { name: "Mango Boba", price: "120", description: "Tropical mango drink with chewy boba pearls." },
      { name: "Strawberry Boba", price: "120", description: "Sweet strawberry drink with boba pearls." },
      { name: "Blueberry Boba", price: "120", description: "Fruity blueberry flavor with boba pearls." },
      { name: "Passion Fruit Boba", price: "120", description: "Tangy passion fruit drink with boba pearls." }
    ]
  },
  {
    title: "Mocktails",
    items: [
      { name: "Mojito", price: "100", description: "Refreshing mint and lime cooler." },
      { name: "Apple Mojito", price: "100", description: "Crisp apple flavor with mint and lime." },
      { name: "Kiwi Cucumber Cooler", price: "120", description: "Fresh kiwi and cucumber blended with mint and lemon for a crisp, refreshing cooler." },
      { name: "Guava Glow", price: "100", description: "Tropical guava mocktail with a refreshing finish." }
    ]
  },
  {
    title: "Milkshakes & Traditional Drinks",
    items: [
      { name: "Vanilla Milkshake", price: "110", description: "Creamy vanilla shake made with ice cream." },
      { name: "Strawberry Milkshake", price: "110", description: "Sweet strawberry blend with a creamy texture." },
      { name: "Bubble Gum Milkshake", price: "110", description: "Fun bubble gum flavor in a creamy shake." },
      { name: "Coffee Shake", price: "110", description: "Creamy coffee-flavored milkshake." },
      { name: "Banana Milkshake", price: "110", description: "Smooth banana shake, rich and refreshing." },
      { name: "Buttermilk", price: "75", description: "A refreshing blend of yogurt and spices, served chilled." },
      { name: "Lassi - Mango & Rose", price: "75", description: "Rich and creamy yogurt drink, crafted for pure indulgence." }
    ]
  },
  {
    title: "Smoothies",
    items: [
      { name: "Banana Smoothie", price: "100", description: "Fresh banana blended to perfection." },
      { name: "Apple Smoothie", price: "100", description: "Refreshing apple smoothie with natural sweetness." },
      { name: "Kiwi Smoothie", price: "100", description: "Tangy kiwi blend packed with flavor." },
      { name: "Greeny Mint Smoothie", price: "100", description: "Refreshing green smoothie with a hint of mint." }
    ]
  },
  {
    title: "Fresh & Other Juices",
    items: [
      { name: "Orange Fresh Juice", price: "130", description: "Freshly squeezed orange juice." },
      { name: "Apple Fresh Juice", price: "130", description: "Refreshing juice made from fresh apples." },
      { name: "Cranberry Rhodes Juice", price: "50", description: "Refreshing Rhodes juices served chilled." },
      { name: "Mango Rhodes Juice", price: "50", description: "Refreshing Rhodes juices served chilled." },
      { name: "Strawberry Rhodes Juice", price: "50", description: "Refreshing Rhodes juices served chilled." },
      { name: "Apple Rhodes Juice", price: "50", description: "Refreshing Rhodes juices served chilled." },
      { name: "Orange Rhodes Juice", price: "50", description: "Refreshing Rhodes juices served chilled." },
      { name: "Guava Rhodes Juice", price: "50", description: "Refreshing Rhodes juices served chilled." }
    ]
  },
  {
    title: "Soft Drinks",
    items: [
      { name: "Fanta", price: "25", description: "Fruity orange-flavored soda." },
      { name: "Lemonade", price: "35", description: "Refreshing citrus drink." },
      { name: "Water", price: "15", description: "Pure bottled drinking water." },
      { name: "Minute Maid", price: "25", description: "" },
      { name: "Schweppes", price: "35", description: "" },
      { name: "Red Bull", price: "45", description: "Energy drink for a quick boost." },
      { name: "Coca-Cola", price: "25", description: "Classic sparkling cola." },
      { name: "Zero Coke", price: "25", description: "Sugar-free cola with full flavor." },
      { name: "Sprite", price: "25", description: "Crisp lemon-lime soft drink." },
      { name: "Sparletta", price: "40", description: "" }
    ]
  },
  {
    title: "Chinese Soups",
    items: [
      { name: "Chicken Bowl Soup - Signature", price: "230", description: "A comforting bowl of rich flavors prepared with fresh ingredients and aromatic seasoning." },
      { name: "Tom Yum Soup - Chicken / Prawn", price: "120 / 140", description: "Succulent prawn/chicken tossed with aromatic spices and vibrant Asian sauces." },
      { name: "Manchow Soup - Veg / Chicken", price: "80 / 90", description: "Warm, flavorful, and perfectly balanced to start your meal on a delicious note." },
      { name: "Sweet Corn Soup - Veg / Chicken", price: "80 / 90", description: "A wholesome bowl of flavors made with fresh corn and aromatic seasonings." },
      { name: "Hot & Sour Soup - Veg / Chicken", price: "120 / 140", description: "A spicy and tangy delight crafted to awaken your taste buds." },
      { name: "Noodle Soup - Veg / Chicken", price: "120 / 140", description: "A hearty blend of noodles and flavors for a satisfying start." },
      { name: "Lemon Coriander Soup - Veg / Chicken", price: "80 / 90", description: "A refreshing mix of zesty lemon and fragrant coriander in every sip." }
    ]
  },
  {
    title: "Indo-Chinese Starters – Non Veg",
    items: [
      { name: "Chicken Spring Roll - 6pcs", price: "160", description: "Carefully prepared to deliver authentic flavors and a memorable dining experience." },
      { name: "Chicken Lollipop - 8pcs", price: "165", description: "Crispy chicken wings tossed with bold Indo-Chinese flavors." },
      { name: "Chicken Dumpling - 8pcs", price: "155", description: "A delicious house favorite combining rich aromas with bold taste." },
      { name: "Dragon Chicken / Prawn / Fish", price: "230", description: "Tender seafood preparation infused with herbs, spices, and bold flavors." },
      { name: "Chilli Chicken", price: "170", description: "Crispy chicken tossed with onions, peppers, and bold Indo-Chinese chilli flavors." },
      { name: "Chicken 65", price: "145", description: "Carefully prepared to deliver authentic flavors and a memorable dining experience." },
      { name: "Prawn 65", price: "230", description: "Succulent prawns tossed with aromatic spices and vibrant Asian sauces." },
      { name: "Lemon Chicken", price: "160", description: "A chef-crafted specialty prepared with fresh ingredients and signature flavors." },
      { name: "Honey Crispy Chicken", price: "150", description: "A delicious house favorite combining rich aromas with bold taste." },
      { name: "Drum Up Heaven Chicken - Signature", price: "160", description: "Signature chicken dish loaded with rich flavors and spices." },
      { name: "Dynamic Cocktail Prawn", price: "230", description: "Succulent prawns tossed with aromatic spices and vibrant Asian sauces." },
      { name: "Prawn Tempura - Japanese Spices", price: "220", description: "Lightly battered prawns fried for a crispy Japanese-style taste." }
    ]
  },
  {
    title: "Indo-Chinese Starters – Veg",
    items: [
      { name: "Corn Pepper Salt - 170gm corn", price: "140", description: "A chef-crafted specialty prepared with fresh ingredients and signature flavors." },
      { name: "Veg Manchurian - Dry", price: "150", description: "Vegetable balls coated in flavorful Indo-Chinese spices." },
      { name: "Crispy Chilli Potato", price: "120", description: "Crispy potato fingers tossed with spicy and tangy sauces." },
      { name: "Mushroom Cheese Chilli", price: "260", description: "Cheesy Mushrooms cooked with spices and colorful peppers." },
      { name: "Chilli Paneer", price: "240", description: "Paneer cubes tossed in spicy sauces with crunchy vegetables." },
      { name: "Paneer 65", price: "170", description: "Crispy paneer bites coated with bold South-style flavors." },
      { name: "Chinese Bhel", price: "180", description: "A crunchy mix of noodles, veggies, and tangy sauces." },
      { name: "Veg Dumpling - 8pcs", price: "110", description: "Soft dumplings stuffed with seasoned vegetables and herbs." },
      { name: "Veg Spring Roll - 6pcs", price: "100", description: "Crispy rolls filled with fresh vegetables and savory flavors." }
    ]
  },
  {
    title: "Tandoori Non-Veg",
    items: [
      { name: "Alfaam Chicken - Full / Half / Quarter", price: "355 / 200 / 100", description: "Authentic charcoal-grilled chicken infused with bold Arabian spices." },
      { name: "Afghani Chicken - Half / Full", price: "385 / 200", description: "Creamy, mildly spiced chicken marinated for a rich and juicy taste." },
      { name: "Malai Kabab - 6pcs", price: "220", description: "Creamy chicken bites prepared with cheese, cream, and delicate spices." },
      { name: "Tandoori Baby Chicken - Half / Full", price: "310 / 170", description: "Young tender chicken roasted in tandoor for smoky perfection." },
      { name: "Boti Kabab - 6pcs", price: "240", description: "Juicy boneless chicken chunks marinated in traditional Indian spices." },
      { name: "Chicken Tikka - Boneless, 6pcs", price: "220", description: "Tender boneless chicken cubes marinated and flame-grilled to perfection." },
      { name: "BBQ Chicken", price: "240", description: "Smoky grilled chicken glazed with rich barbecue flavors." },
      { name: "Kalmi Kabab - 4pcs", price: "240", description: "Succulent chicken drumsticks marinated overnight and roasted perfectly." },
      { name: "Chicken Seekh Kabab", price: "240", description: "Flavor-packed minced chicken skewers grilled with aromatic herbs." },
      { name: "Irani Fish", price: "370", description: "Persian-style fish preparation with delicate spices and rich flavors." },
      { name: "Fish Tikka - 4pcs", price: "380", description: "Fresh fish pieces marinated with spices and grilled to perfection." },
      { name: "Prawn Tandoori", price: "380", description: "Juicy prawns infused with spices and cooked in authentic tandoori style." },
      { name: "Adraki Panje - Mutton, 6pcs", price: "290", description: "Tender mutton chops flavored with fresh ginger and robust spices." },
      { name: "Raan Kabab - 800-900gm", price: "290", description: "Preparation Time: Approx. 2 Hours. Whole leg delicacy slow-marinated for a rich and royal experience." }
    ]
  },
  {
    title: "Tandoori Veg",
    items: [
      { name: "Paneer Tikka - 6pcs", price: "290", description: "Soft paneer delicately prepared with aromatic herbs and signature sauces." },
      { name: "Tandoori Aloo - 8pcs", price: "190", description: "Smoky and flavorful tandoori preparation cooked to juicy perfection." },
      { name: "Veg Seekh Kabab - 8pcs", price: "190", description: "Clay-oven grilled specialty marinated in traditional Indian spices." },
      { name: "Hara Bhara Kabab - 6pcs", price: "200", description: "Crispy green kebabs packed with veggies and fresh herbs." }
    ]
  },
  {
    title: "Veg Indo-Chinese Main Course",
    items: [
      { name: "Hot Garlic Paneer", price: "260", description: "A flavorful garlic-infused dish with a spicy kick and rich Asian aromas." },
      { name: "Chilli Black Bean Mixed Veg", price: "210", description: "Mixed vegetables cooked in black bean sauce with spicy flavors and Asian seasonings." },
      { name: "Chilli Garlic Paneer", price: "190", description: "Soft paneer delicately prepared with aromatic herbs and signature sauces." },
      { name: "Black Pepper Paneer", price: "120", description: "Fresh paneer tossed with crushed black pepper and spices for a bold and smoky taste." },
      { name: "Stir Fry Mixed Veg", price: "120", description: "Fresh vegetables stir-fried with sauces and seasonings for a colorful and flavorful dish." }
    ]
  },
  {
    title: "Non-Veg Indo-Chinese Main Course",
    items: [
      { name: "Devil Chicken / Prawn / Fish - Hot", price: "210 / 260", description: "Spicy Indo-Chinese preparation loaded with hot sauces and bold flavors for spice lovers." },
      { name: "Chilli Chicken / Prawn / Fish", price: "210 / 260", description: "Wok-tossed with onions, capsicum, and signature sauces for a perfect spicy bite." },
      { name: "Hot Garlic Chicken / Prawn / Fish", price: "210 / 260", description: "Garlic-infused preparation with rich Asian sauces and a delicious spicy finish." },
      { name: "Black Bean Chilli Chicken / Prawn / Fish", price: "260 / 300", description: "Cooked with black bean sauce, bell peppers, and bold spices for rich flavor." },
      { name: "Mustard Fish", price: "250", description: "Fresh fish cooked with mustard flavors and aromatic spices for a unique taste." }
    ]
  },
  {
    title: "Chicken Main Course",
    items: [
      { name: "Butter Chicken", price: "165", description: "Tender chicken cooked in creamy tomato gravy with butter and aromatic Indian spices." },
      { name: "Chicken Lababdar", price: "290", description: "Rich and flavorful chicken curry prepared in a creamy tomato-based signature gravy." },
      { name: "Chicken Karahi", price: "210", description: "Traditional chicken preparation cooked with fresh spices, tomatoes, and herbs." },
      { name: "Chicken Curry - 4pcs", price: "200", description: "Classic homestyle chicken curry cooked with flavorful Indian spices." },
      { name: "Lahori Chicken - 4pcs", price: "240", description: "Authentic Lahori-style chicken cooked with robust spices and rich flavors." },
      { name: "Chicken Tawa Masala - 4pcs", price: "190", description: "Chicken cooked on tawa with rich masala and aromatic seasonings." },
      { name: "Reshmi Butter Masala - 6pcs", price: "300", description: "Soft chicken pieces cooked in creamy buttery gravy with rich flavors." },
      { name: "Patyala Chicken - Mosaic Special", price: "290", description: "Special house-style chicken curry prepared with rich spices and signature taste." },
      { name: "Kalmi Chicken Butter Masala", price: "290", description: "Juicy chicken drumsticks cooked in creamy butter gravy and aromatic spices." },
      { name: "Chicken Tikka Masala", price: "210", description: "Grilled chicken tikka cooked in flavorful masala gravy with smoky notes." }
    ]
  },
  {
    title: "Mutton Main Course",
    items: [
      { name: "Keema Egg", price: "290", description: "Flavorful minced mutton cooked with eggs and signature seasonings." },
      { name: "Mutton Rahra", price: "220", description: "Rich mutton curry cooked with minced meat and aromatic spices." },
      { name: "Mutton Roghan Josh", price: "220", description: "Traditional Kashmiri-style mutton curry with deep flavors and rich spices." },
      { name: "Mutton Kassa", price: "200", description: "Slow-cooked spicy mutton preparation packed with bold flavors." },
      { name: "Shahi Korma - Signature", price: "230", description: "Royal-style mutton curry prepared with creamy gravy and aromatic spices." },
      { name: "Mutton Rizala", price: "190", description: "Light and flavorful Mughlai-style mutton curry with rich texture." },
      { name: "Tawa Fry Liver", price: "240", description: "Spicy liver preparation cooked on tawa with aromatic masalas." },
      { name: "Haryali Mutton", price: "240", description: "Mutton cooked with fresh herbs and green spices for unique, rich flavors." },
      { name: "Mutton Ghee Roast", price: "220", description: "Spicy roasted mutton tossed in ghee and traditional seasonings." },
      { name: "Keema Matar", price: "290", description: "Minced mutton cooked with peas and flavorful spices." },
      { name: "Keema Alu", price: "290", description: "Rich minced mutton preparation combined with potatoes and spices." }
    ]
  },
  {
    title: "Fish / Egg Main Course",
    items: [
      { name: "Tawa Fish / Prawn", price: "260", description: "Fresh seafood cooked on tawa with spices for rich flavors." },
      { name: "Prawn Malai Curry", price: "290", description: "Creamy prawn curry cooked with mild spices and rich coconut flavors." },
      { name: "Fish Curry", price: "240", description: "Fresh fish simmered in flavorful curry with aromatic spices." },
      { name: "Egg Bhurji", price: "190", description: "Scrambled eggs cooked with onions, tomatoes and Indian spices." },
      { name: "Egg Akbari", price: "190", description: "Rich egg preparation cooked in signature gravy and aromatic seasonings." }
    ]
  },
  {
    title: "Veg Main Course",
    items: [
      { name: "Mushroom Matar", price: "220", description: "Fresh mushrooms and peas cooked in rich flavorful gravy." },
      { name: "Paneer Butter Masala", price: "210", description: "Soft paneer cubes cooked in creamy tomato and butter gravy." },
      { name: "Shahi Paneer", price: "210", description: "Royal paneer preparation cooked together with creamy gravy and aromatic spices." },
      { name: "Palak Paneer", price: "220", description: "Paneer cubes cooked in fresh spinach gravy with mild spices." },
      { name: "Matar Paneer", price: "210", description: "Classic paneer and peas curry cooked with traditional flavors." },
      { name: "Paneer Do Pyaza", price: "210", description: "Paneer cooked with double onions and flavorful spices." },
      { name: "Paneer Bhurji", price: "200", description: "Scrambled paneer cooked with spices and fresh vegetables." },
      { name: "Veg Karahi", price: "200", description: "Mixed vegetables cooked in karahi-style masala with rich flavors." },
      { name: "Veg Jalfrezi", price: "200", description: "Vegetables tossed with spices and sauces for a spicy preparation." },
      { name: "Veg Mughlai Handi - Signature", price: "220", description: "Rich Mughlai-style vegetable curry prepared with signature ingredients." },
      { name: "Dal Yellow Tadka", price: "160", description: "Simple yellow lentils tempered with aromatic Indian spices." },
      { name: "Dal Makhani", price: "160", description: "Slow-cooked black lentils in creamy gravy with buttery flavors." },
      { name: "Panchmel Dal", price: "160", description: "Five lentils blended together for rich taste and nutrition." }
    ]
  },
  {
    title: "Noodles & Rice",
    items: [
      { name: "Veg Hakka Noodle", price: "145", description: "Wok-tossed noodles loaded with fresh vegetables, sauces, and authentic Asian flavors." },
      { name: "Chicken Hakka Noodles", price: "200", description: "Flavorful noodles stir-fried with tender chicken and aromatic seasonings." },
      { name: "Prawn Hakka Noodles", price: "260", description: "Juicy prawns tossed with noodles and vegetables in signature sauces." },
      { name: "Mixed Cantonese Noodles", price: "200", description: "Classic Cantonese-style noodles cooked with mixed toppings and rich flavors." },
      { name: "Mixed American Chop Suey", price: "200", description: "Crispy noodles topped with tangy sauce and loaded with vegetables and proteins." },
      { name: "Chicken Hot Basil Noodles - Signature", price: "200", description: "Spicy noodles infused with fresh basil, chicken, and bold Asian flavors." },
      { name: "Mixed Hong Kong Noodles - Spicy", price: "200", description: "A spicy noodle preparation loaded with meats, vegetables, and signature sauces." },
      { name: "Veg Fried Rice", price: "110", description: "High-flame cooked rice tossed with vegetables and aromatic seasonings." },
      { name: "Chicken Fried Rice", price: "150", description: "Flavorful rice stir-fried with chicken and authentic Asian sauces." },
      { name: "Mixed Fried Rice", price: "200", description: "A delicious combination of rice, vegetables, and proteins tossed together." },
      { name: "Chicken Schezwan Fried Rice", price: "220", description: "Spicy Schezwan-style fried rice packed with chicken and bold flavors." },
      { name: "Veg. Schezwan Fried Rice", price: "120", description: "Vegetable fried rice prepared with spicy Schezwan sauces and seasonings." },
      { name: "Prawn Nasi Goreng - Signature", price: "290", description: "Indonesian-style rice tossed with prawns, spices, and signature sauces." },
      { name: "Chicken Shanghai Rice", price: "260", description: "Rice cooked with chicken, vegetables, and rich Shanghai-inspired flavors." },
      { name: "Chicken Chao Chao Rice", price: "240", description: "Flavor-packed rice stir-fried with chicken and aromatic seasonings." }
    ]
  },
  {
    title: "Rice Main Elements & Biryani",
    items: [
      { name: "Steem Rice", price: "90", description: "Perfectly steamed rice served as the ideal accompaniment to curries and gravies." },
      { name: "Zeera Rice", price: "100", description: "Fragrant basmati rice tempered with cumin for rich aroma and taste." },
      { name: "Veg Polao", price: "120", description: "Flavorful rice cooked with vegetables and mild aromatic spices." },
      { name: "Paneer & Peas Polao", price: "160", description: "Rice cooked with paneer, green peas, and flavorful seasonings." },
      { name: "Navratan Polao", price: "200", description: "A rich pulao loaded with vegetables, dry fruits, and aromatic spices." },
      { name: "Keema Polao", price: "200", description: "Fragrant rice cooked with minced meat and traditional spices." },
      { name: "Chicken Dum Biryani", price: "190", description: "Fragrant basmati rice layered with chicken and slow-cooked with spices." },
      { name: "Mutton Dum Biryani", price: "240", description: "Traditional dum-style biryani prepared with tender mutton and rich flavors." },
      { name: "Veg Dum Biryani", price: "160", description: "Fresh vegetables layered with aromatic rice and cooked dum-style." },
      { name: "Fish Biryani", price: "220", description: "Flavorful seafood biryani cooked with spices and fragrant rice." }
    ]
  },
  {
    title: "Bread • Naan • Roti",
    items: [
      { name: "Tandoori Roti", price: "25", description: "Whole wheat bread freshly baked in tandoor with smoky flavors." },
      { name: "Butter Roti", price: "35", description: "Soft Indian bread topped with butter for extra richness." },
      { name: "Plain Naan", price: "25", description: "Soft tandoor-baked bread with authentic Indian flavors." },
      { name: "Butter Naan", price: "30", description: "Classic naan brushed generously with melted butter." },
      { name: "Garlic Naan", price: "40", description: "Tandoor-baked naan topped with fresh garlic and butter." },
      { name: "Chilli Garlic Naan", price: "45", description: "Spicy naan flavored with garlic and chili seasoning." },
      { name: "Tawa Laccha Paratha - Ghee", price: "40", description: "Multi-layered paratha roasted in ghee for rich taste." },
      { name: "Laccha Paratha", price: "35", description: "Layered flaky bread cooked until crisp and flavorful." },
      { name: "Methi Laccha Paratha", price: "35", description: "Layered paratha infused with fresh fenugreek and aromatic flavors." },
      { name: "Masala Kulcha", price: "55", description: "Stuffed bread loaded with spicy masala filling." },
      { name: "Cheese Butter Naan", price: "90", description: "Stuffed naan filled with cheese and finished with butter." },
      { name: "Keema Butter Naan - Mutton", price: "75", description: "Soft naan stuffed with flavorful minced mutton filling." }
    ]
  },
  {
    title: "Desserts & Sides",
    items: [
      { name: "Dashshan", price: "100", description: "A delightful sweet preparation crafted for a rich dessert experience." },
      { name: "Sankhya", price: "100", description: "Traditional sweet dish prepared with rich ingredients and authentic flavors." },
      { name: "Fried Icecream Mosaic Special", price: "100", description: "Crispy outside with creamy ice cream inside for a unique dessert delight." },
      { name: "Gajar Halwa", price: "120", description: "Classic carrot dessert slow-cooked with milk and dry fruits." },
      { name: "Gulab Jamun", price: "110", description: "Classic Indian sweet with rich syrupy goodness." },
      { name: "Rasmalai", price: "125", description: "Traditional Indian delicacy with creamy saffron flavors." },
      { name: "Plain Chips", price: "55", description: "Crispy golden fries served fresh for the perfect crunchy bite." },
      { name: "Chips Masala", price: "65", description: "Seasoned fries tossed with spices for extra flavor and crunch." },
      { name: "Masala Papar", price: "35", description: "Crispy papad topped with masala and flavorful seasonings." },
      { name: "Green Salad", price: "50", description: "A refreshing mix of fresh vegetables served as a healthy side." },
      { name: "Mixed Raita", price: "70", description: "Creamy yogurt blended with vegetables and mild seasonings for freshness." }
    ]
  },
  {
    title: "Traditional Zambian Meal",
    items: [
      { name: "Nshima with Vegetables", price: "100", description: "Fresh seasonal vegetables served with traditional nshima for a wholesome meal." },
      { name: "Nshima with Chicken", price: "120", description: "Traditional Zambian nshima served with flavorful chicken and seasonal relish." },
      { name: "Nshima with Lamb", price: "130", description: "Soft nshima paired with tender, slow-cooked lamb and rich gravy." },
      { name: "Nshima with Fish or Prawns", price: "140", description: "Classic nshima paired with fish or juicy prawns." }
    ]
  }
];
