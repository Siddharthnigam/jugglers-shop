import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, MapPin, Phone, Mail, User, IndianRupee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Checkout = () => {
  const { items, totalPrice, totalItems, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'cod'
  });

  const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`;
  const subtotal = totalPrice;
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const validateForm = () => {
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address1', 'city', 'state', 'pincode'];
    return requiredFields.every(field => formData[field as keyof typeof formData]);
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate order placement
    const orderId = `JUG${Date.now()}`;
    toast({
      title: "Order placed successfully!",
      description: `Your order #${orderId} has been confirmed.`,
    });
    
    clearCart();
    navigate(`/order-confirmation/${orderId}`, { 
      state: { orderData: { ...formData, orderId, total, items } }
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container-custom py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">Add some items to your cart before checkout.</p>
          <Button onClick={() => navigate('/shop')}>Continue Shopping</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
          
          <form onSubmit={handlePlaceOrder}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Personal Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="w-5 h-5" />
                      Personal Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Shipping Address */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      Shipping Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="address1">Address Line 1 *</Label>
                      <Input
                        id="address1"
                        name="address1"
                        placeholder="House/Flat No, Street Name"
                        value={formData.address1}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="address2">Address Line 2</Label>
                      <Input
                        id="address2"
                        name="address2"
                        placeholder="Area, Landmark (Optional)"
                        value={formData.address2}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State *</Label>
                        <Input
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="pincode">PIN Code *</Label>
                      <Input
                        id="pincode"
                        name="pincode"
                        placeholder="XXXXXX"
                        pattern="[0-9]{6}"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      Payment Method
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup 
                      value={formData.paymentMethod} 
                      onValueChange={(value) => setFormData(prev => ({ ...prev, paymentMethod: value }))}
                    >
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="cod" id="cod" />
                        <Label htmlFor="cod" className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-2">
                            <IndianRupee className="w-4 h-4" />
                            Cash on Delivery (COD)
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            Pay when your order is delivered
                          </p>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg opacity-50">
                        <RadioGroupItem value="upi" id="upi" disabled />
                        <Label htmlFor="upi" className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            UPI Payment (Coming Soon)
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            Pay instantly via UPI
                          </p>
                        </Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Items */}
                    <div className="space-y-3">
                      {items.map((item) => (
                        <div key={`${item.productId}-${item.size}`} className="flex gap-3">
                          <div className="w-12 h-12 bg-muted rounded overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{item.name}</p>
                            <p className="text-xs text-muted-foreground">
                              Size: {item.size} | Qty: {item.quantity}
                            </p>
                            <p className="text-sm font-semibold">
                              {formatPrice(item.price * item.quantity)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <hr />

                    {/* Totals */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal ({totalItems} items)</span>
                        <span>{formatPrice(subtotal)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Shipping</span>
                        <span className="text-green-600">FREE</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>GST (18%)</span>
                        <span>{formatPrice(tax)}</span>
                      </div>
                      <hr />
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>{formatPrice(total)}</span>
                      </div>
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Place Order - {formatPrice(total)}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By placing this order, you agree to our Terms of Service and Privacy Policy
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout;