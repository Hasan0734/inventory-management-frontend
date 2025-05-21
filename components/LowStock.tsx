import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { DataTable } from "./dataTable";
import { LowStockColumns } from "./columns/LowStockColumns";

const data = [
  {
    id: "SKU-003",
    name: "Bluetooth Speaker",
    category: "Electronics",
    stock: 32,
    reorderPoint: 50,
    status: "Low Stock",
    statusVariant: "outline", // ShadCN Badge variant
  },
  {
    id: "SKU-008",
    name: "USB-C Cable",
    category: "Accessories",
    stock: 45,
    reorderPoint: 100,
    status: "Low Stock",
    statusVariant: "outline",
  },
  {
    id: "SKU-012",
    name: "Wireless Keyboard",
    category: "Electronics",
    stock: 18,
    reorderPoint: 25,
    status: "Low Stock",
    statusVariant: "outline",
  },
  {
    id: "SKU-005",
    name: "Wireless Mouse",
    category: "Electronics",
    stock: 0,
    reorderPoint: 30,
    status: "Out of Stock",
    statusVariant: "destructive",
  },
];

export const LowStock = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Low Stock Items</CardTitle>
          <CardDescription>
            Items that need to be restocked soon.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            data={data}
            columns={LowStockColumns}
            onRowClick={(row) => (window.location.href = `/products/${row.id}`)}
          />
        </CardContent>
      </Card>
    </>
  );
};
