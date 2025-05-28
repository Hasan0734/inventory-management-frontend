"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Printer } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/dataTable";

interface OrderDetailPageProps {
  params: {
    id: string;
  };
}

const columns: ColumnDef<any>[] = [
  {
    accessorKey: "name",
    header: () => <div className="text-start">Product</div>,
    cell: ({ row }) => {
      return (
        <div className="flex items-start md:items-center -ml-3 gap-2">
          <div className="h-10 w-10 md:block hidden rounded-md bg-muted"></div>
          <div>
            <span>{row.getValue("name")}</span>
            <span>{row.getValue("id")}</span>
          </div>
        </div>
      );
    },
  },

  {
    accessorKey: "price",
    header: () => <div>Price</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("price")}</div>;
    },
  },

  {
    accessorKey: "quantity",
    header: () => <div>Quantity</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("quantity")}</div>;
    },
  },
  {
    accessorKey: "total",
    header: () => <div className="text-end">Total</div>,
    cell: ({ row }) => {
      return <div className="text-end -mr-3">{row.getValue("total")}</div>;
    },
  },
];

export default function OrderDetailPage({ params }: OrderDetailPageProps) {
  const orderId = params.id;

  // This would normally come from a database
  const orderDetails = {
    id: orderId,
    customer: "John Smith",
    email: "john.smith@example.com",
    phone: "(555) 123-4567",
    date: "May 15, 2025",
    status: "Delivered",
    shippingAddress: "123 Main St, Apt 4B\nNew York, NY 10001\nUnited States",
    billingAddress: "123 Main St, Apt 4B\nNew York, NY 10001\nUnited States",
    paymentMethod: "Credit Card (ending in 4242)",
    items: [
      {
        id: "SKU-001",
        name: "Wireless Headphones",
        price: "$89.99",
        quantity: 1,
        total: "$89.99",
      },
      {
        id: "SKU-003",
        name: "Bluetooth Speaker",
        price: "$59.99",
        quantity: 2,
        total: "$119.98",
      },
      {
        id: "SKU-008",
        name: "USB-C Cable",
        price: "$14.99",
        quantity: 1,
        total: "$14.99",
      },
    ],
    subtotal: "$224.96",
    shipping: "$12.99",
    tax: "$18.74",
    total: "$256.69",
    trackingNumber: "TRK123456789",
    carrier: "FedEx",
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Delivered":
        return "default";
      case "Processing":
        return "secondary";
      case "Shipped":
        return "outline";
      case "Pending":
        return "destructive";
      case "Cancelled":
        return "destructive";
      default:
        return "default";
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/orders">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="text-2xl font-bold tracking-tight text-nowrap">
            Order {orderDetails.id}
          </h1>
          <Badge variant={getStatusVariant(orderDetails.status)}>
            {orderDetails.status}
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue={orderDetails.status.toLowerCase()}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Update Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="shipped">Shipped</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" className="gap-1">
            <Printer className="h-4 w-4" />
            <span>Print</span>
          </Button>
        </div>
      </div>
      <div className="grid md:grid-cols-[2fr_1fr] gap-6 relative overflow-auto items-start">
        <div className="relative flex flex-col gap-4 overflow-auto">
          <Card>
            <CardHeader>
              <CardTitle>Order Items</CardTitle>
              <CardDescription>Items included in this order.</CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable columns={columns} data={orderDetails.items} />

              <div className="mt-6 space-y-4">
                <div className="flex justify-between text-sm">
                  <div className="text-muted-foreground">Subtotal</div>
                  <div>{orderDetails.subtotal}</div>
                </div>
                <div className="flex justify-between text-sm">
                  <div className="text-muted-foreground">Shipping</div>
                  <div>{orderDetails.shipping}</div>
                </div>
                <div className="flex justify-between text-sm">
                  <div className="text-muted-foreground">Tax</div>
                  <div>{orderDetails.tax}</div>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <div>Total</div>
                  <div>{orderDetails.total}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Shipping Information</CardTitle>
              <CardDescription>Delivery details and tracking.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <div className="text-sm font-medium">Shipping Address</div>
                  <div className="mt-1 text-sm whitespace-pre-line">
                    {orderDetails.shippingAddress}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium">Shipping Method</div>
                  <div className="mt-1">
                    <Badge variant="outline" className="mr-2">
                      {orderDetails.carrier}
                    </Badge>
                    Standard Delivery
                  </div>
                  <div className="mt-2">
                    <div className="text-sm font-medium">Tracking Number</div>
                    <div className="mt-1 text-sm">
                      {orderDetails.trackingNumber}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div>
                <div className="text-sm font-medium">Customer</div>
                <div className="mt-1 text-lg font-semibold">
                  {orderDetails.customer}
                </div>
              </div>
              <div>
                <div className="text-sm font-medium">Contact Information</div>
                <div className="mt-1 text-sm">{orderDetails.email}</div>
                <div className="mt-1 text-sm">{orderDetails.phone}</div>
              </div>
              <Separator />
              <div>
                <div className="text-sm font-medium">Billing Address</div>
                <div className="mt-1 text-sm whitespace-pre-line">
                  {orderDetails.billingAddress}
                </div>
              </div>
              <div>
                <div className="text-sm font-medium">Payment Method</div>
                <div className="mt-1 text-sm">{orderDetails.paymentMethod}</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Order Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="relative flex flex-col items-center">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <span className="h-2 w-2 rounded-full bg-current" />
                    </div>
                    <div className="absolute top-6 bottom-0 w-px bg-border" />
                  </div>
                  <div className="grid gap-1 pb-4">
                    <div className="font-medium">Order Delivered</div>
                    <div className="text-sm text-muted-foreground">
                      May 18, 2025 at 10:30 AM
                    </div>
                    <div className="text-sm">
                      Package was delivered to the recipient.
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="relative flex flex-col items-center">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <span className="h-2 w-2 rounded-full bg-current" />
                    </div>
                    <div className="absolute top-6 bottom-0 w-px bg-border" />
                  </div>
                  <div className="grid gap-1 pb-4">
                    <div className="font-medium">Order Shipped</div>
                    <div className="text-sm text-muted-foreground">
                      May 16, 2025 at 2:15 PM
                    </div>
                    <div className="text-sm">
                      Package was shipped via FedEx.
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="relative flex flex-col items-center">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <span className="h-2 w-2 rounded-full bg-current" />
                    </div>
                    <div className="absolute top-6 bottom-0 w-px bg-border" />
                  </div>
                  <div className="grid gap-1 pb-4">
                    <div className="font-medium">Order Processing</div>
                    <div className="text-sm text-muted-foreground">
                      May 15, 2025 at 4:30 PM
                    </div>
                    <div className="text-sm">
                      Order has been processed and is being prepared for
                      shipping.
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <span className="h-2 w-2 rounded-full bg-current" />
                  </div>
                  <div className="grid gap-1">
                    <div className="font-medium">Order Placed</div>
                    <div className="text-sm text-muted-foreground">
                      May 15, 2025 at 2:45 PM
                    </div>
                    <div className="text-sm">Order was placed by customer.</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
