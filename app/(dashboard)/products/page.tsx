"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  ChevronDown,
  CircleDollarSign,
  Download,
  Filter,
  Package,
  PackagePlus,
  ShoppingCart,
} from "lucide-react";
import { DataTable } from "@/components/dataTable";
import { ProductColumns } from "@/components/columns/ProductColumns";
import StaticsCard from "@/components/StaticsCard";

const products = [
  {
    id: "SKU-001",
    name: "Wireless Headphones",
    category: "Electronics",
    stock: 124,
    price: "$89.99",
    status: "In Stock",
  },
  {
    id: "SKU-002",
    name: "Smartphone Case",
    category: "Accessories",
    stock: 532,
    price: "$24.99",
    status: "In Stock",
  },
  {
    id: "SKU-003",
    name: "Bluetooth Speaker",
    category: "Electronics",
    stock: 32,
    price: "$59.99",
    status: "Low Stock",
  },
  {
    id: "SKU-004",
    name: "Laptop Sleeve",
    category: "Accessories",
    stock: 89,
    price: "$29.99",
    status: "In Stock",
  },
  {
    id: "SKU-005",
    name: "Wireless Mouse",
    category: "Electronics",
    stock: 0,
    price: "$34.99",
    status: "Out of Stock",
  },
  {
    id: "SKU-006",
    name: "Desk Lamp",
    category: "Home & Kitchen",
    stock: 67,
    price: "$45.99",
    status: "In Stock",
  },
  {
    id: "SKU-007",
    name: "Cotton T-Shirt",
    category: "Clothing",
    stock: 245,
    price: "$19.99",
    status: "In Stock",
  },
  {
    id: "SKU-008",
    name: "USB-C Cable",
    category: "Accessories",
    stock: 45,
    price: "$14.99",
    status: "Low Stock",
  },
];
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
export default function ProductsPage() {
  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Products</h1>
        <div className="flex items-center gap-2">
          <Button size="sm" className="h-8 gap-1" asChild>
            <Link href="/products/add-product">
              <PackagePlus className="h-3.5 w-3.5" />
              <span>Add Product</span>
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
            <CardHeader className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <CardTitle>All Products</CardTitle>
              <div className=" flex items-center flex-wrap gap-2">
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <Filter className="h-3.5 w-3.5" />
                  <span>Filter</span>
                </Button>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <Download className="h-3.5 w-3.5" />
                  <span>Export</span>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="gap-1">
                      <span>Category</span>
                      <ChevronDown className="h-3.5 w-3.5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>All Categories</DropdownMenuItem>
                    <DropdownMenuItem>Electronics</DropdownMenuItem>
                    <DropdownMenuItem>Accessories</DropdownMenuItem>
                    <DropdownMenuItem>Clothing</DropdownMenuItem>
                    <DropdownMenuItem>Home & Kitchen</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="gap-1">
                      <span>Status</span>
                      <ChevronDown className="h-3.5 w-3.5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>All Statuses</DropdownMenuItem>
                    <DropdownMenuItem>In Stock</DropdownMenuItem>
                    <DropdownMenuItem>Low Stock</DropdownMenuItem>
                    <DropdownMenuItem>Out of Stock</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent>
              <DataTable
                columns={ProductColumns}
                data={products}
                onRowClick={(row) =>
                  (window.location.href = `/products/${row.id}`)
                }
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
