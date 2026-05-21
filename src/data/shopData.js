// src/data/shopData.js
// All static data arrays and objects extracted from App.jsx

export const ShopCategories = [
  "Electronics", "Books", "Fashion", "Home & Kitchen",
  "Sports & Fitness", "Toys & Games", "Kindle eBooks",
  "Grocery and more", "Beauty and Health Care", "Pets Care",
  "Car and Motorbike", "Others"
];

export const ElectronicsGadgets = [
  "Phone", "Laptop", "SmartWatch", "Tablets", "Speakers",
  "Cameras", "Headphones", "Computer", "Printers",
  "Smart Home", "Power Banks", "Others"
];

export const PhoneBrands = [
  "Apple", "Samsung", "OnePlus", "Google", "Redmi",
  "Oppo", "Vivo", "Realme", "Nokia", "Motorola", "iQOO", "Others"
];

export const PhoneModels = {
  Apple: [
    "iPhone 16 Plus", "iPhone 15 Pro", "iPhone 14 Plus", "iPhone 13 Pro Max",
    "iPhone 16 Pro Max", "iPhone 16 e", "iPhone 15 Plus", "iPhone 14 Pro Max",
    "iPhone 13 ", "iPhone 12", "iPhone 11 Pro Max", "iPhone X"
  ],
  Samsung: [
    "Galaxy S25", "Galaxy S24", "Galaxy S23", "Galaxy S22",
    "Galaxy Z Fold6", "Galaxy Z Flip6", "Galaxy A54", "Galaxy M55",
    "Galaxy Note 22", "Galaxy S21", "Galaxy S20", "Galaxy A56"
  ],
  OnePlus: [
    "OnePlus 11", "OnePlus 10 Pro", "OnePlus Nord CE4", "OnePlus 12R",
    "OnePlus 13R", "OnePlus 14R", "OnePlus CE4 Lite", "OnePlus 9",
    "OnePlus 8", "OnePlus 7", "OnePlus 6", "OnePlus 5"
  ],
  Google: [
    "Pixel 8", "Pixel 7", "Pixel 6", "Pixel 5", "Pixel 4",
    "Pixel 3", "Pixel 2", "Pixel 1", "Pixel 9 Pro ", "Pixel 9 Pro XL",
    "Pixel 8 Pro", "Pixel 7a"
  ],
  Redmi: [
    "Redmi Note 12", "Redmi 11", "Redmi 10", "Redmi 9", "Redmi 8",
    "Redmi 14 Pro", "Redmi 13C", "Redmi 12", "Redmi 11A", "Redmi 10A",
    "Redmi 9A", "Redmi 8A"
  ],
  Oppo: [
    "Oppo Reno 7", "Oppo F21", "Oppo A95", "Oppo A74", "Oppo A53",
    "Oppo A32", "Oppo A21", "Oppo A11", "Oppo A10", "Oppo A9",
    "Oppo A8", "Oppo A7"
  ],
  Vivo: [
    "Vivo X80", "Vivo Y75", "Vivo V21", "Vivo V23", "Vivo Y200",
    "Vivo Y29", "Vivo Y33", "Vivo Y37", "Vivo Y41", "Vivo Y45",
    "Vivo Y49", "Vivo Y53"
  ],
  Realme: [
    "Realme 9 Pro", "Realme 8 Pro", "Realme 7 Pro", "Realme 6 Pro",
    "Realme 5 Pro", "Realme 4 Pro", "Realme 3 Pro", "Realme 2 Pro",
    "Realme 1 Pro", "Realme 9", "Realme 8", "Realme 7"
  ],
  Nokia: [
    "Nokia 9", "Nokia 8", "Nokia 7", "Nokia 6", "Nokia 5",
    "Nokia 4", "Nokia 3", "Nokia 2", "Nokia 1", "Nokia 10",
    "Nokia 11", "Nokia 12"
  ],
  Motorola: [
    "Moto G9", "Moto G8", "Moto G7", "Moto G6", "Moto G5",
    "Moto G4", "Moto G3", "Moto G2", "Moto G1", "Moto G10",
    "Moto G11", "Moto G12"
  ],
  iQOO: [
    "iQOO 9", "iQOO 8", "iQOO 7", "iQOO 6", "iQOO 5",
    "iQOO 4", "iQOO 3", "iQOO 2", "iQOO 1", "iQOO 10",
    "iQOO 11", "iQOO 12"
  ],
  Others: [
    "Xiaomi", "Huawei", "Sony", "LG", "Asus",
    "Lenovo", "HTC", "ZTE", "Alcatel", "TCL",
    "BlackBerry", "Nubia"
  ],
};

