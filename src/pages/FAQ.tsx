import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "What is the delivery time for orders?",
      answer: "We deliver across major Indian cities within 2-5 business days. For remote locations, it may take up to 7 days. You'll receive a tracking number once your order is shipped."
    },
    {
      question: "What is your return and exchange policy?",
      answer: "We offer a 7-day return policy for unused items in original condition with tags. For exchanges, you can return the item and place a new order. Return shipping is free for defective products."
    },
    {
      question: "Are the products authentic?",
      answer: "Yes, all our products are authentic and sourced directly from authorized suppliers. While we offer style-inspired designs, we ensure all items meet our quality standards and are original Jugglers products."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept Cash on Delivery (COD), UPI payments, net banking, credit/debit cards, and digital wallets. All online payments are processed securely through trusted payment gateways."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order is shipped, you'll receive a tracking number via SMS and email. You can also track your order by logging into your account and visiting the 'My Orders' section."
    },
    {
      question: "What sizes do you offer?",
      answer: "We offer a wide range of sizes from XS to XXL for most clothing items. For jeans, we have waist sizes from 28 to 36. Please check the size chart on each product page for accurate measurements."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Currently, we only ship within India. We're working on expanding our shipping to international locations and will announce it soon on our website and social media."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach our customer support team through the Contact Us page, email us at help@jugglers.in, or call our helpline at +91 98765 43210. We're available Monday to Saturday, 9 AM to 7 PM."
    },
    {
      question: "Do you have physical stores?",
      answer: "Currently, Jugglers operates as an online-only store to keep our prices affordable. However, we're exploring options to open physical showrooms in major cities in the future."
    },
    {
      question: "How do I care for my Jugglers clothing?",
      answer: "Care instructions are provided on the product label and description. Generally, we recommend washing in cold water, avoiding harsh detergents, and air drying to maintain fabric quality and color."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-hero-gradient text-white py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90">
              Find answers to common questions about shopping with Jugglers
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem 
                    value={`item-${index}`}
                    className="bg-card rounded-lg border px-6 py-2"
                  >
                    <AccordionTrigger className="text-left hover:no-underline group">
                      <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                        {faq.question}
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      <p className="leading-relaxed">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-16 bg-muted/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto space-y-6"
          >
            <h2 className="text-3xl font-bold">Still Have Questions?</h2>
            <p className="text-muted-foreground text-lg">
              Can't find what you're looking for? Our customer support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-hover transition-colors"
              >
                Contact Support
              </motion.a>
              <motion.a
                href="mailto:help@jugglers.in"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary border border-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
              >
                Email Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;