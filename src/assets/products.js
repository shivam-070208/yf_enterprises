// YF Enterprises Products Data
// Based on Flameproof Catalog and YF Enterprises Services

export const flameproofProducts = [
  {
    id: 1,
    name: 'Flameproof Junction Box',
    category: 'Electrical Safety',
    price: '$150.00',
    originalPrice: '$180.00',
    rating: 5,
    image: 'https://html.themexriver.com/industo/images/resource/products/2.png',
    description: 'Heavy-duty flameproof junction box for hazardous area applications',
    specifications: {
      material: 'Cast Iron',
      protection: 'IP65',
      certification: 'ATEX, IECEx',
      temperature: '-40°C to +80°C'
    },
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: 'Flameproof Control Panel',
    category: 'Control Systems',
    price: '$450.00',
    originalPrice: '$500.00',
    rating: 5,
    image: 'https://html.themexriver.com/industo/images/resource/products/2.png',
    description: 'Complete flameproof control panel for industrial automation',
    specifications: {
      material: 'Stainless Steel',
      protection: 'IP66',
      certification: 'ATEX, IECEx, UL',
      voltage: '415V AC'
    },
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: 'Flameproof Light Fitting',
    category: 'Lighting',
    price: '$85.00',
    originalPrice: '$100.00',
    rating: 4,
    image: 'https://html.themexriver.com/industo/images/resource/products/2.png',
    description: 'Explosion-proof LED light fitting for hazardous environments',
    specifications: {
      material: 'Aluminum Alloy',
      protection: 'IP65',
      power: '20W LED',
      certification: 'ATEX, IECEx'
    },
    inStock: true,
    featured: false
  },
  {
    id: 4,
    name: 'Flameproof Motor Starter',
    category: 'Motor Control',
    price: '$320.00',
    originalPrice: '$380.00',
    rating: 5,
    image: 'https://html.themexriver.com/industo/images/resource/products/2.png',
    description: 'Direct-on-line motor starter with flameproof enclosure',
    specifications: {
      material: 'Cast Iron',
      protection: 'IP66',
      rating: '15HP',
      certification: 'ATEX, IECEx'
    },
    inStock: true,
    featured: true
  },
  {
    id: 5,
    name: 'Flameproof Push Button Station',
    category: 'Control Devices',
    price: '$95.00',
    originalPrice: '$120.00',
    rating: 4,
    image: 'https://html.themexriver.com/industo/images/resource/products/2.png',
    description: 'Heavy-duty push button station for hazardous area control',
    specifications: {
      material: 'Cast Iron',
      protection: 'IP65',
      buttons: '2 Push Buttons',
      certification: 'ATEX, IECEx'
    },
    inStock: true,
    featured: false
  },
  {
    id: 6,
    name: 'Flameproof Distribution Board',
    category: 'Power Distribution',
    price: '$280.00',
    originalPrice: '$350.00',
    rating: 5,
    image: 'https://html.themexriver.com/industo/images/resource/products/2.png',
    description: 'Multi-way distribution board with flameproof protection',
    specifications: {
      material: 'Mild Steel',
      protection: 'IP65',
      ways: '8 Way',
      certification: 'ATEX, IECEx'
    },
    inStock: true,
    featured: true
  },
  {
    id: 7,
    name: 'Flameproof Emergency Stop',
    category: 'Safety Devices',
    price: '$65.00',
    originalPrice: '$80.00',
    rating: 5,
    image: 'https://html.themexriver.com/industo/images/resource/products/2.png',
    description: 'Emergency stop button with flameproof certification',
    specifications: {
      material: 'Cast Iron',
      protection: 'IP65',
      type: 'Mushroom Head',
      certification: 'ATEX, IECEx'
    },
    inStock: true,
    featured: false
  },
  {
    id: 8,
    name: 'Flameproof Cable Gland',
    category: 'Cable Management',
    price: '$25.00',
    originalPrice: '$30.00',
    rating: 4,
    image: 'https://html.themexriver.com/industo/images/resource/products/2.png',
    description: 'Brass cable gland for flameproof installations',
    specifications: {
      material: 'Brass',
      protection: 'IP68',
      size: 'M20 x 1.5',
      certification: 'ATEX, IECEx'
    },
    inStock: true,
    featured: false
  }
];

export const productCategories = [
  {
    name: 'All Products',
    count: flameproofProducts.length,
    icon: '📦'
  },
  {
    name: 'Electrical Safety',
    count: 2,
    icon: '⚡'
  },
  {
    name: 'Control Systems',
    count: 1,
    icon: '🎛️'
  },
  {
    name: 'Lighting',
    count: 1,
    icon: '💡'
  },
  {
    name: 'Motor Control',
    count: 1,
    icon: '⚙️'
  },
  {
    name: 'Control Devices',
    count: 1,
    icon: '🔘'
  },
  {
    name: 'Power Distribution',
    count: 1,
    icon: '🔌'
  },
  {
    name: 'Safety Devices',
    count: 1,
    icon: '🛡️'
  },
  {
    name: 'Cable Management',
    count: 1,
    icon: '📡'
  }
];

// Get featured products
export const getFeaturedProducts = () => {
  return flameproofProducts.filter(product => product.featured);
};

// Get products by category
export const getProductsByCategory = (category) => {
  if (category === 'All Products') return flameproofProducts;
  return flameproofProducts.filter(product => product.category === category);
};

// Get all products
export const getAllProducts = () => {
  return flameproofProducts;
};

// Search products
export const searchProducts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return flameproofProducts.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery)
  );
};
