"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
    ArrowLeft,
  Building,
  Download,
  Filter,
  Package,
  PlusCircle,
  Truck,
} from "lucide-react";
import { DataTable } from "@/components/dataTable";
import { Input } from "@/components/ui/input";
import { OrderColumns } from "@/components/columns/OrderColumns";

export default function CustomersPage() {
  const orders = [
    {
      id: "ORD-001",
      customer: "John Smith",
      date: "2025-05-15",
      status: "Delivered",
      items: 3,
      total: "$245.99",
    },
    {
      id: "ORD-002",
      customer: "Sarah Johnson",
      date: "2025-05-16",
      status: "Processing",
      items: 2,
      total: "$89.99",
    },
    {
      id: "ORD-003",
      customer: "Michael Brown",
      date: "2025-05-16",
      status: "Shipped",
      items: 5,
      total: "$178.45",
    },
    {
      id: "ORD-004",
      customer: "Emily Davis",
      date: "2025-05-17",
      status: "Pending",
      items: 1,
      total: "$34.99",
    },
    {
      id: "ORD-005",
      customer: "Robert Wilson",
      date: "2025-05-17",
      status: "Delivered",
      items: 4,
      total: "$156.78",
    },
    {
      id: "ORD-006",
      customer: "Jennifer Taylor",
      date: "2025-05-17",
      status: "Processing",
      items: 2,
      total: "$67.50",
    },
    {
      id: "ORD-007",
      customer: "David Martinez",
      date: "2025-05-18",
      status: "Cancelled",
      items: 3,
      total: "$124.99",
    },
    {
      id: "ORD-008",
      customer: "Lisa Anderson",
      date: "2025-05-18",
      status: "Shipped",
      items: 6,
      total: "$289.95",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button variant="outline" size="icon" asChild>
          <Link href="/customers">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h1 className="text-2xl font-bold tracking-tight">Customer Details</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Suppliers
            </CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Suppliers
            </CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">21</div>
            <p className="text-xs text-muted-foreground">
              87.5% of total suppliers
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Products Supplied
            </CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,284</div>
            <p className="text-xs text-muted-foreground">
              Across all suppliers
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <CardTitle>All Customers</CardTitle>
          <div className="flex items-center flex-wrap md:flex-nowrap gap-2">
            <Input
              className="w-auto"
              placeholder="Search by name or phone or email"
            />
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Filter className="h-3.5 w-3.5" />
              <span>Filter</span>
            </Button>
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Download className="h-3.5 w-3.5" />
              <span>Export</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <DataTable data={orders} columns={OrderColumns} />
        </CardContent>
      </Card>
    </>
  );
}
