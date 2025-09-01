import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Truck, Shield, RefreshCw, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/products/ProductCard';
import { getFeaturedProducts, getNewProducts, CATEGORIES } from '@/data/products';

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const newProducts = getNewProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container-custom py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-6"
            >
              <div>
                <Badge className="bg-white/20 text-white border-white/30 mb-4">
                  <Sparkles className="w-3 h-3 mr-1" />
                  New Collection Available
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Fashion That
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-white">
                    Inspires
                  </span>
                </h1>
              </div>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                Discover style-inspired clothing crafted for the modern Indian wardrobe. 
                Premium quality, affordable prices, delivered nationwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="btn-secondary bg-white text-primary hover:bg-white/90"
                >
                  <Link to="/shop">
                    Shop Collection
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <Link to="/shop?category=New">View New Arrivals</Link>
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-sm text-white/80">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-2xl font-bold ml-1">4.6</span>
                  </div>
                  <div className="text-sm text-white/80">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">2-5</div>
                  <div className="text-sm text-white/80">Days Delivery</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="space-y-4"
                >
                  <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=400&fit=crop"
                    alt="Fashion Hero 1"
                    className="w-full h-64 object-cover rounded-xl shadow-2xl"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=200&fit=crop"
                    alt="Fashion Hero 2"
                    className="w-full h-32 object-cover rounded-xl shadow-xl"
                  />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="space-y-4 mt-8"
                >
                  <img
                    src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=200&fit=crop"
                    alt="Fashion Hero 3"
                    className="w-full h-32 object-cover rounded-xl shadow-xl"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=400&fit=crop"
                    alt="Fashion Hero 4"
                    className="w-full h-64 object-cover rounded-xl shadow-2xl"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-accent-light/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Fast Delivery</h3>
              <p className="text-muted-foreground">
                2-5 days delivery across major Indian cities. Track your order real-time.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center space-y-4"
            >
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Quality Assured</h3>
              <p className="text-muted-foreground">
                Premium fabrics and careful quality checks before shipping.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center space-y-4"
            >
              <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center mx-auto">
                <RefreshCw className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Easy Returns</h3>
              <p className="text-muted-foreground">
                7-day return policy. No questions asked if you're not satisfied.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find your perfect style across our curated collection of fashion essentials
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {CATEGORIES.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Link
                  to={`/shop?category=${encodeURIComponent(category)}`}
                  className="block group"
                >
                  <div className="bg-card rounded-xl p-6 text-center hover:shadow-card-hover transition-all duration-300 border">
                    <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <span className="text-2xl group-hover:text-white">
                        {category === 'Shirts' && '👔'}
                        {category === 'T-Shirts' && '👕'}
                        {category === 'Jeans' && '👖'}
                        {category === 'Jackets' && '🧥'}
                        {category === 'Dresses' && '👗'}
                        {category === 'Shoes' && '👟'}
                      </span>
                    </div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {category}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
              <p className="text-muted-foreground">
                Our most popular and highly-rated items
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/shop">View All</Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">New Arrivals</h2>
              <p className="text-muted-foreground">
                Fresh styles just added to our collection
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/shop?filter=new">View All New</Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {newProducts.slice(0, 4).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <h2 className="text-3xl font-bold">Stay Updated</h2>
            <p className="text-xl text-white/90">
              Get notified about new arrivals, exclusive offers, and fashion tips
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
              />
              <Button className="bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-white/70">
              Join 10,000+ fashion enthusiasts. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
