"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpDown,
  BarChart3,
  Box,
  Calendar,
  CircleDollarSign,
  Download,
  Filter,
  MoreHorizontal,
  Package,
  Search,
  ShoppingCart,
  Truck,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DataTable } from "@/components/dataTable";
import { PurchaseColumns } from "@/components/columns/PurchaseColumn";

export default function PurchansesPage() {
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
        <h1 className="text-2xl font-bold tracking-tight">Purchases</h1>
        <div className="flex items-center gap-2">
          <Button size="sm" className="h-8 gap-1" asChild>
            <Link href="/orders/create">
              <Calendar className="h-3.5 w-3.5" />
              <span>New Order</span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,284</div>
            <p className="text-xs text-muted-foreground">+6% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Orders
            </CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">-4 from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Shipped Orders
            </CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">+8 since yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <CircleDollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,389</div>
            <p className="text-xs text-muted-foreground">
              +12.5% from last month
            </p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Orders</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Filter className="h-3.5 w-3.5" />
              <span>Filter</span>
            </Button>
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Download className="h-3.5 w-3.5" />
              <span>Export</span>
            </Button>

            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Orders</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={PurchaseColumns}
            data={orders}
            onRowClick={(row) =>
              (window.location.href = `/purchases/${row.id}`)
            }
          />
        </CardContent>
      </Card>
    </>
  );
}
