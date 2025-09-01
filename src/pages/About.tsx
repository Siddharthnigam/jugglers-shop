import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Users, Award, Sparkles, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '50K+', label: 'Happy Customers', icon: Users },
    { number: '500+', label: 'Products', icon: Sparkles },
    { number: '2-5', label: 'Days Delivery', icon: Clock },
    { number: '4.6', label: 'Customer Rating', icon: Award }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Every decision we make puts our customers at the center. From product selection to customer service, your satisfaction drives everything we do.'
    },
    {
      icon: Target,
      title: 'Quality Promise',
      description: 'We believe great fashion should be accessible. Our team carefully selects every piece to ensure you get premium quality at prices that make sense.'
    },
    {
      icon: Sparkles,
      title: 'Style Innovation',
      description: 'Fashion is about self-expression. We bring you the latest trends and timeless classics, inspired by global fashion but designed for Indian sensibilities.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                About
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-white">
                  Jugglers
                </span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Born from a passion for making fashion accessible, Jugglers brings you 
                style-inspired clothing that doesn't break the bank. We're not just another 
                fashion brand - we're your partners in looking great every day.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.img
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=400&fit=crop"
                  alt="Jugglers Fashion"
                  className="w-full h-64 object-cover rounded-xl shadow-2xl"
                />
                <motion.img
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=400&fit=crop"
                  alt="Fashion Collection"
                  className="w-full h-64 object-cover rounded-xl shadow-2xl mt-8"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center space-y-3"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Jugglers was born from a simple observation: great fashion shouldn't be a luxury. 
                  In 2024, our founders noticed that while global fashion trends were evolving rapidly, 
                  many Indians were still paying premium prices for basic style.
                </p>
                <p>
                  We decided to change that. By working directly with manufacturers and eliminating 
                  unnecessary middlemen, we bring you fashion-forward clothing that's inspired by 
                  leading brands but priced for real people.
                </p>
                <p>
                  Today, Jugglers serves thousands of customers across India, from bustling metros 
                  to quiet towns. Every piece in our collection is chosen with care, tested for 
                  quality, and priced to give you the best value for your money.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&h=400&fit=crop"
                alt="Our Workshop"
                className="w-full h-80 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-primary/20 rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              The principles that guide everything we do at Jugglers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{value.title}</h3>
                <p className="text-white/90 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To democratize fashion by making style-inspired, high-quality clothing 
              accessible to every Indian. We believe that looking good should be affordable, 
              and great style should be available to everyone, regardless of their budget.
            </p>
            <div className="bg-accent-light/50 rounded-2xl p-8 mt-8">
              <h3 className="text-2xl font-bold mb-4">Join the Jugglers Family</h3>
              <p className="text-muted-foreground mb-6">
                When you shop with Jugglers, you're not just buying clothes - you're joining 
                a community of style-conscious individuals who believe that great fashion 
                shouldn't cost a fortune.
              </p>
              <motion.a
                href="/shop"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-hover transition-colors"
              >
                Start Shopping
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;