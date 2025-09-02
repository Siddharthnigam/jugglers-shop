// Fallback data when backend is not available
export const fallbackProducts = [
  {
    id: 1,
    name: "Classic Cotton T-Shirt",
    description: "Comfortable cotton t-shirt perfect for daily wear",
    price: 599,
    category: "T-Shirts",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    stock: 50,
    featured: true
  },
  {
    id: 2,
    name: "Denim Jacket",
    description: "Stylish denim jacket for casual outings",
    price: 899,
    category: "Jackets", 
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500",
    stock: 25,
    featured: false
  }
];

export const isBackendAvailable = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products/`, {
      method: 'HEAD',
      timeout: 5000
    });
    return response.ok;
  } catch {
    return false;
  }
};