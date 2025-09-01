import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Heart, ShoppingBag, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'react-hot-toast';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode = 'grid' }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Find the first available size
    const availableSize = product.sizes.find(size => (product.stock[size] || 0) > 0);
    
    if (!availableSize) {
      toast.error('Product is out of stock');
      return;
    }

    addToCart({
      id: `${product.id}-${availableSize}`,
      productId: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      mrp: product.mrp,
      size: availableSize,
      image: product.images[0],
      maxStock: product.stock[availableSize] || 0
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const isOutOfStock = !product.sizes.some(size => (product.stock[size] || 0) > 0);

  if (viewMode === 'list') {
    return (
      <motion.div
        whileHover={{ y: -4 }}
        className="product-card flex flex-col md:flex-row p-4 h-auto"
      >
        <Link to={`/product/${product.slug}`} className="flex flex-col md:flex-row flex-1 gap-4">
          <div className="relative w-full md:w-48 h-48 md:h-32 flex-shrink-0">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
            {product.isNew && (
              <Badge className="absolute top-2 left-2 bg-success">New</Badge>
            )}
            {product.discountPercent && (
              <Badge className="absolute top-2 right-2 bg-destructive">
                -{product.discountPercent}%
              </Badge>
            )}
          </div>

          <div className="flex-1 space-y-2">
            <div>
              <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
              <p className="text-muted-foreground text-sm line-clamp-2">
                {product.shortDescription}
              </p>
              {product.brandInspiration && (
                <p className="text-xs text-muted-foreground italic">
                  {product.brandInspiration}
                </p>
              )}
            </div>

            <div className="flex items-center gap-1">
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium ml-1">{product.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                ({product.reviewCount})
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">{formatPrice(product.price)}</span>
              {product.mrp && (
                <span className="price-original">{formatPrice(product.mrp)}</span>
              )}
            </div>

            <div className="flex flex-wrap gap-1">
              {product.sizes.slice(0, 4).map(size => (
                <Badge key={size} variant="outline" className="text-xs">
                  {size}
                </Badge>
              ))}
              {product.sizes.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{product.sizes.length - 4}
                </Badge>
              )}
            </div>
          </div>
        </Link>

        <div className="flex md:flex-col items-center gap-2 mt-4 md:mt-0 md:w-32">
          <Button
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            className="flex-1 md:w-full"
            size="sm"
          >
            {isOutOfStock ? 'Out of Stock' : (
              <>
                <ShoppingBag className="w-4 h-4 mr-1" />
                Add to Cart
              </>
            )}
          </Button>
          <Button variant="outline" size="sm" className="md:w-full">
            <Eye className="w-4 h-4 mr-1" />
            Quick View
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="product-card group relative"
    >
      <Link to={`/product/${product.slug}`}>
        <div className="relative aspect-[3/4] mb-3 overflow-hidden rounded-lg">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 space-y-1">
            {product.isNew && (
              <Badge className="bg-success">New</Badge>
            )}
            {product.isFeatured && (
              <Badge className="bg-accent">Featured</Badge>
            )}
          </div>
          
          {product.discountPercent && (
            <Badge className="absolute top-2 right-2 bg-destructive">
              -{product.discountPercent}%
            </Badge>
          )}

          {/* Overlay Actions */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="secondary"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <Heart className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                onClick={handleAddToCart}
                disabled={isOutOfStock}
              >
                <ShoppingBag className="w-4 h-4 mr-1" />
                {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-2 p-3">
          <div>
            <h3 className="font-semibold line-clamp-1 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-1">
              {product.shortDescription}
            </p>
            {product.brandInspiration && (
              <p className="text-xs text-muted-foreground italic line-clamp-1">
                {product.brandInspiration}
              </p>
            )}
          </div>

          <div className="flex items-center gap-1 text-sm">
            <div className="flex items-center">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="font-medium ml-1">{product.rating}</span>
            </div>
            <span className="text-muted-foreground">
              ({product.reviewCount})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">{formatPrice(product.price)}</span>
            {product.mrp && (
              <span className="price-original text-sm">{formatPrice(product.mrp)}</span>
            )}
          </div>

          <div className="flex flex-wrap gap-1">
            {product.sizes.slice(0, 3).map(size => (
              <Badge key={size} variant="outline" className="text-xs">
                {size}
              </Badge>
            ))}
            {product.sizes.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{product.sizes.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;