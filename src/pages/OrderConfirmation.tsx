import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Truck, Package, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const OrderConfirmation = () => {
  const { orderId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  const orderData = location.state?.orderData;

  const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`;

  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center"
        >
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-muted-foreground mb-8">
            Thank you for your order. We'll send you a confirmation email shortly.
          </p>

          {orderData && (
            <Card className="text-left mb-8">
              <CardHeader>
                <CardTitle>Order #{orderId}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Delivery to:</span>
                    <p>{orderData.firstName} {orderData.lastName}</p>
                    <p>{orderData.address1}</p>
                    {orderData.address2 && <p>{orderData.address2}</p>}
                    <p>{orderData.city}, {orderData.state} - {orderData.pincode}</p>
                  </div>
                  <div>
                    <span className="font-medium">Payment Method:</span>
                    <p className="flex items-center gap-2 mt-1">
                      <CreditCard className="w-4 h-4" />
                      Cash on Delivery
                    </p>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total Amount:</span>
                    <span>{formatPrice(orderData.total)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex flex-col items-center text-center p-4">
              <Package className="w-8 h-8 text-primary mb-2" />
              <h3 className="font-semibold">Processing</h3>
              <p className="text-sm text-muted-foreground">We're preparing your order</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <Truck className="w-8 h-8 text-muted-foreground mb-2" />
              <h3 className="font-semibold">Shipped</h3>
              <p className="text-sm text-muted-foreground">On the way to you</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <CheckCircle className="w-8 h-8 text-muted-foreground mb-2" />
              <h3 className="font-semibold">Delivered</h3>
              <p className="text-sm text-muted-foreground">Enjoy your purchase!</p>
            </div>
          </div>

          <div className="space-y-4">
            <Button onClick={() => navigate('/orders')} className="w-full">
              Track Your Order
            </Button>
            <Button variant="outline" onClick={() => navigate('/shop')} className="w-full">
              Continue Shopping
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderConfirmation;