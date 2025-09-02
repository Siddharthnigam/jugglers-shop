import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

interface WishlistItem {
  id: number;
  product: {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
    stock: number;
  };
}

const Wishlist = () => {
  const { user } = useAuth();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchWishlist();
    }
  }, [user]);

  const fetchWishlist = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setLoading(false);
        return;
      }
      
      const response = await fetch('http://127.0.0.1:8000/api/wishlist/', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        setWishlistItems(data);
      }
    } catch (error) {
      console.error('Error fetching wishlist:', error);
      setWishlistItems([]);
    } finally {
      setLoading(false);
    }
  };

  const removeFromWishlist = async (productId: number) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://127.0.0.1:8000/api/wishlist/', {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_id: productId }),
      });
      
      if (response.ok) {
        setWishlistItems(prev => prev.filter(item => item.product.id !== productId));
        toast.success('Removed from wishlist');
      }
    } catch (error) {
      toast.error('Failed to remove from wishlist');
    }
  };

  const handleAddToCart = (product: WishlistItem['product']) => {
    if (product.stock <= 0) {
      toast.error('Product is out of stock');
      return;
    }

    const cartItem = {
      id: `${product.id}`,
      productId: product.id,
      name: product.name,
      price: parseFloat(product.price),
      image: product.image,
      maxStock: product.stock,
      quantity: 1
    };

    addToCart(cartItem);
    toast.success(`${product.name} added to cart!`);
  };

  if (!user) {
    return (
      <div className="container-custom py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Please Login</h1>
          <p className="text-muted-foreground mb-4">You need to be logged in to view your wishlist.</p>
          <Button asChild>
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container-custom py-8">
        <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>
        <p>Loading wishlist...</p>
      </div>
    );
  }

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>
      
      {wishlistItems.length === 0 ? (
        <Card>
          <CardContent className="text-center py-12">
            <Heart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">Your Wishlist is Empty</h3>
            <p className="text-muted-foreground mb-4">Save items you love for later.</p>
            <Button asChild>
              <Link to="/shop">Start Shopping</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <Card key={item.id} className="group">
              <CardContent className="p-4">
                <div 
                  className="aspect-square bg-muted rounded-lg overflow-hidden mb-4 cursor-pointer"
                  onClick={() => navigate(`/product/${item.product.id}`)}
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                
                <div className="space-y-2">
                  <h3 
                    className="font-semibold line-clamp-2 cursor-pointer hover:text-primary"
                    onClick={() => navigate(`/product/${item.product.id}`)}
                  >
                    {item.product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.product.description}
                  </p>
                  <p className="text-lg font-bold">₹{item.product.price}</p>
                  
                  <div className="flex gap-2 pt-2">
                    <Button
                      onClick={() => handleAddToCart(item.product)}
                      className="flex-1"
                      size="sm"
                      disabled={item.product.stock <= 0}
                    >
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      {item.product.stock <= 0 ? 'Out of Stock' : 'Add to Cart'}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeFromWishlist(item.product.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;