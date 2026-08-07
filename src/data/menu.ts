export interface MenuVariant {
  label: string;
  price: number;
}

export interface MenuItem {
  id: string;
  number: number;
  name: string;
  category: string;
  price: string;
  basePrice: number;
  variants?: MenuVariant[];
  description: string;
  isSignature?: boolean;
  prepTime?: string;
  isVeg?: boolean;
  portionNote?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle?: string;
  icon?: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  // --- FOOD CATEGORIES ---
  {
    id: "chinese-soups",
    title: "Chinese Soups",
    subtitle: "Category Collection",
    icon: "🥣",
    items: [
      {
        id: "cs-1",
        number: 1,
        name: "Chicken Bowl Soup",
        category: "Chinese Soups",
        price: "230",
        basePrice: 230,
        description: "A comforting bowl of rich flavors prepared with fresh ingredients and aromatic seasoning.",
        isSignature: true,
        isVeg: false
      },
      {
        id: "cs-2",
        number: 2,
        name: "Tom Yum Soup",
        category: "Chinese Soups",
        price: "120/140",
        basePrice: 120,
        variants: [
          { label: "Chicken", price: 120 },
          { label: "Prawn", price: 140 }
        ],
        description: "Succulent prawn/chicken tossed with aromatic spices and vibrant Asian sauces.",
        isVeg: false
      },
      {
        id: "cs-3",
        number: 3,
        name: "Manchow Soup",
        category: "Chinese Soups",
        price: "80/90",
        basePrice: 80,
        variants: [
          { label: "Veg", price: 80 },
          { label: "Chicken", price: 90 }
        ],
        description: "Warm, flavorful, and perfectly balanced to start your meal on a delicious note.",
        isVeg: false
      },
      {
        id: "cs-4",
        number: 4,
        name: "Sweet Corn Soup",
        category: "Chinese Soups",
        price: "80/90",
        basePrice: 80,
        variants: [
          { label: "Veg", price: 80 },
          { label: "Chicken", price: 90 }
        ],
        description: "A wholesome bowl of flavors made with fresh corn and aromatic seasonings.",
        isVeg: true
      },
      {
        id: "cs-5",
        number: 5,
        name: "Hot & Sour Soup",
        category: "Chinese Soups",
        price: "120/140",
        basePrice: 120,
        variants: [
          { label: "Veg", price: 120 },
          { label: "Chicken", price: 140 }
        ],
        description: "A spicy and tangy delight crafted to awaken your taste buds.",
        isVeg: false
      },
      {
        id: "cs-6",
        number: 6,
        name: "Noodle Soup",
        category: "Chinese Soups",
        price: "120/140",
        basePrice: 120,
        variants: [
          { label: "Veg", price: 120 },
          { label: "Chicken", price: 140 }
        ],
        description: "A hearty blend of noodles and flavors for a satisfying start.",
        isVeg: false
      },
      {
        id: "cs-7",
        number: 7,
        name: "Lemon Coriander Soup",
        category: "Chinese Soups",
        price: "80/90",
        basePrice: 80,
        variants: [
          { label: "Veg", price: 80 },
          { label: "Chicken", price: 90 }
        ],
        description: "A refreshing mix of zesty lemon and fragrant coriander in every sip.",
        isVeg: true
      }
    ]
  },
  {
    id: "tandoori-non-veg",
    title: "Tandoori Non-Veg",
    subtitle: "Category Collection",
    icon: "🍗",
    items: [
      {
        id: "tnv-1",
        number: 1,
        name: "Alfaam Chicken",
        category: "Tandoori Non-Veg",
        price: "355/200/100",
        basePrice: 100,
        variants: [
          { label: "Full", price: 355 },
          { label: "Half", price: 200 },
          { label: "Quarter", price: 100 }
        ],
        description: "Authentic charcoal-grilled chicken infused with bold Arabian spices.",
        isVeg: false
      },
      {
        id: "tnv-2",
        number: 2,
        name: "Afghani Chicken",
        category: "Tandoori Non-Veg",
        price: "385/200",
        basePrice: 200,
        variants: [
          { label: "Full", price: 385 },
          { label: "Half", price: 200 }
        ],
        description: "Creamy, mildly spiced chicken marinated for a rich and juicy taste.",
        isVeg: false
      },
      {
        id: "tnv-3",
        number: 3,
        name: "Malai Kabab",
        category: "Tandoori Non-Veg",
        price: "220",
        basePrice: 220,
        portionNote: "6 pcs",
        description: "Creamy chicken bites prepared with cheese, cream, and delicate spices.",
        isVeg: false
      },
      {
        id: "tnv-4",
        number: 4,
        name: "Tandoori Baby Chicken",
        category: "Tandoori Non-Veg",
        price: "310/170",
        basePrice: 170,
        variants: [
          { label: "Full", price: 310 },
          { label: "Half", price: 170 }
        ],
        description: "Young tender chicken roasted in tandoor for smoky perfection.",
        isVeg: false
      },
      {
        id: "tnv-5",
        number: 5,
        name: "Boti Kabab",
        category: "Tandoori Non-Veg",
        price: "240",
        basePrice: 240,
        portionNote: "6 pcs",
        description: "Juicy boneless chicken chunks marinated in traditional Indian spices.",
        isVeg: false
      },
      {
        id: "tnv-6",
        number: 6,
        name: "Chicken Seekh Kabab",
        category: "Tandoori Non-Veg",
        price: "240",
        basePrice: 240,
        description: "Flavor-packed minced chicken skewers grilled with aromatic herbs.",
        isVeg: false
      },
      {
        id: "tnv-7",
        number: 7,
        name: "Chicken Tikka (Boneless)",
        category: "Tandoori Non-Veg",
        price: "220",
        basePrice: 220,
        portionNote: "6 pcs",
        description: "Tender boneless chicken cubes marinated and flame-grilled to perfection.",
        isVeg: false
      },
      {
        id: "tnv-8",
        number: 8,
        name: "BBQ (Chicken)",
        category: "Tandoori Non-Veg",
        price: "240",
        basePrice: 240,
        description: "Smoky grilled chicken glazed with rich barbecue flavors.",
        isVeg: false
      },
      {
        id: "tnv-9",
        number: 9,
        name: "Kalmi Kabab",
        category: "Tandoori Non-Veg",
        price: "240",
        basePrice: 240,
        portionNote: "4 pcs",
        description: "Succulent chicken drumsticks marinated overnight and roasted perfectly.",
        isVeg: false
      },
      {
        id: "tnv-10",
        number: 10,
        name: "Irani Fish",
        category: "Tandoori Non-Veg",
        price: "370",
        basePrice: 370,
        description: "Persian-style fish preparation with delicate spices and rich flavors.",
        isVeg: false
      },
      {
        id: "tnv-11",
        number: 11,
        name: "Fish Tikka",
        category: "Tandoori Non-Veg",
        price: "380",
        basePrice: 380,
        portionNote: "4 pcs",
        description: "Fresh fish pieces marinated with spices and grilled to perfection.",
        isVeg: false
      },
      {
        id: "tnv-12",
        number: 12,
        name: "Prawn Tandoori",
        category: "Tandoori Non-Veg",
        price: "380",
        basePrice: 380,
        description: "Juicy prawns infused with spices and cooked in authentic tandoori style.",
        isVeg: false
      },
      {
        id: "tnv-13",
        number: 13,
        name: "Adraki Panje (Mutton)",
        category: "Tandoori Non-Veg",
        price: "290",
        basePrice: 290,
        portionNote: "6 pcs",
        description: "Tender mutton chops flavored with fresh ginger and robust spices.",
        isVeg: false
      },
      {
        id: "tnv-14",
        number: 14,
        name: "Raan Kabab",
        category: "Tandoori Non-Veg",
        price: "290",
        basePrice: 290,
        portionNote: "800–900 gm",
        prepTime: "Approx. 2 Hours",
        description: "Whole leg delicacy slow-marinated for a rich and royal experience.",
        isSignature: true,
        isVeg: false
      }
    ]
  },
  {
    id: "tandoori-veg",
    title: "Tandoori Veg",
    subtitle: "Category Collection",
    icon: "🍢",
    items: [
      {
        id: "tv-1",
        number: 1,
        name: "Paneer Tikka",
        category: "Tandoori Veg",
        price: "290",
        basePrice: 290,
        portionNote: "6 pcs",
        description: "Soft paneer delicately prepared with aromatic herbs and signature sauces.",
        isVeg: true
      },
      {
        id: "tv-2",
        number: 2,
        name: "Tandoori Aloo",
        category: "Tandoori Veg",
        price: "190",
        basePrice: 190,
        portionNote: "8 pcs",
        description: "Smoky and flavorful tandoori preparation cooked to juicy perfection.",
        isVeg: true
      },
      {
        id: "tv-3",
        number: 3,
        name: "Veg Seekh Kabab",
        category: "Tandoori Veg",
        price: "190",
        basePrice: 190,
        portionNote: "8 pcs",
        description: "Clay-oven grilled specialty marinated in traditional Indian spices.",
        isVeg: true
      },
      {
        id: "tv-4",
        number: 4,
        name: "Hara Bhara Kabab",
        category: "Tandoori Veg",
        price: "200",
        basePrice: 200,
        portionNote: "6 pcs",
        description: "Crispy green kebabs packed with veggies and fresh herbs.",
        isVeg: true
      }
    ]
  },
  {
    id: "indo-chinese-starters-non-veg",
    title: "Indo-Chinese Starters – Non Veg",
    subtitle: "Category Collection",
    icon: "🔥",
    items: [
      {
        id: "ics-nv-1",
        number: 1,
        name: "Chicken Spring Roll",
        category: "Indo-Chinese Starters – Non Veg",
        price: "160",
        basePrice: 160,
        portionNote: "6 pcs",
        description: "Carefully prepared to deliver authentic flavors and a memorable dining experience.",
        isVeg: false
      },
      {
        id: "ics-nv-2",
        number: 2,
        name: "Chicken Lollipop",
        category: "Indo-Chinese Starters – Non Veg",
        price: "165",
        basePrice: 165,
        portionNote: "8 pcs",
        description: "Crispy chicken wings tossed with bold Indo-Chinese flavors.",
        isVeg: false
      },
      {
        id: "ics-nv-3",
        number: 3,
        name: "Chicken Dumpling",
        category: "Indo-Chinese Starters – Non Veg",
        price: "155",
        basePrice: 155,
        portionNote: "8 pcs",
        description: "A delicious house favorite combining rich aromas with bold taste.",
        isVeg: false
      },
      {
        id: "ics-nv-4",
        number: 4,
        name: "Dragon Special",
        category: "Indo-Chinese Starters – Non Veg",
        price: "230",
        basePrice: 230,
        variants: [
          { label: "Dragon Chicken", price: 230 },
          { label: "Dragon Prawn", price: 230 },
          { label: "Dragon Fish", price: 230 }
        ],
        description: "Tender seafood preparation infused with herbs, spices, and bold flavors.",
        isVeg: false
      },
      {
        id: "ics-nv-5",
        number: 5,
        name: "Chilli Chicken",
        category: "Indo-Chinese Starters – Non Veg",
        price: "170",
        basePrice: 170,
        description: "Crispy chicken tossed with onions, peppers, and bold Indo-Chinese chilli flavors.",
        isVeg: false
      },
      {
        id: "ics-nv-6",
        number: 6,
        name: "Chicken 65",
        category: "Indo-Chinese Starters – Non Veg",
        price: "145",
        basePrice: 145,
        description: "Carefully prepared to deliver authentic flavors and a memorable dining experience.",
        isVeg: false
      },
      {
        id: "ics-nv-7",
        number: 7,
        name: "Prawn 65",
        category: "Indo-Chinese Starters – Non Veg",
        price: "230",
        basePrice: 230,
        description: "Succulent prawns tossed with aromatic spices and vibrant Asian sauces.",
        isVeg: false
      },
      {
        id: "ics-nv-8",
        number: 8,
        name: "Lemon Chicken",
        category: "Indo-Chinese Starters – Non Veg",
        price: "160",
        basePrice: 160,
        description: "A chef-crafted specialty prepared with fresh ingredients and signature flavors.",
        isVeg: false
      },
      {
        id: "ics-nv-9",
        number: 9,
        name: "Honey Crispy Chicken",
        category: "Indo-Chinese Starters – Non Veg",
        price: "150",
        basePrice: 150,
        description: "A delicious house favorite combining rich aromas with bold taste.",
        isVeg: false
      },
      {
        id: "ics-nv-10",
        number: 10,
        name: "Drum Up Heaven Chicken",
        category: "Indo-Chinese Starters – Non Veg",
        price: "160",
        basePrice: 160,
        description: "Signature chicken dish loaded with rich flavors and spices.",
        isSignature: true,
        isVeg: false
      },
      {
        id: "ics-nv-11",
        number: 11,
        name: "Dynamic Cocktail Prawn",
        category: "Indo-Chinese Starters – Non Veg",
        price: "230",
        basePrice: 230,
        description: "Succulent prawns tossed with aromatic spices and vibrant Asian sauces.",
        isVeg: false
      },
      {
        id: "ics-nv-12",
        number: 12,
        name: "Prawn Tempura",
        category: "Indo-Chinese Starters – Non Veg",
        price: "220",
        basePrice: 220,
        portionNote: "Japanese spices",
        description: "Lightly battered prawns fried for a crispy Japanese-style taste.",
        isVeg: false
      }
    ]
  },
  {
    id: "indo-chinese-starters-veg",
    title: "Indo-Chinese Starters – Veg",
    subtitle: "Category Collection",
    icon: "🥬",
    items: [
      {
        id: "ics-v-1",
        number: 1,
        name: "Corn Pepper Salt",
        category: "Indo-Chinese Starters – Veg",
        price: "140",
        basePrice: 140,
        portionNote: "170gm corn",
        description: "A chef-crafted specialty prepared with fresh ingredients and signature flavors.",
        isVeg: true
      },
      {
        id: "ics-v-2",
        number: 2,
        name: "Veg Manchurian (Dry)",
        category: "Indo-Chinese Starters – Veg",
        price: "150",
        basePrice: 150,
        description: "Vegetable balls coated in flavorful Indo-Chinese spices.",
        isVeg: true
      },
      {
        id: "ics-v-3",
        number: 3,
        name: "Crispy Chilli Potato",
        category: "Indo-Chinese Starters – Veg",
        price: "120",
        basePrice: 120,
        description: "Crispy potato fingers tossed with spicy and tangy sauces.",
        isVeg: true
      },
      {
        id: "ics-v-4",
        number: 4,
        name: "Mushroom Cheese Chilli",
        category: "Indo-Chinese Starters – Veg",
        price: "260",
        basePrice: 260,
        description: "Cheesy mushrooms cooked with spices and colorful peppers.",
        isVeg: true
      },
      {
        id: "ics-v-5",
        number: 5,
        name: "Chilli Paneer",
        category: "Indo-Chinese Starters – Veg",
        price: "240",
        basePrice: 240,
        description: "Paneer cubes tossed in spicy sauces with crunchy vegetables.",
        isVeg: true
      },
      {
        id: "ics-v-6",
        number: 6,
        name: "Paneer 65",
        category: "Indo-Chinese Starters – Veg",
        price: "170",
        basePrice: 170,
        description: "Crispy paneer bites coated with bold South-style flavors.",
        isVeg: true
      },
      {
        id: "ics-v-7",
        number: 7,
        name: "Chinese Bhel",
        category: "Indo-Chinese Starters – Veg",
        price: "180",
        basePrice: 180,
        description: "A crunchy mix of noodles, veggies, and tangy sauces.",
        isVeg: true
      },
      {
        id: "ics-v-8",
        number: 8,
        name: "Veg. Dumpling",
        category: "Indo-Chinese Starters – Veg",
        price: "110",
        basePrice: 110,
        portionNote: "8 pcs",
        description: "Soft dumplings stuffed with seasoned vegetables and herbs.",
        isVeg: true
      },
      {
        id: "ics-v-9",
        number: 9,
        name: "Veg. Spring Roll",
        category: "Indo-Chinese Starters – Veg",
        price: "100",
        basePrice: 100,
        portionNote: "6 pcs",
        description: "Crispy rolls filled with fresh vegetables and savory flavors.",
        isVeg: true
      }
    ]
  },
  {
    id: "veg-indo-chinese-main-course",
    title: "Veg. Indo-Chinese Main Course",
    subtitle: "Category Collection",
    icon: "🍱",
    items: [
      {
        id: "vic-m-1",
        number: 1,
        name: "Hot Garlic Paneer",
        category: "Veg. Indo-Chinese Main Course",
        price: "260",
        basePrice: 260,
        description: "A flavorful garlic-infused dish with a spicy kick and rich Asian aromas.",
        isVeg: true
      },
      {
        id: "vic-m-2",
        number: 2,
        name: "Chilli Garlic Paneer",
        category: "Veg. Indo-Chinese Main Course",
        price: "210",
        basePrice: 210,
        description: "Soft paneer delicately prepared with aromatic herbs and signature sauces.",
        isVeg: true
      },
      {
        id: "vic-m-3",
        number: 3,
        name: "Black Pepper Paneer",
        category: "Veg. Indo-Chinese Main Course",
        price: "190",
        basePrice: 190,
        description: "Fresh paneer tossed with crushed black pepper and spices for a bold and smoky taste.",
        isVeg: true
      },
      {
        id: "vic-m-4",
        number: 4,
        name: "Stir Fry Mixed Veg.",
        category: "Veg. Indo-Chinese Main Course",
        price: "120",
        basePrice: 120,
        description: "Fresh vegetables stir-fried with sauces and seasonings for a colorful and flavorful dish.",
        isVeg: true
      },
      {
        id: "vic-m-5",
        number: 5,
        name: "Chilli Black Bean Mixed Veg.",
        category: "Veg. Indo-Chinese Main Course",
        price: "120",
        basePrice: 120,
        description: "Mixed vegetables cooked in black bean sauce with spicy flavors and Asian seasonings.",
        isVeg: true
      }
    ]
  },
  {
    id: "non-veg-indo-chinese-main-course",
    title: "Non-Veg. Indo-Chinese Main Course",
    subtitle: "Category Collection",
    icon: "🥘",
    items: [
      {
        id: "nvic-m-1",
        number: 1,
        name: "Devil Special (Hot)",
        category: "Non-Veg. Indo-Chinese Main Course",
        price: "210/260",
        basePrice: 210,
        variants: [
          { label: "Devil Chicken", price: 210 },
          { label: "Devil Prawn", price: 260 },
          { label: "Devil Fish", price: 260 }
        ],
        description: "Spicy Indo-Chinese preparation loaded with hot sauces and bold flavors for spice lovers.",
        isVeg: false
      },
      {
        id: "nvic-m-2",
        number: 2,
        name: "Chilli Special Main Course",
        category: "Non-Veg. Indo-Chinese Main Course",
        price: "210/260",
        basePrice: 210,
        variants: [
          { label: "Chilli Chicken", price: 210 },
          { label: "Chilli Prawn", price: 260 },
          { label: "Chilli Fish", price: 260 }
        ],
        description: "Wok-tossed with onions, capsicum, and signature sauces for a perfect spicy bite.",
        isVeg: false
      },
      {
        id: "nvic-m-3",
        number: 3,
        name: "Hot Garlic Special",
        category: "Non-Veg. Indo-Chinese Main Course",
        price: "210/260",
        basePrice: 210,
        variants: [
          { label: "Hot Garlic Chicken", price: 210 },
          { label: "Hot Garlic Prawn", price: 260 },
          { label: "Hot Garlic Fish", price: 260 }
        ],
        description: "Garlic-infused preparation with rich Asian sauces and a delicious spicy finish.",
        isVeg: false
      },
      {
        id: "nvic-m-4",
        number: 4,
        name: "Black Bean Chilli Special",
        category: "Non-Veg. Indo-Chinese Main Course",
        price: "260/300",
        basePrice: 260,
        variants: [
          { label: "Black Bean Chicken", price: 260 },
          { label: "Black Bean Prawn", price: 300 },
          { label: "Black Bean Fish", price: 300 }
        ],
        description: "Cooked with black bean sauce, bell peppers, and bold spices for rich flavor.",
        isVeg: false
      },
      {
        id: "nvic-m-5",
        number: 5,
        name: "Mustard Fish",
        category: "Non-Veg. Indo-Chinese Main Course",
        price: "250",
        basePrice: 250,
        description: "Fresh fish cooked with mustard flavors and aromatic spices for a unique taste.",
        isVeg: false
      }
    ]
  },
  {
    id: "chicken-main-course",
    title: "Chicken Main Course",
    subtitle: "Category Collection",
    icon: "🍛",
    items: [
      {
        id: "cmc-1",
        number: 1,
        name: "Butter Chicken",
        category: "Chicken Main Course",
        price: "165",
        basePrice: 165,
        description: "Tender chicken cooked in creamy tomato gravy with butter and aromatic Indian spices.",
        isVeg: false
      },
      {
        id: "cmc-2",
        number: 2,
        name: "Chicken Lababdar",
        category: "Chicken Main Course",
        price: "330",
        basePrice: 330,
        description: "Rich and flavorful chicken curry prepared in a creamy tomato-based signature gravy.",
        isVeg: false
      },
      {
        id: "cmc-3",
        number: 3,
        name: "Chicken Karahi",
        category: "Chicken Main Course",
        price: "210",
        basePrice: 210,
        description: "Traditional chicken preparation cooked with fresh spices, tomatoes, and herbs.",
        isVeg: false
      },
      {
        id: "cmc-4",
        number: 4,
        name: "Chicken Curry",
        category: "Chicken Main Course",
        price: "200",
        basePrice: 200,
        portionNote: "4 pcs",
        description: "Classic homestyle chicken curry cooked with flavorful Indian spices.",
        isVeg: false
      },
      {
        id: "cmc-5",
        number: 5,
        name: "Chicken Tawa Masala",
        category: "Chicken Main Course",
        price: "190",
        basePrice: 190,
        portionNote: "4 pcs",
        description: "Chicken cooked on tawa with rich masala and aromatic seasonings.",
        isVeg: false
      },
      {
        id: "cmc-6",
        number: 6,
        name: "Reshmi Butter Masala",
        category: "Chicken Main Course",
        price: "300",
        basePrice: 300,
        portionNote: "6 pcs",
        description: "Soft chicken pieces cooked in creamy buttery gravy with rich flavors.",
        isVeg: false
      },
      {
        id: "cmc-7",
        number: 7,
        name: "Patyala Chicken",
        category: "Chicken Main Course",
        price: "290",
        basePrice: 290,
        description: "Special house-style chicken curry prepared with rich spices and signature taste.",
        isSignature: true,
        isVeg: false
      },
      {
        id: "cmc-8",
        number: 8,
        name: "Kalmi Chicken Butter Masala",
        category: "Chicken Main Course",
        price: "290",
        basePrice: 290,
        description: "Juicy chicken drumsticks cooked in creamy butter gravy and aromatic spices.",
        isVeg: false
      },
      {
        id: "cmc-9",
        number: 9,
        name: "Lahori Chicken",
        category: "Chicken Main Course",
        price: "240",
        basePrice: 240,
        portionNote: "4 pcs",
        description: "Authentic Lahori-style chicken cooked with robust spices and rich flavors.",
        isVeg: false
      },
      {
        id: "cmc-10",
        number: 10,
        name: "Chicken Tikka Masala",
        category: "Chicken Main Course",
        price: "210",
        basePrice: 210,
        description: "Grilled chicken tikka cooked in flavorful masala gravy with smoky notes.",
        isVeg: false
      }
    ]
  },
  {
    id: "mutton",
    title: "Mutton Main Course",
    subtitle: "Category Collection",
    icon: "🥩",
    items: [
      {
        id: "m-1",
        number: 1,
        name: "Mutton Rahra",
        category: "Mutton",
        price: "220",
        basePrice: 220,
        description: "Rich mutton curry cooked with minced meat and aromatic spices.",
        isVeg: false
      },
      {
        id: "m-2",
        number: 2,
        name: "Mutton Roghan Josh",
        category: "Mutton",
        price: "220",
        basePrice: 220,
        description: "Traditional Kashmiri-style mutton curry with deep flavors and rich spices.",
        isVeg: false
      },
      {
        id: "m-3",
        number: 3,
        name: "Mutton Kassa",
        category: "Mutton",
        price: "200",
        basePrice: 200,
        description: "Slow-cooked spicy mutton preparation packed with bold flavors.",
        isVeg: false
      },
      {
        id: "m-4",
        number: 4,
        name: "Shahi Korma",
        category: "Mutton",
        price: "230",
        basePrice: 230,
        description: "Royal-style mutton curry prepared with creamy gravy and aromatic spices.",
        isSignature: true,
        isVeg: false
      },
      {
        id: "m-5",
        number: 5,
        name: "Mutton Rizala",
        category: "Mutton",
        price: "190",
        basePrice: 190,
        description: "Light and flavorful Mughlai-style mutton curry with rich texture.",
        isVeg: false
      },
      {
        id: "m-6",
        number: 6,
        name: "Tawa Fry Liver",
        category: "Mutton",
        price: "240",
        basePrice: 240,
        description: "Spicy liver preparation cooked on tawa with aromatic masalas.",
        isVeg: false
      },
      {
        id: "m-7",
        number: 7,
        name: "Haryali Mutton",
        category: "Mutton",
        price: "240",
        basePrice: 240,
        description: "Mutton cooked with fresh herbs and green spices for unique flavors.",
        isVeg: false
      },
      {
        id: "m-8",
        number: 8,
        name: "Mutton Ghee Roast",
        category: "Mutton",
        price: "220",
        basePrice: 220,
        description: "Spicy roasted mutton tossed in ghee and traditional seasonings.",
        isVeg: false
      },
      {
        id: "m-9",
        number: 9,
        name: "Keema Matar",
        category: "Mutton",
        price: "290",
        basePrice: 290,
        description: "Minced mutton cooked with peas and flavorful spices.",
        isVeg: false
      },
      {
        id: "m-10",
        number: 10,
        name: "Keema Alu",
        category: "Mutton",
        price: "290",
        basePrice: 290,
        description: "Rich minced mutton preparation combined with potatoes and spices.",
        isVeg: false
      },
      {
        id: "m-11",
        number: 11,
        name: "Keema Egg",
        category: "Mutton",
        price: "290",
        basePrice: 290,
        description: "Flavorful minced mutton cooked with eggs and signature seasonings.",
        isVeg: false
      }
    ]
  },
  {
    id: "fish-egg",
    title: "Fish / Egg Main Course",
    subtitle: "Category Collection",
    icon: "🐟",
    items: [
      {
        id: "fe-1",
        number: 1,
        name: "Tawa Fish / Prawn",
        category: "Fish / Egg",
        price: "220",
        basePrice: 220,
        variants: [
          { label: "Fish", price: 220 },
          { label: "Prawn", price: 220 }
        ],
        description: "Fresh seafood cooked on tawa with spices for smoky and rich flavors.",
        isVeg: false
      },
      {
        id: "fe-2",
        number: 2,
        name: "Prawn Malai Curry",
        category: "Fish / Egg",
        price: "250",
        basePrice: 250,
        description: "Creamy prawn curry cooked with mild spices and rich coconut flavors.",
        isVeg: false
      },
      {
        id: "fe-3",
        number: 3,
        name: "Fish Curry",
        category: "Fish / Egg",
        price: "200",
        basePrice: 200,
        description: "Fresh fish simmered in flavorful curry with aromatic spices.",
        isVeg: false
      },
      {
        id: "fe-4",
        number: 4,
        name: "Egg Bhurji",
        category: "Fish / Egg",
        price: "190",
        basePrice: 190,
        description: "Scrambled eggs cooked with onions, tomatoes, and Indian spices.",
        isVeg: false
      },
      {
        id: "fe-5",
        number: 5,
        name: "Egg Akbari",
        category: "Fish / Egg",
        price: "190",
        basePrice: 190,
        description: "Rich egg preparation cooked in signature gravy and aromatic seasonings.",
        isVeg: false
      }
    ]
  },
  {
    id: "veg-main-course",
    title: "Veg. Main Course",
    subtitle: "Category Collection",
    icon: "🍲",
    items: [
      {
        id: "vmc-1",
        number: 1,
        name: "Mushroom Matar",
        category: "Veg. Main Course",
        price: "220",
        basePrice: 220,
        description: "Fresh mushrooms and peas cooked together in rich flavorful gravy.",
        isVeg: true
      },
      {
        id: "vmc-2",
        number: 2,
        name: "Paneer Butter Masala",
        category: "Veg. Main Course",
        price: "210",
        basePrice: 210,
        description: "Soft paneer cubes cooked in creamy tomato and butter gravy.",
        isVeg: true
      },
      {
        id: "vmc-3",
        number: 3,
        name: "Shahi Paneer",
        category: "Veg. Main Course",
        price: "210",
        basePrice: 210,
        description: "Royal paneer preparation cooked with creamy gravy and aromatic spices.",
        isVeg: true
      },
      {
        id: "vmc-4",
        number: 4,
        name: "Palak Paneer",
        category: "Veg. Main Course",
        price: "220",
        basePrice: 220,
        description: "Paneer cubes cooked in fresh spinach gravy with mild spices.",
        isVeg: true
      },
      {
        id: "vmc-5",
        number: 5,
        name: "Matar Paneer",
        category: "Veg. Main Course",
        price: "210",
        basePrice: 210,
        description: "Classic paneer and peas curry cooked with traditional flavors.",
        isVeg: true
      },
      {
        id: "vmc-6",
        number: 6,
        name: "Paneer Do Pyaza",
        category: "Veg. Main Course",
        price: "210",
        basePrice: 210,
        description: "Paneer cooked with double onions and flavorful spices.",
        isVeg: true
      },
      {
        id: "vmc-7",
        number: 7,
        name: "Paneer Bhurji",
        category: "Veg. Main Course",
        price: "200",
        basePrice: 200,
        description: "Scrambled paneer cooked with spices and fresh vegetables.",
        isVeg: true
      },
      {
        id: "vmc-8",
        number: 8,
        name: "Veg Karahi",
        category: "Veg. Main Course",
        price: "200",
        basePrice: 200,
        description: "Mixed vegetables cooked in karahi-style masala with rich flavors.",
        isVeg: true
      },
      {
        id: "vmc-9",
        number: 9,
        name: "Veg Jalfrezi",
        category: "Veg. Main Course",
        price: "200",
        basePrice: 200,
        description: "Vegetables tossed with spices and sauces for a spicy preparation.",
        isVeg: true
      },
      {
        id: "vmc-10",
        number: 10,
        name: "Veg Mughlai Handi",
        category: "Veg. Main Course",
        price: "220",
        basePrice: 220,
        description: "Rich Mughlai-style vegetable curry prepared with signature ingredients.",
        isSignature: true,
        isVeg: true
      },
      {
        id: "vmc-11",
        number: 11,
        name: "Dal Yellow Tadka",
        category: "Veg. Main Course",
        price: "160",
        basePrice: 160,
        description: "Simple yellow lentils tempered with aromatic Indian spices.",
        isVeg: true
      },
      {
        id: "vmc-12",
        number: 12,
        name: "Dal Makhani",
        category: "Veg. Main Course",
        price: "160",
        basePrice: 160,
        description: "Slow-cooked black lentils in creamy gravy with buttery flavors.",
        isVeg: true
      },
      {
        id: "vmc-13",
        number: 13,
        name: "Panchmel Dal",
        category: "Veg. Main Course",
        price: "160",
        basePrice: 160,
        description: "Five lentils blended together for rich taste and nutrition.",
        isVeg: true
      }
    ]
  },
  {
    id: "noodles",
    title: "Noodles",
    subtitle: "Category Collection",
    icon: "🍜",
    items: [
      {
        id: "n-1",
        number: 1,
        name: "Veg Hakka Noodle",
        category: "Noodles",
        price: "145",
        basePrice: 145,
        description: "Wok-tossed noodles loaded with fresh vegetables, sauces, and authentic Asian flavors.",
        isVeg: true
      },
      {
        id: "n-2",
        number: 2,
        name: "Chicken Hakka Noodles",
        category: "Noodles",
        price: "200",
        basePrice: 200,
        description: "Flavorful noodles stir-fried with tender chicken and aromatic seasonings.",
        isVeg: false
      },
      {
        id: "n-3",
        number: 3,
        name: "Prawn Hakka Noodles",
        category: "Noodles",
        price: "260",
        basePrice: 260,
        description: "Juicy prawns tossed with noodles and vegetables in signature sauces.",
        isVeg: false
      },
      {
        id: "n-4",
        number: 4,
        name: "Chicken Hot Basil Noodles",
        category: "Noodles",
        price: "200",
        basePrice: 200,
        description: "Spicy noodles infused with fresh basil, chicken, and bold Asian flavors.",
        isSignature: true,
        isVeg: false
      },
      {
        id: "n-5",
        number: 5,
        name: "Mixed Hong Kong Noodles (Spicy)",
        category: "Noodles",
        price: "200",
        basePrice: 200,
        description: "A spicy noodle preparation loaded with meats, vegetables, and signature sauces.",
        isVeg: false
      },
      {
        id: "n-6",
        number: 6,
        name: "Mixed Cantonese Noodles",
        category: "Noodles",
        price: "200",
        basePrice: 200,
        description: "Classic Cantonese-style noodles cooked with mixed toppings and rich flavors.",
        isVeg: false
      },
      {
        id: "n-7",
        number: 7,
        name: "Mixed American Chop Suey",
        category: "Noodles",
        price: "200",
        basePrice: 200,
        description: "Crispy noodles topped with tangy sauce and loaded with vegetables and proteins.",
        isVeg: false
      }
    ]
  },
  {
    id: "fried-rice",
    title: "Fried Rice",
    subtitle: "Category Collection",
    icon: "🍚",
    items: [
      {
        id: "fr-1",
        number: 1,
        name: "Veg Fried Rice",
        category: "Fried Rice",
        price: "110",
        basePrice: 110,
        description: "High-flame cooked rice tossed with vegetables and aromatic seasonings.",
        isVeg: true
      },
      {
        id: "fr-2",
        number: 2,
        name: "Chicken Fried Rice",
        category: "Fried Rice",
        price: "150",
        basePrice: 150,
        description: "Flavorful rice stir-fried with chicken and authentic Asian sauces.",
        isVeg: false
      },
      {
        id: "fr-3",
        number: 3,
        name: "Mixed Fried Rice",
        category: "Fried Rice",
        price: "200",
        basePrice: 200,
        description: "A delicious combination of rice, vegetables, and proteins tossed together.",
        isVeg: false
      },
      {
        id: "fr-4",
        number: 4,
        name: "Chicken Schezwan Fried Rice",
        category: "Fried Rice",
        price: "220",
        basePrice: 220,
        description: "Spicy Schezwan-style fried rice packed with chicken and bold flavors.",
        isVeg: false
      },
      {
        id: "fr-5",
        number: 5,
        name: "Veg. Schezwan Fried Rice",
        category: "Fried Rice",
        price: "120",
        basePrice: 120,
        description: "Vegetable fried rice prepared with spicy Schezwan sauces and seasonings.",
        isVeg: true
      },
      {
        id: "fr-6",
        number: 6,
        name: "Prawn Nasi Goreng",
        category: "Fried Rice",
        price: "290",
        basePrice: 290,
        description: "Indonesian-style rice tossed with prawns, spices, and signature sauces.",
        isSignature: true,
        isVeg: false
      },
      {
        id: "fr-7",
        number: 7,
        name: "Chicken Shanghai Rice",
        category: "Fried Rice",
        price: "260",
        basePrice: 260,
        description: "Rice cooked with chicken, vegetables, and rich Shanghai-inspired flavors.",
        isVeg: false
      },
      {
        id: "fr-8",
        number: 8,
        name: "Chicken Chao Chao Rice",
        category: "Fried Rice",
        price: "240",
        basePrice: 240,
        description: "Flavor-packed rice stir-fried with chicken and aromatic seasonings.",
        isVeg: false
      }
    ]
  },
  {
    id: "rice",
    title: "Rice",
    subtitle: "Category Collection",
    icon: "🌾",
    items: [
      {
        id: "r-1",
        number: 1,
        name: "Steem Rice",
        category: "Rice",
        price: "90",
        basePrice: 90,
        description: "Perfectly steamed rice served as the ideal accompaniment to curries and gravies.",
        isVeg: true
      },
      {
        id: "r-2",
        number: 2,
        name: "Zeera Rice",
        category: "Rice",
        price: "100",
        basePrice: 100,
        description: "Fragrant basmati rice tempered with cumin for rich aroma and taste.",
        isVeg: true
      },
      {
        id: "r-3",
        number: 3,
        name: "Veg Polao",
        category: "Rice",
        price: "120",
        basePrice: 120,
        description: "Flavorful rice cooked with vegetables and mild aromatic spices.",
        isVeg: true
      },
      {
        id: "r-4",
        number: 4,
        name: "Paneer & Peas Polao",
        category: "Rice",
        price: "160",
        basePrice: 160,
        description: "Rice cooked with paneer, green peas, and flavorful seasonings.",
        isVeg: true
      },
      {
        id: "r-5",
        number: 5,
        name: "Keema Polao",
        category: "Rice",
        price: "200",
        basePrice: 200,
        description: "Fragrant rice cooked with minced meat and traditional spices.",
        isVeg: false
      },
      {
        id: "r-6",
        number: 6,
        name: "Navratan Polao",
        category: "Rice",
        price: "200",
        basePrice: 200,
        description: "A rich pulao loaded with vegetables, dry fruits, and aromatic spices.",
        isVeg: true
      }
    ]
  },
  {
    id: "biryani-special",
    title: "Biryani Special",
    subtitle: "Category Collection",
    icon: "🏺",
    items: [
      {
        id: "bs-1",
        number: 1,
        name: "Chicken Dum Biryani",
        category: "Biryani Special",
        price: "190",
        basePrice: 190,
        description: "Fragrant basmati rice layered with chicken and slow-cooked with spices.",
        isVeg: false
      },
      {
        id: "bs-2",
        number: 2,
        name: "Mutton Dum Biryani",
        category: "Biryani Special",
        price: "240",
        basePrice: 240,
        description: "Traditional dum-style biryani prepared with tender mutton and rich flavors.",
        isVeg: false
      },
      {
        id: "bs-3",
        number: 3,
        name: "Veg Dum Biryani",
        category: "Biryani Special",
        price: "160",
        basePrice: 160,
        description: "Fresh vegetables layered with aromatic rice and cooked dum-style.",
        isVeg: true
      },
      {
        id: "bs-4",
        number: 4,
        name: "Fish Biryani",
        category: "Biryani Special",
        price: "200",
        basePrice: 200,
        description: "Flavorful seafood biryani cooked with spices and fragrant rice.",
        isVeg: false
      }
    ]
  },
  {
    id: "bread-naan-roti",
    title: "Bread • Naan • Roti",
    subtitle: "Category Collection",
    icon: "🫓",
    items: [
      {
        id: "bnr-1",
        number: 1,
        name: "Tandoori Roti",
        category: "Bread • Naan • Roti",
        price: "25",
        basePrice: 25,
        description: "Whole wheat bread freshly baked in tandoor with smoky flavors.",
        isVeg: true
      },
      {
        id: "bnr-2",
        number: 2,
        name: "Butter Roti",
        category: "Bread • Naan • Roti",
        price: "35",
        basePrice: 35,
        description: "Soft Indian bread topped with butter for extra richness.",
        isVeg: true
      },
      {
        id: "bnr-3",
        number: 3,
        name: "Laccha Paratha",
        category: "Bread • Naan • Roti",
        price: "35",
        basePrice: 35,
        description: "Layered flaky bread cooked until crisp and flavorful.",
        isVeg: true
      },
      {
        id: "bnr-4",
        number: 4,
        name: "Methi Laccha Paratha",
        category: "Bread • Naan • Roti",
        price: "35",
        basePrice: 35,
        description: "Layered paratha infused with fresh fenugreek and aromatic flavors.",
        isVeg: true
      },
      {
        id: "bnr-5",
        number: 5,
        name: "Tawa Laccha Paratha (Ghee)",
        category: "Bread • Naan • Roti",
        price: "40",
        basePrice: 40,
        description: "Multi-layered paratha roasted in ghee for rich taste.",
        isVeg: true
      },
      {
        id: "bnr-6",
        number: 6,
        name: "Plain Naan",
        category: "Bread • Naan • Roti",
        price: "25",
        basePrice: 25,
        description: "Soft tandoor-baked bread with authentic Indian flavors.",
        isVeg: true
      },
      {
        id: "bnr-7",
        number: 7,
        name: "Butter Naan",
        category: "Bread • Naan • Roti",
        price: "30",
        basePrice: 30,
        description: "Classic naan brushed generously with melted butter.",
        isVeg: true
      },
      {
        id: "bnr-8",
        number: 8,
        name: "Cheese Butter Naan",
        category: "Bread • Naan • Roti",
        price: "90",
        basePrice: 90,
        description: "Stuffed naan filled with cheese and finished with butter.",
        isVeg: true
      },
      {
        id: "bnr-9",
        number: 9,
        name: "Keema Butter Naan (Mutton)",
        category: "Bread • Naan • Roti",
        price: "75",
        basePrice: 75,
        description: "Soft naan stuffed with flavorful minced mutton filling.",
        isVeg: false
      },
      {
        id: "bnr-10",
        number: 10,
        name: "Masala Kulcha",
        category: "Bread • Naan • Roti",
        price: "55",
        basePrice: 55,
        description: "Stuffed bread loaded with spicy masala filling.",
        isVeg: true
      },
      {
        id: "bnr-11",
        number: 11,
        name: "Garlic Naan",
        category: "Bread • Naan • Roti",
        price: "40",
        basePrice: 40,
        description: "Tandoor-baked naan topped with fresh garlic and butter.",
        isVeg: true
      },
      {
        id: "bnr-12",
        number: 12,
        name: "Chilli Garlic Naan",
        category: "Bread • Naan • Roti",
        price: "45",
        basePrice: 45,
        description: "Spicy naan flavored with garlic and chili seasoning.",
        isVeg: true
      }
    ]
  },
  {
    id: "sweet-dish",
    title: "Sweet Dish",
    subtitle: "Category Collection",
    icon: "🍨",
    items: [
      {
        id: "sd-1",
        number: 1,
        name: "Dashshan",
        category: "Sweet Dish",
        price: "100",
        basePrice: 100,
        description: "A delightful sweet preparation crafted for a rich dessert experience.",
        isVeg: true
      },
      {
        id: "sd-2",
        number: 2,
        name: "Sankhya (egg)",
        category: "Sweet Dish",
        price: "100",
        basePrice: 100,
        description: "Traditional sweet dish prepared with rich ingredients and authentic flavors.",
        isVeg: false
      },
      {
        id: "sd-3",
        number: 3,
        name: "Fry Icecream Mosaic Special",
        category: "Sweet Dish",
        price: "150",
        basePrice: 150,
        description: "Crispy outside with creamy ice cream inside for a unique dessert delight.",
        isSignature: true,
        isVeg: true
      },
      {
        id: "sd-4",
        number: 4,
        name: "Gajar Halwa",
        category: "Sweet Dish",
        price: "120",
        basePrice: 120,
        description: "Classic carrot dessert slow-cooked with milk and dry fruits.",
        isVeg: true
      }
    ]
  },
  {
    id: "fries",
    title: "Fries",
    subtitle: "Category Collection",
    icon: "🍟",
    items: [
      {
        id: "f-1",
        number: 1,
        name: "Plain Chips",
        category: "Fries",
        price: "55",
        basePrice: 55,
        description: "Crispy golden fries served fresh for the perfect crunchy bite.",
        isVeg: true
      },
      {
        id: "f-2",
        number: 2,
        name: "Masala Chips",
        category: "Fries",
        price: "65",
        basePrice: 65,
        description: "Seasoned fries tossed with spices for extra flavor and crunch.",
        isVeg: true
      },
      {
        id: "f-3",
        number: 3,
        name: "Masala Papar",
        category: "Fries",
        price: "35",
        basePrice: 35,
        description: "Crispy papad topped with masala and flavorful seasonings.",
        isVeg: true
      }
    ]
  },
  {
    id: "salate",
    title: "Salad & Raita",
    subtitle: "Category Collection",
    icon: "🥗",
    items: [
      {
        id: "sal-1",
        number: 1,
        name: "Green Salad",
        category: "Salad & Raita",
        price: "50",
        basePrice: 50,
        description: "A refreshing mix of fresh vegetables served as a healthy side.",
        isVeg: true
      },
      {
        id: "sal-2",
        number: 2,
        name: "Mixed Raita",
        category: "Salad & Raita",
        price: "70",
        basePrice: 70,
        description: "Creamy yogurt blended with vegetables and mild seasonings for freshness.",
        isVeg: true
      }
    ]
  },

