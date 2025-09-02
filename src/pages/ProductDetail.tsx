import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Heart, Share2, ShoppingCart, Truck, Shield, RotateCcw, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { api, type Product } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useState, useEffect } from 'react';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { user } = useAuth();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const { data: product, isLoading, error } = useQuery({
    queryKey: ['product', id],
    queryFn: () => api.getProduct(Number(id)),
    enabled: !!id,
    retry: 1
  });

  console.log('Product ID:', id);
  console.log('Product data:', product);
  console.log('Loading:', isLoading);
  console.log('Error:', error);

  const { data: allProducts = [] } = useQuery({
    queryKey: ['products'],
    queryFn: api.getProducts
  });

  if (isLoading) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="text-2xl font-bold text-muted-foreground">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="text-2xl font-bold text-muted-foreground">Error Loading Product</h1>
        <p className="text-muted-foreground mb-4">ID: {id}</p>
        <p className="text-muted-foreground mb-4">{error.message}</p>
        <Button onClick={() => navigate('/shop')} className="mt-4">
          Back to Shop
        </Button>
      </div>
    );
  }

  if (!product && !isLoading) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="text-2xl font-bold text-muted-foreground">Product Not Found</h1>
        <p className="text-muted-foreground mb-4">Product ID: {id}</p>
        <Button onClick={() => navigate('/shop')} className="mt-4">
          Back to Shop
        </Button>
      </div>
    );
  }

  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
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
      quantity
    };

    addToCart(cartItem);
    toast.success(`${product.name} added to cart!`);
  };

  const handleWishlist = async () => {
    if (!user) {
      toast.error('Please login to add to wishlist');
      return;
    }
    
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://127.0.0.1:8000/api/wishlist/', {
        method: isWishlisted ? 'DELETE' : 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_id: product.id }),
      });
      
      if (response.ok) {
        setIsWishlisted(!isWishlisted);
        toast.success(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist');
      }
    } catch (error) {
      toast.error('Failed to update wishlist');
    }
  };

  const formatPrice = (price: number | string) => `₹${typeof price === 'string' ? parseFloat(price) : price}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Product Detail Section */}
      <div className="container-custom py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
              <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
              <div className="flex items-center gap-4 mt-2">
                <Badge variant={product.featured ? 'default' : 'secondary'}>
                  {product.featured ? 'Featured' : 'Regular'}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  Stock: {product.stock}
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold">{formatPrice(parseFloat(product.price))}</span>
            </div>

            <p className="text-muted-foreground">{product.description}</p>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold mb-3">Quantity</h3>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  disabled={quantity >= product.stock}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button 
                onClick={handleAddToCart}
                className="w-full"
                size="lg"
                disabled={product.stock <= 0}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                {product.stock <= 0 ? 'Out of Stock' : 'Add to Cart'}
              </Button>
              <div className="flex gap-2">
                <Button 
                  variant={isWishlisted ? 'default' : 'outline'} 
                  size="icon"
                  onClick={handleWishlist}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 gap-3 pt-6 border-t">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Truck className="w-4 h-4" />
                Free delivery in 2-5 days
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <RotateCcw className="w-4 h-4" />
                15 days return policy
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                Secure payment options
              </div>
            </div>
          </div>
        </motion.div>

        {/* Product Description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold mb-6">Product Details</h2>
          <p className="text-muted-foreground leading-relaxed">{product.description}</p>
        </motion.div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedProducts.map((relatedProduct) => (
                <div 
                  key={relatedProduct.id}
                  className="group cursor-pointer"
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                >
                  <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-3">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="font-medium text-sm">{relatedProduct.name}</h3>
                  <p className="text-sm font-bold">{formatPrice(parseFloat(relatedProduct.price))}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;