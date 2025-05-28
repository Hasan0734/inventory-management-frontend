import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { InventroyColumns } from "./columns/InventroyColumns";
import { DataTable } from "./dataTable";
import { ProductColumns } from "./columns/ProductColumns";

const data = [
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
];

const InventoryOverview = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Inventory Overview</CardTitle>
          <CardDescription>
            Manage your inventory across all warehouses.
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full overflow-auto">
          <DataTable
            columns={ProductColumns}
            data={data}
            onRowClick={(row) => (window.location.href = `/products/${row.id}`)}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default InventoryOverview;
