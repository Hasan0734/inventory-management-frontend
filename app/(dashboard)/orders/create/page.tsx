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
import {
  ArrowLeft,
  BarChart3,
  Box,
  ChevronDown,
  CircleDollarSign,
  MinusCircle,
  Package,
  PlusCircle,
  Save,
  Search,
  ShoppingCart,
  Truck,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
              <CardDescription>
                Enter customer details for this order.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid grid-cols-2 gap-4">
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
              <div className="grid gap-2">
                <label htmlFor="customerPhone" className="text-sm font-medium">
                  Phone Number
                </label>
                <Input
                  id="customerPhone"
                  name="customerPhone"
                  placeholder="(555) 123-4567"
                />
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
                    className="h-8 text-xs"
                  >
                    Same as shipping
                  </Button>
                </div>
                <Textarea
                  id="billingAddress"
                  name="billingAddress"
                  placeholder="Enter complete billing address"
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
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

          <Card>
            <CardHeader>
              <CardTitle>Order Items</CardTitle>
              <CardDescription>Add products to this order.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-4">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search products..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                {searchQuery && (
                  <Card className="overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>SKU</TableHead>
                          <TableHead>Product</TableHead>
                          <TableHead className="text-right">Price</TableHead>
                          <TableHead className="text-right">Stock</TableHead>
                          <TableHead></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredProducts.map((product) => (
                          <TableRow key={product.id}>
                            <TableCell className="font-medium">
                              {product.id}
                            </TableCell>
                            <TableCell>{product.name}</TableCell>
                            <TableCell className="text-right">
                              ${product.price.toFixed(2)}
                            </TableCell>
                            <TableCell className="text-right">
                              {product.stock > 0 ? (
                                product.stock
                              ) : (
                                <Badge variant="destructive">
                                  Out of Stock
                                </Badge>
                              )}
                            </TableCell>
                            <TableCell>
                              <Button
                                type="button"
                                size="sm"
                                disabled={product.stock <= 0}
                                onClick={() => addProductToOrder(product)}
                              >
                                Add
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                        {filteredProducts.length === 0 && (
                          <TableRow>
                            <TableCell
                              colSpan={5}
                              className="text-center py-4 text-muted-foreground"
                            >
                              No products found
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </Card>
                )}

                {orderItems.length > 0 ? (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead className="text-right">Price</TableHead>
                        <TableHead className="text-center">Quantity</TableHead>
                        <TableHead className="text-right">Total</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {orderItems.map((item) => (
                        <TableRow key={item.productId}>
                          <TableCell>
                            <div>
                              <div className="font-medium">{item.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {item.productId}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            ${item.price.toFixed(2)}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center justify-center gap-2">
                              <Button
                                type="button"
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() =>
                                  updateProductQuantity(
                                    item.productId,
                                    item.quantity - 1
                                  )
                                }
                              >
                                <MinusCircle className="h-4 w-4" />
                              </Button>
                              <Input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) =>
                                  updateProductQuantity(
                                    item.productId,
                                    Number.parseInt(e.target.value) || 0
                                  )
                                }
                                className="h-8 w-16 text-center"
                              />
                              <Button
                                type="button"
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() =>
                                  updateProductQuantity(
                                    item.productId,
                                    item.quantity + 1
                                  )
                                }
                              >
                                <PlusCircle className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                          <TableCell className="text-right font-medium">
                            ${(item.price * item.quantity).toFixed(2)}
                          </TableCell>
                          <TableCell>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              onClick={() =>
                                removeProductFromOrder(item.productId)
                              }
                            >
                              <MinusCircle className="h-4 w-4" />
                              <span className="sr-only">Remove</span>
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <div className="rounded-md border border-dashed p-8 text-center">
                    <ShoppingCart className="mx-auto h-8 w-8 text-muted-foreground" />
                    <h3 className="mt-2 text-lg font-medium">
                      No items in order
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Search for products above to add them to this order.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6">
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
            <CardContent>
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
            </CardContent>
          </Card>
        </div>
      </div>
    </form>
  );
}
