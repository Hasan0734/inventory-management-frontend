"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Save } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import SelectOrderProduct from "@/components/SelectOrderProduct";

export default function CreateOrderPage() {
  // Sample products data
  const products = [
    {
      id: "SKU-001",
      name: "Wireless Headphones",
      price: 89.99,
      stock: 124,
    },
    {
      id: "SKU-002",
      name: "Smartphone Case",
      price: 24.99,
      stock: 532,
    },
    {
      id: "SKU-003",
      name: "Bluetooth Speaker",
      price: 59.99,
      stock: 32,
    },
    {
      id: "SKU-004",
      name: "Laptop Sleeve",
      price: 29.99,
      stock: 89,
    },
    {
      id: "SKU-005",
      name: "Wireless Mouse",
      price: 34.99,
      stock: 0,
    },
    {
      id: "SKU-008",
      name: "USB-C Cable",
      price: 14.99,
      stock: 45,
    },
  ];

  // State for order items
  const [orderItems, setOrderItems] = useState<
    Array<{
      productId: string;
      name: string;
      price: number;
      quantity: number;
    }>
  >([]);

  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products based on search query
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Add product to order
  const addProductToOrder = (product: (typeof products)[0]) => {
    const existingItemIndex = orderItems.findIndex(
      (item) => item.productId === product.id
    );

    if (existingItemIndex >= 0) {
      // Product already in order, increase quantity
      const updatedItems = [...orderItems];
      updatedItems[existingItemIndex].quantity += 1;
      setOrderItems(updatedItems);
    } else {
      // Add new product to order
      setOrderItems([
        ...orderItems,
        {
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        },
      ]);
    }
  };

  // Remove product from order
  const removeProductFromOrder = (productId: string) => {
    setOrderItems(orderItems.filter((item) => item.productId !== productId));
  };

  // Update product quantity
  const updateProductQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeProductFromOrder(productId);
      return;
    }

    const updatedItems = orderItems.map((item) => {
      if (item.productId === productId) {
        return { ...item, quantity };
      }
      return item;
    });

    setOrderItems(updatedItems);
  };

  // Calculate order totals
  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const taxRate = 0.08; // 8% tax
  const tax = subtotal * taxRate;
  const shippingCost = subtotal > 100 ? 0 : 12.99; // Free shipping over $100
  const total = subtotal + tax + shippingCost;

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // In a real application, you would send this data to your backend
    const formData = new FormData(e.target as HTMLFormElement);
    const orderData = {
      customer: {
        name: formData.get("customerName"),
        email: formData.get("customerEmail"),
        phone: formData.get("customerPhone"),
      },
      shippingAddress: formData.get("shippingAddress"),
      billingAddress: formData.get("billingAddress"),
      paymentMethod: formData.get("paymentMethod"),
      shippingMethod: formData.get("shippingMethod"),
      items: orderItems,
      subtotal,
      tax,
      shipping: shippingCost,
      total,
    };

    console.log("Order submitted:", orderData);

    // You would typically redirect to the order details page after submission
    alert("Order created successfully!");
    // window.location.href = "/orders"
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild type="button">
            <Link href="/orders">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="text-2xl font-bold tracking-tight">
            Create New Order
          </h1>
        </div>
        <Button type="submit" size="sm" className="gap-1">
          <Save className="h-4 w-4" />
          <span>Create Order</span>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_350px]">
        <div className="grid gap-6 self-start">
          <SelectOrderProduct
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            orderItems={orderItems}
            filteredProducts={filteredProducts}
            addProductToOrder={addProductToOrder}
            updateProductQuantity={updateProductQuantity}
            removeProductFromOrder={removeProductFromOrder}
          />
          <Card>
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
              <CardDescription>
                Enter customer details for this order.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="customerName" className="text-sm font-medium">
                    Customer Name *
                  </label>
                  <Input
                    id="customerName"
                    name="customerName"
                    placeholder="Enter customer name"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="customerEmail"
                    className="text-sm font-medium"
                  >
                    Email *
                  </label>
                  <Input
                    id="customerEmail"
                    name="customerEmail"
                    type="email"
                    placeholder="customer@example.com"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="w-full grid gap-2">
                  <label
                    htmlFor="customerPhone"
                    className="text-sm font-medium"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="customerPhone"
                    name="customerPhone"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Shipping & Billing</CardTitle>
              <CardDescription>
                Enter shipping and billing information.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label
                    htmlFor="shippingAddress"
                    className="text-sm font-medium"
                  >
                    Shipping Address *
                  </label>
                  <Textarea
                    id="shippingAddress"
                    name="shippingAddress"
                    placeholder="Enter complete shipping address"
                    rows={3}
                    required
                    className="resize-none"
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="billingAddress"
                      className="text-sm font-medium"
                    >
                      Billing Address
                    </label>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-5 text-xs"
                    >
                      Same as shipping
                    </Button>
                  </div>
                  <Textarea
                    id="billingAddress"
                    name="billingAddress"
                    placeholder="Enter complete billing address"
                    rows={3}
                    className="resize-none"
                  />
                </div>
              </div>

              <div className="grid  md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label
                    htmlFor="paymentMethod"
                    className="text-sm font-medium"
                  >
                    Payment Method *
                  </label>
                  <Select name="paymentMethod" defaultValue="credit-card">
                    <SelectTrigger id="paymentMethod">
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="credit-card">Credit Card</SelectItem>
                      <SelectItem value="bank-transfer">
                        Bank Transfer
                      </SelectItem>
                      <SelectItem value="paypal">PayPal</SelectItem>
                      <SelectItem value="cash">Cash on Delivery</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="shippingMethod"
                    className="text-sm font-medium"
                  >
                    Shipping Method *
                  </label>
                  <Select name="shippingMethod" defaultValue="standard">
                    <SelectTrigger id="shippingMethod">
                      <SelectValue placeholder="Select shipping method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">
                        Standard Shipping
                      </SelectItem>
                      <SelectItem value="express">Express Shipping</SelectItem>
                      <SelectItem value="overnight">
                        Overnight Shipping
                      </SelectItem>
                      <SelectItem value="pickup">Local Pickup</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 self-start">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <div className="text-muted-foreground">Subtotal</div>
                  <div>${subtotal.toFixed(2)}</div>
                </div>
                <div className="flex justify-between text-sm">
                  <div className="text-muted-foreground">Tax (8%)</div>
                  <div>${tax.toFixed(2)}</div>
                </div>
                <div className="flex justify-between text-sm">
                  <div className="text-muted-foreground">Shipping</div>
                  <div>${shippingCost.toFixed(2)}</div>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <div>Total</div>
                  <div>${total.toFixed(2)}</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Order Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <Textarea
                  name="orderNotes"
                  placeholder="Add any special instructions or notes for this order..."
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Order Status</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Select name="orderStatus" defaultValue="pending">
                  <SelectTrigger id="orderStatus">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="shipped">Shipped</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <label htmlFor="customerName" className="text-sm font-medium">
                  Saller Name *
                </label>
                <Input
                  id="sallerName"
                  name="sallerName"
                  placeholder="Enter saller name"
                  required
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </form>
  );
}
