// src/data/industryFlows.js

export const industryFlows = {
  Shopping: {
    steps: ['Category', 'Product', 'Brand', 'Specification'],
    options: {
      Category: ['Electronics', 'Clothing', 'Home Decor', 'Sports'],
      Product: {
        'Electronics': ['Phone', 'Laptop', 'Headphones', 'Watch'],
        'Clothing': ['Shirt', 'Jeans', 'Jacket', 'Shoes'],
        'default': ['Item 1', 'Item 2']
      },
      Brand: {
        'Phone': ['Samsung', 'iPhone', 'Google Pixel', 'OnePlus'],
        'Shirt': ['Nike', 'Adidas', 'Levi\'s', 'Zara'],
        'default': ['Brand A', 'Brand B']
      },
      Specification: {
        'Samsung': { ram: '12GB', storage: '256GB', color: 'Phantom Black' },
        'Nike': { size: 'L', material: 'Dry-fit Cotton', color: 'White' },
        'default': { detail: 'High quality product' }
      }
    }
  },
  Makeup: {
    steps: ['Product Type', 'Brand', 'Shade/Detail'],
    options: {
      'Product Type': ['Lipstick', 'Foundation', 'Eyeliner', 'Mascara'],
      'Brand': {
        'Lipstick': ['MAC', 'Maybelline', 'L\'Oreal', 'Estée Lauder'],
        'Foundation': ['Fenty Beauty', 'Rare Beauty', 'Dior', 'Clinique'],
        'default': ['NYX', 'Revlon']
      },
      'Shade/Detail': {
        'MAC': { color: 'Ruby Woo (Red)', finish: 'Matte', weight: '3g' },
        'Fenty Beauty': { color: '420 Deep', coverage: 'Full', finish: 'Soft Matte' },
        'default': { note: 'Hypoallergenic and long-lasting' }
      }
    }
  },
  Food: {
    steps: ['Cuisine', 'Dish', 'Customization'],
    options: {
      Cuisine: ['Italian', 'Indian', 'Chinese', 'Fast Food'],
      Dish: {
        'Italian': ['Pizza', 'Pasta', 'Risotto'],
        'Fast Food': ['Burger', 'Tacos', 'Fries'],
        'default': ['Special Platter']
      },
      'Customization': {
        'Pizza': { size: 'Large', toppings: 'Extra Cheese, Pepperoni', crust: 'Thin' },
        'Burger': { patty: 'Double Beef', extras: 'Bacon, Avocado', sauce: 'Spicy Mayo' },
        'default': { instructions: 'Cook fresh and hot' }
      }
    }
  },
  Electronics: {
     steps: ['Gadget', 'Brand', 'Model'],
     options: {
       'Gadget': ['Phone', 'Tablet', 'Laptop'],
       'Brand': {
         'Phone': ['Apple', 'Samsung', 'Xiaomi'],
         'Laptop': ['Dell', 'HP', 'Apple'],
         'default': ['Sony']
       },
       'Model': {
         'Apple': { display: 'Retina XDR', processor: 'M2', battery: 'All-day' },
         'Samsung': { display: 'AMOLED', camera: '108MP', storage: '512GB' },
         'default': { spec: 'Latest generation' }
       }
     }
  }
};
