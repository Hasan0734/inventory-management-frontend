"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Building,
  Download,
  Filter,
  Package,
  PlusCircle,
  Truck,
} from "lucide-react";
import { DataTable } from "@/components/dataTable";
import { CategoryColumn } from "@/components/columns/CategoryColumn";

export default function CategoriesPage() {
  const data = [
    { name: "Motherboards", totalProduct: 50, totalSale: 10000 },
    { name: "Keyboard", totalProduct: 100, totalSale: 20000 },
    { name: "Mouse", totalProduct: 100, totalSale: 4000 },
    { name: "HDD", totalProduct: 20, totalSale: 1000 },
    { name: "SSD", totalProduct: 20, totalSale: 500 },
    { name: "Cable", totalProduct: 300, totalSale: 1500 },
    { name: "Monitor", totalProduct: 500, totalSale: 15000 },
    { name: "Camera", totalProduct: 20, totalSale: 205000 },
    { name: "Mobile", totalProduct: 500, totalSale: 6200 },
    { name: "Electronics", totalProduct: 100, totalSale: 45000 },
    { name: "Table", totalProduct: 50, totalSale: 53550 },
  ];

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Categories</h1>
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
            <Link href="/categories/add">
              <PlusCircle className="h-3.5 w-3.5" />
              <span>Add Category</span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Categories
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
              Active Categories
            </CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">21</div>
            <p className="text-xs text-muted-foreground">
              87.5% of total categories
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
        <CardHeader>
          <CardTitle>All Category</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable data={data} columns={CategoryColumn} />
        </CardContent>
      </Card>
    </>
  );
}