export const phoneSpecifications = {
  "iPhone 16 Plus": {
    RAM: "8 GB", ROM: "128GB, 256GB", Price: "₹82,900", Camera: "48MP",
    Color: "Pink, Black, Ultramarine, Teal, White", Weight: "203g",
    Display: "OLED", OS: "iOS 18", ScreenSize: "6.7 inches",
    Image: "https://m.media-amazon.com/images/I/71oWrfCTiqL._SL1500_.jpg",
    AmazonLink: "https://www.amazon.in/iPhone-16-128-Plus-Ultrmarine/dp/B0DGJ65N7V/"
  },
  "iPhone 15 Pro": {
    RAM: "8 GB", ROM: "128GB, 256GB, 512GB, 1TB", Price: "₹1,29,900", Camera: "48MP",
    Color: "Silver, Graphite, Gold, Sierra Blue", Weight: "204g",
    Display: "OLED with ProMotion", OS: "iOS 17", ScreenSize: "6.1 inches",
    Image: "https://m.media-amazon.com/images/I/81SigpJN1KL._SL1500_.jpg",
    AmazonLink: "https://www.amazon.in/Apple-iPhone-15-Pro-512/dp/B0CHX45NRR/"
  },
  "iPhone 14 Plus": {
    RAM: "6 GB", ROM: "128GB, 256GB, 512GB", Price: "₹61,900", Camera: "12MP",
    Color: "Blue, Midnight, Starlight, Product Red", Weight: "203g",
    Display: "OLED", OS: "iOS 16", ScreenSize: "6.7 inches",
    Image: "https://m.media-amazon.com/images/I/61B0+qQriPL._SL1500_.jpg",
    AmazonLink: "https://www.amazon.in/Apple-iPhone-Plus-128GB-Midnight/dp/B0BDJKL7KM/"
  },
  "iPhone 13 Pro Max": {
    RAM: "6 GB", ROM: "128GB, 256GB, 512GB, 1TB", Price: "₹1,17,899", Camera: "12MP",
    Color: "Graphite, Gold, Silver, Sierra Blue", Weight: "238g",
    Display: "OLED with ProMotion", OS: "iOS 15", ScreenSize: "6.7 inches",
    Image: "https://m.media-amazon.com/images/I/61IJBsHm97L._SL1500_.jpg",
    AmazonLink: "https://www.amazon.in/Apple-iPhone-Pro-Max-128GB/dp/B09G9HR5GX/"
  },
  "iPhone 16 Pro Max": {
    RAM: "4 GB", ROM: "64GB, 128GB, 256GB", Price: "₹1,35,900", Camera: "12MP",
    Color: "Black, White, Green, Blue, Red", Weight: "133g",
    Display: "OLED", OS: "iOS 14", ScreenSize: "5.4 inches",
    Image: "https://m.media-amazon.com/images/I/61giwQtR1qL._SL1500_.jpg",
    AmazonLink: "https://www.amazon.in/iPhone-16-Pro-Max-256/dp/B0DGHYDZR9"
  },
  "iPhone 16 e": {
    RAM: "6 GB", ROM: "128GB, 256GB", Price: "₹59,900", Camera: "12MP",
    Color: "Blue, Green, Purple, Red, White", Weight: "194g",
    Display: "OLED", OS: "iOS 18", ScreenSize: "6.1 inches",
    Image: "https://m.media-amazon.com/images/I/61FMZ9rSZUL._SL1500_.jpg",
    AmazonLink: "https://www.amazon.in/dp/B0DXQH1DBS"
  },
  "iPhone 15 Plus": {
    RAM: "6 GB", ROM: "128GB, 256GB, 512GB", Price: "₹72,400", Camera: "12MP",
    Color: "Silver, Graphite, Gold, Sierra Blue", Weight: "204g",
    Display: "OLED with ProMotion", OS: "iOS 17", ScreenSize: "6.1 inches",
    Image: "https://m.media-amazon.com/images/I/71PjpS59XLL._SL1500_.jpg",
    AmazonLink: "https://www.amazon.in/dp/B0CHX6X2WW"
  },
  "iPhone 14 Pro Max": {
    RAM: "6 GB", ROM: "128GB, 256GB, 512GB", Price: "₹1,27,999", Camera: "12MP",
    Color: "Graphite, Gold, Silver, Sierra Blue", Weight: "238g",
    Display: "OLED with ProMotion", OS: "iOS 16", ScreenSize: "6.7 inches",
    Image: "https://m.media-amazon.com/images/I/71yzJoE7WlL._SL1500_.jpg",
    AmazonLink: "https://www.amazon.in/dp/B0BDJH6GL8"
  },
  "iPhone 13": {
    RAM: "6 GB", ROM: "128GB, 256GB, 512GB", Price: "₹67,999", Camera: "12MP",
    Color: "Graphite, Gold, Silver, Sierra Blue", Weight: "204g",
    Display: "OLED with ProMotion", OS: "iOS 15", ScreenSize: "6.1 inches",
    Image: "https://m.media-amazon.com/images/I/71xb2xkN5qL._SL1500_.jpg",
    AmazonLink: "https://www.amazon.in/Apple-iPhone-13-512GB-Blue/dp/B09G9JJT7M"
  },
  "Galaxy S25": {
    RAM: "12 GB", ROM: "256GB, 512GB, 1TB", Price: "₹80,999", Camera: "50MP",
    Color: "Phantom Black, Phantom Silver, Phantom Green, Phantom Pink", Weight: "228g",
    Display: "Dynamic AMOLED 2X", OS: "Android 14 with One UI 6", ScreenSize: "6.8 inches",
    Image: "https://m.media-amazon.com/images/I/61w7JQ+BFOL._SL1500_.jpg",
    AmazonLink: "https://www.amazon.in/gp/product/B0DSKNQ4YR/"
  },
  "Galaxy S24": {
    RAM: "12 GB", ROM: "256GB, 512GB", Price: "₹104,565", Camera: "108MP",
    Color: "Phantom Black, Phantom Silver, Phantom Green", Weight: "228g",
    Display: "Dynamic AMOLED 2X", OS: "Android 13 with One UI 5", ScreenSize: "6.8 inches",
    Image: "", AmazonLink: ""
  },
  "Galaxy S23": {
    RAM: "8 GB", ROM: "128GB, 256GB", Price: "₹69,690", Camera: "50MP",
    Color: "Phantom Black, Phantom Cream, Phantom Green, Phantom Lavender", Weight: "168g",
    Display: "Dynamic AMOLED 2X", OS: "Android 12 with One UI 4", ScreenSize: "6.1 inches",
    Image: "", AmazonLink: ""
  },
};