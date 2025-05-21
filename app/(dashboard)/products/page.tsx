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
  Box,
  ChevronDown,
  Download,
  Filter,
  MoreHorizontal,
  Package,
  PackagePlus,
  Search,
} from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Products</h1>
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
            <Link href="/add-product">
              <PackagePlus className="h-3.5 w-3.5" />
              <span>Add Product</span>
            </Link>
          </Button>
        </div>
      </div>
      <Card>
        <CardHeader className="flex flex-row items-center">
          <CardTitle>All Products</CardTitle>
          <div className="ml-auto flex items-center gap-2">
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
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">SKU</TableHead>
                <TableHead>
                  <div className="flex items-center gap-1">
                    Product Name
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">In Stock</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-right">Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
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
              ].map((product) => (
                <TableRow
                  key={product.id}
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() =>
                    (window.location.href = `/products/${product.id}`)
                  }
                >
                  <TableCell className="font-medium">{product.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-md bg-muted"></div>
                      <span>{product.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell className="text-right">{product.stock}</TableCell>
                  <TableCell className="text-right">{product.price}</TableCell>
                  <TableCell className="text-right">
                    <Badge
                      variant={
                        product.status === "In Stock"
                          ? "default"
                          : product.status === "Low Stock"
                          ? "outline"
                          : "destructive"
                      }
                    >
                      {product.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <DropdownMenuItem asChild>
                          <Link href={`/products/${product.id}`}>
                            View Details
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
