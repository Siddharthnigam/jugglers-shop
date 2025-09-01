export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  images: string[];
  shortDescription: string;
  longDescription: string;
  price: number;
  mrp?: number;
  discountPercent?: number;
  sizes: string[];
  stock: Record<string, number>;
  brandInspiration?: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  isActive: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
}

export const CATEGORIES = [
  'Shirts',
  'T-Shirts', 
  'Jeans',
  'Jackets',
  'Dresses'
];

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Classic Denim Shirt',
    slug: 'classic-denim-shirt',
    category: 'Shirts',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop&crop=top'
    ],
    shortDescription: 'Premium cotton denim shirt with classic fit',
    longDescription: 'Crafted from 100% premium cotton denim, this classic shirt offers timeless style and comfort. Features button-down collar, chest pockets, and durable construction perfect for casual and semi-formal occasions.',
    price: 1299,
    mrp: 1799,
    discountPercent: 28,
    sizes: ['S', 'M', 'L', 'XL'],
    stock: { S: 15, M: 20, L: 18, XL: 12 },
    brandInspiration: 'Inspired by premium denim brands',
    rating: 4.3,
    reviewCount: 89,
    tags: ['casual', 'denim', 'cotton', 'classic'],
    isActive: true,
    isFeatured: true
  },
  {
    id: '2',
    name: 'Oversized Cotton T-Shirt',
    slug: 'oversized-cotton-tshirt',
    category: 'T-Shirts',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop&crop=top'
    ],
    shortDescription: 'Comfortable oversized tee in premium cotton',
    longDescription: 'Super soft and comfortable oversized t-shirt made from 100% organic cotton. Perfect for casual wear, lounging, or layering. Features relaxed fit and pre-shrunk fabric.',
    price: 599,
    mrp: 899,
    discountPercent: 33,
    sizes: ['S', 'M', 'L', 'XL'],
    stock: { S: 25, M: 30, L: 28, XL: 20 },
    brandInspiration: 'Inspired by streetwear brands',
    rating: 4.5,
    reviewCount: 156,
    tags: ['casual', 'cotton', 'oversized', 'streetwear'],
    isActive: true,
    isNew: true
  },
  {
    id: '3',
    name: 'Slim Fit Dark Jeans',
    slug: 'slim-fit-dark-jeans',
    category: 'Jeans',
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop&crop=top'
    ],
    shortDescription: 'Premium slim fit jeans in dark wash',
    longDescription: 'High-quality denim jeans with slim fit cut. Features dark wash, five-pocket styling, and comfortable stretch blend fabric. Perfect for both casual and smart-casual occasions.',
    price: 1899,
    mrp: 2599,
    discountPercent: 27,
    sizes: ['28', '30', '32', '34', '36'],
    stock: { '28': 10, '30': 15, '32': 18, '34': 12, '36': 8 },
    brandInspiration: 'Inspired by premium denim brands',
    rating: 4.4,
    reviewCount: 203,
    tags: ['jeans', 'slim-fit', 'dark-wash', 'stretch'],
    isActive: true,
    isFeatured: true
  },
  {
    id: '4',
    name: 'Leather Biker Jacket',
    slug: 'leather-biker-jacket',
    category: 'Jackets',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop&crop=top'
    ],
    shortDescription: 'Classic leather biker jacket with zippers',
    longDescription: 'Authentic style leather biker jacket crafted from high-quality synthetic leather. Features asymmetrical zip closure, multiple pockets, and classic biker styling. Perfect for adding edge to any outfit.',
    price: 3499,
    mrp: 4999,
    discountPercent: 30,
    sizes: ['S', 'M', 'L', 'XL'],
    stock: { S: 5, M: 8, L: 10, XL: 6 },
    brandInspiration: 'Inspired by classic biker brands',
    rating: 4.6,
    reviewCount: 67,
    tags: ['leather', 'jacket', 'biker', 'edgy'],
    isActive: true
  },
  {
    id: '5',
    name: 'Floral Summer Dress',
    slug: 'floral-summer-dress',
    category: 'Dresses',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop&crop=top'
    ],
    shortDescription: 'Light floral dress perfect for summer',
    longDescription: 'Beautiful floral print summer dress made from breathable cotton blend. Features A-line silhouette, short sleeves, and knee-length cut. Perfect for casual outings and summer events.',
    price: 1599,
    mrp: 2299,
    discountPercent: 30,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: { XS: 8, S: 12, M: 15, L: 10, XL: 7 },
    brandInspiration: 'Inspired by bohemian fashion brands',
    rating: 4.2,
    reviewCount: 94,
    tags: ['dress', 'floral', 'summer', 'cotton'],
    isActive: true,
    isNew: true
  },
  {
    id: '7',
    name: 'Formal White Shirt',
    slug: 'formal-white-shirt',
    category: 'Shirts',
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=800&fit=crop&crop=center'
    ],
    shortDescription: 'Crisp white formal shirt for office wear',
    longDescription: 'Professional white formal shirt crafted from premium cotton blend. Features spread collar, French cuffs, and tailored fit perfect for business and formal occasions.',
    price: 1799,
    mrp: 2499,
    discountPercent: 28,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: { S: 10, M: 18, L: 20, XL: 15, XXL: 8 },
    brandInspiration: 'Inspired by premium formal wear brands',
    rating: 4.4,
    reviewCount: 165,
    tags: ['formal', 'white', 'cotton', 'office'],
    isActive: true
  },
  {
    id: '8',
    name: 'Graphic Print T-Shirt',
    slug: 'graphic-print-tshirt',
    category: 'T-Shirts',
    images: [
      'https://images.unsplash.com/photo-1583743814966-8936f37f7832?w=600&h=800&fit=crop&crop=center'
    ],
    shortDescription: 'Trendy graphic print t-shirt',
    longDescription: 'Stylish graphic print t-shirt made from soft cotton blend. Features unique design, comfortable fit, and fade-resistant print. Perfect for casual wear and self-expression.',
    price: 699,
    mrp: 999,
    discountPercent: 30,
    sizes: ['S', 'M', 'L', 'XL'],
    stock: { S: 20, M: 25, L: 22, XL: 18 },
    brandInspiration: 'Inspired by streetwear culture',
    rating: 4.0,
    reviewCount: 87,
    tags: ['graphic', 'casual', 'trendy', 'cotton'],
    isActive: true
  },
  {
    id: '9',
    name: 'Distressed Jeans',
    slug: 'distressed-jeans',
    category: 'Jeans',
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop&crop=center'
    ],
    shortDescription: 'Trendy distressed jeans with ripped details',
    longDescription: 'Fashion-forward distressed jeans with carefully crafted rips and fade details. Made from comfortable stretch denim with regular fit. Perfect for creating edgy casual looks.',
    price: 2199,
    mrp: 2999,
    discountPercent: 27,
    sizes: ['28', '30', '32', '34', '36'],
    stock: { '28': 8, '30': 12, '32': 15, '34': 10, '36': 6 },
    brandInspiration: 'Inspired by designer denim brands',
    rating: 4.3,
    reviewCount: 134,
    tags: ['jeans', 'distressed', 'trendy', 'stretch'],
    isActive: true,
    isNew: true
  },
  {
    id: '10',
    name: 'Bomber Jacket',
    slug: 'bomber-jacket',
    category: 'Jackets',
    images: [
      'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=600&h=800&fit=crop&crop=center'
    ],
    shortDescription: 'Classic bomber jacket in versatile style',
    longDescription: 'Timeless bomber jacket made from durable fabric with ribbed cuffs and hem. Features front zip closure, side pockets, and comfortable lining. Versatile piece for layering.',
    price: 2799,
    mrp: 3799,
    discountPercent: 26,
    sizes: ['S', 'M', 'L', 'XL'],
    stock: { S: 7, M: 10, L: 12, XL: 8 },
    brandInspiration: 'Inspired by military and streetwear',
    rating: 4.5,
    reviewCount: 92,
    tags: ['bomber', 'jacket', 'versatile', 'streetwear'],
    isActive: true
  },
  {
    id: '11',
    name: 'Maxi Dress',
    slug: 'maxi-dress',
    category: 'Dresses',
    images: [
      'https://images.unsplash.com/photo-1566479179817-c7750ef2b681?w=600&h=800&fit=crop&crop=center'
    ],
    shortDescription: 'Elegant maxi dress for special occasions',
    longDescription: 'Beautiful flowing maxi dress perfect for evening events and special occasions. Features elegant silhouette, quality fabric, and comfortable fit. Dress up or down for various occasions.',
    price: 2499,
    mrp: 3499,
    discountPercent: 29,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: { XS: 5, S: 8, M: 12, L: 10, XL: 6 },
    brandInspiration: 'Inspired by designer evening wear',
    rating: 4.6,
    reviewCount: 78,
    tags: ['maxi', 'dress', 'elegant', 'evening'],
    isActive: true,
    isFeatured: true
  },
];

export const getFeaturedProducts = () => SAMPLE_PRODUCTS.filter(p => p.isFeatured);
export const getNewProducts = () => SAMPLE_PRODUCTS.filter(p => p.isNew);
export const getProductsByCategory = (category: string) => 
  SAMPLE_PRODUCTS.filter(p => p.category === category);
export const getProductBySlug = (slug: string) => 
  SAMPLE_PRODUCTS.find(p => p.slug === slug);

export const searchProducts = (query: string, category?: string) => {
  let results = SAMPLE_PRODUCTS;
  
  if (category && category !== 'All') {
    results = results.filter(p => p.category === category);
  }
  
  if (query) {
    const lowercaseQuery = query.toLowerCase();
    results = results.filter(p => 
      p.name.toLowerCase().includes(lowercaseQuery) ||
      p.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
      p.shortDescription.toLowerCase().includes(lowercaseQuery)
    );
  }
  
  return results;
};