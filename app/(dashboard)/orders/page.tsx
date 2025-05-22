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
import StaticsCard from "@/components/StaticsCard";
import { OrderColumns } from "@/components/columns/OrderColumns";
import { DataTable } from "@/components/dataTable";

const data = [
  {
    title: "Total Orders",
    icon: ShoppingCart,
    total: "12,84",
    subStatus: "+6% from last month",
  },
  {
    title: "Pending Orders",
    icon: Package,
    total: "23",
    subStatus: "-4 from yesterday",
  },
  {
    title: "Shipped Orders",
    icon: ShoppingCart,
    total: "42",
    subStatus: "+8 since yesterday",
  },
  {
    title: "Total Revenue",
    icon: CircleDollarSign,
    total: "$24,389",
    subStatus: "+12.5% from last month",
  },
];

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

export default function OrdersPage() {
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
        <h1 className="text-2xl font-bold tracking-tight">Orders</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Filter className="h-3.5 w-3.5" />
            <span>Filter</span>
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Download className="h-3.5 w-3.5" />
            <span>Export</span>
          </Button>
          <Button size="sm" className="h-8 gap-1" asChild>
            <Link href="/orders/create">
              <Calendar className="h-3.5 w-3.5" />
              <span>New Order</span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4  *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card">
        {data.map((item, i) => (
          <StaticsCard key={i} item={item} />
        ))}
      </div>
      <div className="relative flex flex-col gap-4 overflow-auto">
        <div className="overflow-hidden rounded-lg border">
          <Card>
            <CardHeader className="flex flex-row items-center">
              <CardTitle>Recent Orders</CardTitle>
              <div className="ml-auto flex items-center gap-2">
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
                columns={OrderColumns}
                data={orders}
                onRowClick={(row) =>
                  (window.location.href = `/orders/${row.id}`)
                }
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
