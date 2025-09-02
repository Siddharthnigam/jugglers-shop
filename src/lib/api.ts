const API_BASE = 'http://127.0.0.1:8000/api';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  stock: number;
  featured: boolean;
  created_at: string;
}

export const api = {
  async getProducts(): Promise<Product[]> {
    const response = await fetch(`${API_BASE}/products/`);
    return response.json();
  },

  async getFeaturedProducts(): Promise<Product[]> {
    const response = await fetch(`${API_BASE}/products/featured/`);
    return response.json();
  },

  async getProduct(id: number): Promise<Product> {
    const response = await fetch(`${API_BASE}/products/${id}/`);
    if (!response.ok) {
      throw new Error(`Product not found: ${response.status}`);
    }
    return response.json();
  }
};