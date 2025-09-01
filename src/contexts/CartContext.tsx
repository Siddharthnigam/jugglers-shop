import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  slug: string;
  price: number;
  mrp?: number;
  size: string;
  quantity: number;
  image: string;
  maxStock: number;
}

interface CartContextType {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  updateSize: (id: string, size: string) => void;
  clearCart: () => void;
  isInCart: (productId: string, size: string) => boolean;
  getCartItemQuantity: (productId: string, size: string) => number;
}

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

const CART_STORAGE_KEY = 'shopping-cart';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (storedCart) {
        setItems(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
    }
  }, []);

  // Save cart to localStorage whenever items change
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [items]);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const addToCart = (newItem: Omit<CartItem, 'quantity'>) => {
    const existingItemId = `${newItem.productId}-${newItem.size}`;
    const existingItem = items.find(item => `${item.productId}-${item.size}` === existingItemId);

    if (existingItem) {
      if (existingItem.quantity < existingItem.maxStock) {
        updateQuantity(existingItem.id, existingItem.quantity + 1);
        toast.success('Item quantity updated in cart');
      } else {
        toast.error('Maximum stock limit reached');
      }
    } else {
      const cartItem: CartItem = {
        ...newItem,
        id: `${newItem.productId}-${newItem.size}`,
        quantity: 1
      };
      setItems(prev => [...prev, cartItem]);
      toast.success('Item added to cart');
    }
  };

  const removeFromCart = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
    toast.success('Item removed from cart');
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setItems(prev => prev.map(item => {
      if (item.id === id) {
        if (quantity > item.maxStock) {
          toast.error('Maximum stock limit reached');
          return item;
        }
        return { ...item, quantity };
      }
      return item;
    }));
  };

  const updateSize = (id: string, size: string) => {
    const item = items.find(item => item.id === id);
    if (!item) return;

    // Remove the old item and add with new size
    removeFromCart(id);
    const newItem = { ...item, size };
    delete (newItem as any).quantity; // Remove quantity so addToCart handles it
    addToCart(newItem);
  };

  const clearCart = () => {
    setItems([]);
    toast.success('Cart cleared');
  };

  const isInCart = (productId: string, size: string) => {
    return items.some(item => item.productId === productId && item.size === size);
  };

  const getCartItemQuantity = (productId: string, size: string) => {
    const item = items.find(item => item.productId === productId && item.size === size);
    return item ? item.quantity : 0;
  };

  const value = {
    items,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
    updateSize,
    clearCart,
    isInCart,
    getCartItemQuantity
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};