  // --- BEVERAGE & CAFE CATEGORIES ---
  {
    id: "coffee-hot-drinks",
    title: "Coffee & Hot Drinks",
    subtitle: "Artisanal Brews Collection",
    icon: "☕",
    items: [
      {
        id: "chd-1",
        number: 1,
        name: "Espresso",
        category: "Coffee & Hot Drinks",
        price: "45",
        basePrice: 45,
        description: "Rich, concentrated coffee shot with bold flavor.",
        isVeg: true
      },
      {
        id: "chd-2",
        number: 2,
        name: "Double Espresso",
        category: "Coffee & Hot Drinks",
        price: "55",
        basePrice: 55,
        description: "Two shots of espresso for extra strength and intensity.",
        isVeg: true
      },
      {
        id: "chd-3",
        number: 3,
        name: "Americano",
        category: "Coffee & Hot Drinks",
        price: "60",
        basePrice: 60,
        description: "Espresso diluted with hot water for a smooth, balanced taste.",
        isVeg: true
      },
      {
        id: "chd-4",
        number: 4,
        name: "Cappuccino",
        category: "Coffee & Hot Drinks",
        price: "70",
        basePrice: 70,
        description: "Espresso topped with steamed milk and velvety foam.",
        isVeg: true
      },
      {
        id: "chd-5",
        number: 5,
        name: "Café Latte",
        category: "Coffee & Hot Drinks",
        price: "75",
        basePrice: 75,
        description: "Smooth espresso blended with creamy steamed milk.",
        isVeg: true
      },
      {
        id: "chd-6",
        number: 6,
        name: "Mochaccino",
        category: "Coffee & Hot Drinks",
        price: "85",
        basePrice: 85,
        description: "Espresso, chocolate, and steamed milk topped with foam.",
        isVeg: true
      },
      {
        id: "chd-7",
        number: 7,
        name: "Macchiato",
        category: "Coffee & Hot Drinks",
        price: "55",
        basePrice: 55,
        description: "Espresso marked with a touch of milk foam.",
        isVeg: true
      },
      {
        id: "chd-8",
        number: 8,
        name: "Hot Chocolate",
        category: "Coffee & Hot Drinks",
        price: "85",
        basePrice: 85,
        description: "Rich, creamy chocolate drink served hot.",
        isVeg: true
      },
      {
        id: "chd-9",
        number: 9,
        name: "White Hot Chocolate",
        category: "Coffee & Hot Drinks",
        price: "80",
        basePrice: 80,
        description: "Smooth white chocolate drink with a creamy finish.",
        isVeg: true
      },
      {
        id: "chd-10",
        number: 10,
        name: "Fresh Pak Tea",
        category: "Coffee & Hot Drinks",
        price: "50",
        basePrice: 50,
        description: "Classic black tea brewed fresh.",
        isVeg: true
      },
      {
        id: "chd-11",
        number: 11,
        name: "Five Roses Tea",
        category: "Coffee & Hot Drinks",
        price: "50",
        basePrice: 50,
        description: "Premium aromatic tea with a smooth taste.",
        isVeg: true
      },
      {
        id: "chd-12",
        number: 12,
        name: "Green Tea",
        category: "Coffee & Hot Drinks",
        price: "65",
        basePrice: 65,
        description: "Light and refreshing tea packed with natural goodness.",
        isVeg: true
      },
      {
        id: "chd-13",
        number: 13,
        name: "Ginger Tea",
        category: "Coffee & Hot Drinks",
        price: "60",
        basePrice: 60,
        description: "Warming tea infused with fresh ginger flavor.",
        isVeg: true
      },
      {
        id: "chd-14",
        number: 14,
        name: "Matcha",
        category: "Coffee & Hot Drinks",
        price: "90",
        basePrice: 90,
        description: "Premium Japanese green tea with a rich earthy taste.",
        isVeg: true
      }
    ]
  },
  {
    id: "iced-lattes",
    title: "Iced Lattes",
    subtitle: "Chilled Selection",
    icon: "🧊",
    items: [
      {
        id: "il-1",
        number: 1,
        name: "Caramel Latte",
        category: "Iced Lattes",
        price: "100",
        basePrice: 100,
        description: "Chilled latte sweetened with caramel syrup.",
        isVeg: true
      },
      {
        id: "il-2",
        number: 2,
        name: "Vanilla Latte",
        category: "Iced Lattes",
        price: "100",
        basePrice: 100,
        description: "Smooth iced latte flavored with vanilla.",
        isVeg: true
      },
      {
        id: "il-3",
        number: 3,
        name: "Plain Latte",
        category: "Iced Lattes",
        price: "80",
        basePrice: 80,
        description: "Refreshing iced coffee with creamy milk.",
        isVeg: true
      },
      {
        id: "il-4",
        number: 4,
        name: "Black Latte",
        category: "Iced Lattes",
        price: "70",
        basePrice: 70,
        description: "Strong chilled coffee with a bold finish.",
        isVeg: true
      },
      {
        id: "il-5",
        number: 5,
        name: "Mocha Plain",
        category: "Iced Lattes",
        price: "110",
        basePrice: 110,
        description: "Iced coffee blended with chocolate flavor.",
        isVeg: true
      },
      {
        id: "il-6",
        number: 6,
        name: "Matcha Mango/Strawberry",
        category: "Iced Lattes",
        price: "130",
        basePrice: 130,
        variants: [
          { label: "Mango Twist", price: 130 },
          { label: "Strawberry Twist", price: 130 }
        ],
        description: "Chocolate matcha with your choice of mango or strawberry twist.",
        isVeg: true
      }
    ]
  },
  {
    id: "frappes",
    title: "Frappes",
    subtitle: "Blended Ice Delights",
    icon: "🥤",
    items: [
      {
        id: "frp-1",
        number: 1,
        name: "Chocolate Frappe",
        category: "Frappes",
        price: "100",
        basePrice: 100,
        description: "Blended iced chocolate drink, rich and refreshing.",
        isVeg: true
      },
      {
        id: "frp-2",
        number: 2,
        name: "White Chocolate Frappe",
        category: "Frappes",
        price: "100",
        basePrice: 100,
        description: "Creamy white chocolate blended over ice.",
        isVeg: true
      },
      {
        id: "frp-3",
        number: 3,
        name: "Salted Caramel Frappe",
        category: "Frappes",
        price: "100",
        basePrice: 100,
        description: "Sweet caramel with a hint of sea salt.",
        isVeg: true
      },
      {
        id: "frp-4",
        number: 4,
        name: "Matcha Frappe",
        category: "Frappes",
        price: "100",
        basePrice: 100,
        description: "Icy matcha blend with a smooth finish.",
        isVeg: true
      }
    ]
  },
  {
    id: "crush-slush",
    title: "Crush / Slush",
    subtitle: "Ice Coolers Collection",
    icon: "🍹",
    items: [
      {
        id: "cs-s-1",
        number: 1,
        name: "Mint Crush Lemonade",
        category: "Crush / Slush",
        price: "100",
        basePrice: 100,
        description: "Fresh lemonade blended with cooling mint.",
        isVeg: true
      },
      {
        id: "cs-s-2",
        number: 2,
        name: "Passion Fruit Slush",
        category: "Crush / Slush",
        price: "100",
        basePrice: 100,
        description: "Tropical passion fruit blended over ice.",
        isVeg: true
      },
      {
        id: "cs-s-3",
        number: 3,
        name: "Mango Slush",
        category: "Crush / Slush",
        price: "100",
        basePrice: 100,
        description: "Sweet and refreshing mango ice blend.",
        isVeg: true
      }
    ]
  },
  {
    id: "boba-drinks",
    title: "Boba Drinks",
    subtitle: "Pearl Teas & Flavors",
    icon: "🧋",
    items: [
      {
        id: "bd-1",
        number: 1,
        name: "Mango Boba",
        category: "Boba Drinks",
        price: "120",
        basePrice: 120,
        description: "Tropical mango drink with chewy boba pearls.",
        isVeg: true
      },
      {
        id: "bd-2",
        number: 2,
        name: "Strawberry Boba",
        category: "Boba Drinks",
        price: "120",
        basePrice: 120,
        description: "Sweet strawberry drink with boba pearls.",
        isVeg: true
      },
      {
        id: "bd-3",
        number: 3,
        name: "Blueberry Boba",
        category: "Boba Drinks",
        price: "120",
        basePrice: 120,
        description: "Fruity blueberry flavor with boba pearls.",
        isVeg: true
      },
      {
        id: "bd-4",
        number: 4,
        name: "Passion Fruit Boba",
        category: "Boba Drinks",
        price: "120",
        basePrice: 120,
        description: "Tangy passion fruit drink with boba pearls.",
        isVeg: true
      }
    ]
  },
  {
    id: "mocktails",
    title: "Mocktails",
    subtitle: "Craft Coolers",
    icon: "🍸",
    items: [
      {
        id: "mck-1",
        number: 1,
        name: "Mojito",
        category: "Mocktails",
        price: "100",
        basePrice: 100,
        description: "Refreshing mint and lime cooler.",
        isVeg: true
      },
      {
        id: "mck-2",
        number: 2,
        name: "Apple Mojito",
        category: "Mocktails",
        price: "100",
        basePrice: 100,
        description: "Crisp apple flavor with mint and lime.",
        isVeg: true
      },
      {
        id: "mck-3",
        number: 3,
        name: "Kiwi Cucumber Cooler",
        category: "Mocktails",
        price: "120",
        basePrice: 120,
        description: "Fresh kiwi and cucumber blended with mint and lemon for a crisp, refreshing cooler.",
        isVeg: true
      },
      {
        id: "mck-4",
        number: 4,
        name: "Guava Glow",
        category: "Mocktails",
        price: "100",
        basePrice: 100,
        description: "Tropical guava mocktail with a refreshing finish.",
        isVeg: true
      }
    ]
  },
  {
    id: "milkshakes",
    title: "Milkshakes",
    subtitle: "Creamy Indulgence",
    icon: "🥛",
    items: [
      {
        id: "mls-1",
        number: 1,
        name: "Vanilla Milkshake",
        category: "Milkshakes",
        price: "110",
        basePrice: 110,
        description: "Creamy vanilla shake made with ice cream.",
        isVeg: true
      },
      {
        id: "mls-2",
        number: 2,
        name: "Strawberry Milkshake",
        category: "Milkshakes",
        price: "110",
        basePrice: 110,
        description: "Sweet strawberry blend with a creamy texture.",
        isVeg: true
      },
      {
        id: "mls-3",
        number: 3,
        name: "Banana Milkshake",
        category: "Milkshakes",
        price: "110",
        basePrice: 110,
        description: "Smooth banana shake, rich and refreshing.",
        isVeg: true
      },
      {
        id: "mls-4",
        number: 4,
        name: "Bubble Gum Milkshake",
        category: "Milkshakes",
        price: "110",
        basePrice: 110,
        description: "Fun bubble gum flavor in a creamy shake.",
        isVeg: true
      },
      {
        id: "mls-5",
        number: 5,
        name: "Coffee Shake",
        category: "Milkshakes",
        price: "110",
        basePrice: 110,
        description: "Creamy coffee-flavored milkshake.",
        isVeg: true
      }
    ]
  },
  {
    id: "smoothies",
    title: "Smoothies",
    subtitle: "Fresh Fruit Blends",
    icon: "🥑",
    items: [
      {
        id: "smt-1",
        number: 1,
        name: "Banana Smoothie",
        category: "Smoothies",
        price: "100",
        basePrice: 100,
        description: "Fresh banana blended to perfection.",
        isVeg: true
      },
      {
        id: "smt-2",
        number: 2,
        name: "Apple Smoothie",
        category: "Smoothies",
        price: "100",
        basePrice: 100,
        description: "Refreshing apple smoothie with natural sweetness.",
        isVeg: true
      },
      {
        id: "smt-3",
        number: 3,
        name: "Kiwi Smoothie",
        category: "Smoothies",
        price: "100",
        basePrice: 100,
        description: "Tangy kiwi blend packed with flavor.",
        isVeg: true
      },
      {
        id: "smt-4",
        number: 4,
        name: "Greeny Mint Smoothie",
        category: "Smoothies",
        price: "100",
        basePrice: 100,
        description: "Refreshing green smoothie with a hint of mint.",
        isVeg: true
      }
    ]
  },
  {
    id: "fresh-juice",
    title: "Fresh Juice",
    subtitle: "Squeezed Fresh",
    icon: "🍊",
    items: [
      {
        id: "fj-1",
        number: 1,
        name: "Orange Fresh Juice",
        category: "Fresh Juice",
        price: "130",
        basePrice: 130,
        description: "Freshly squeezed orange juice.",
        isVeg: true
      },
      {
        id: "fj-2",
        number: 2,
        name: "Apple Fresh Juice",
        category: "Fresh Juice",
        price: "130",
        basePrice: 130,
        description: "Refreshing juice made from fresh apples.",
        isVeg: true
      }
    ]
  },
  {
    id: "other-juice",
    title: "Other Juice",
    subtitle: "Chilled Fruit Nectars",
    icon: "🧃",
    items: [
      {
        id: "oj-1",
        number: 1,
        name: "Cranberry Rhodes Juice",
        category: "Other Juice",
        price: "75",
        basePrice: 75,
        description: "Refreshing Rhodes juices served chilled.",
        isVeg: true
      },
      {
        id: "oj-2",
        number: 2,
        name: "Strawberry Rhodes Juice",
        category: "Other Juice",
        price: "75",
        basePrice: 75,
        description: "Refreshing Rhodes juices served chilled.",
        isVeg: true
      },
      {
        id: "oj-3",
        number: 3,
        name: "Apple Rhodes Juice",
        category: "Other Juice",
        price: "75",
        basePrice: 75,
        description: "Refreshing Rhodes juices served chilled.",
        isVeg: true
      },
      {
        id: "oj-4",
        number: 4,
        name: "Orange Rhodes Juice",
        category: "Other Juice",
        price: "75",
        basePrice: 75,
        description: "Refreshing Rhodes juices served chilled.",
        isVeg: true
      },
      {
        id: "oj-5",
        number: 5,
        name: "Mango Rhodes Juice",
        category: "Other Juice",
        price: "75",
        basePrice: 75,
        description: "Refreshing Rhodes juices served chilled.",
        isVeg: true
      },
      {
        id: "oj-6",
        number: 6,
        name: "Guava Rhodes Juice",
        category: "Other Juice",
        price: "75",
        basePrice: 75,
        description: "Refreshing Rhodes juices served chilled.",
        isVeg: true
      }
    ]
  },
  {
    id: "soft-drinks",
    title: "Soft Drinks",
    subtitle: "Cold Sparkling Refreshment",
    icon: "🥤",
    items: [
      {
        id: "sd-k-1",
        number: 1,
        name: "Red Bull",
        category: "Soft Drinks",
        price: "25",
        basePrice: 25,
        description: "Energy drink for a quick boost.",
        isVeg: true
      },
      {
        id: "sd-k-2",
        number: 2,
        name: "Coca-Cola",
        category: "Soft Drinks",
        price: "25",
        basePrice: 25,
        description: "Classic sparkling cola.",
        isVeg: true
      },
      {
        id: "sd-k-3",
        number: 3,
        name: "Zero Coke",
        category: "Soft Drinks",
        price: "25",
        basePrice: 25,
        description: "Sugar-free cola with full flavor.",
        isVeg: true
      },
      {
        id: "sd-k-4",
        number: 4,
        name: "Sprite",
        category: "Soft Drinks",
        price: "25",
        basePrice: 25,
        description: "Crisp lemon-lime soft drink.",
        isVeg: true
      },
      {
        id: "sd-k-5",
        number: 5,
        name: "Fanta",
        category: "Soft Drinks",
        price: "25",
        basePrice: 25,
        description: "Fruity orange-flavored soda.",
        isVeg: true
      },
      {
        id: "sd-k-6",
        number: 6,
        name: "Lemonade",
        category: "Soft Drinks",
        price: "25",
        basePrice: 25,
        description: "Refreshing citrus drink.",
        isVeg: true
      }
    ]
  }
];

export const allMenuItems: MenuItem[] = menuData.flatMap(cat => cat.items);
