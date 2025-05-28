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
import { SupplierColumn } from "@/components/columns/SupplierColumn";

export default function SuppliersPage() {
  const suppliers = [
    {
      id: "SUP-001",
      name: "ElectroSupply Inc.",
      contact: "Sarah Johnson",
      email: "sarah@electrosupply.com",
      phone: "(555) 123-4567",
      products: 24,
      status: "active",
      address: "Fulbaria, Mymensingh",
    },
    {
      id: "SUP-002",
      name: "TechWorld Distributors",
      contact: "Michael Chen",
      email: "michael@techworld.com",
      phone: "(555) 234-5678",
      products: 36,
      status: "inactive",
      address: "Trishal, Mymensingh",
    },
    {
      id: "SUP-003",
      name: "Global Goods Ltd.",
      contact: "David Wilson",
      email: "david@globalgoods.com",
      phone: "(555) 345-6789",
      products: 18,
      status: "active",
      address: "Bhaluka, Mymensingh",
    },
    {
      id: "SUP-004",
      name: "Quality Components Co.",
      contact: "Jennifer Taylor",
      email: "jennifer@qualitycomponents.com",
      phone: "(555) 456-7890",
      products: 42,
      status: "inactive",
      address: "Trishal, Mymensingh",
    },
    {
      id: "SUP-005",
      name: "Prime Parts Supply",
      contact: "Robert Brown",
      email: "robert@primeparts.com",
      phone: "(555) 567-8901",
      products: 15,
      status: "active",
      address: "Fulbaria, Mymensingh",
    },
    {
      id: "SUP-006",
      name: "Innovative Imports",
      contact: "Emily Davis",
      email: "emily@innovativeimports.com",
      phone: "(555) 678-9012",
      products: 29,
      status: "active",
      address: "Fulpur, Mymensingh",
    },
    {
      id: "SUP-007",
      name: "Reliable Resources",
      contact: "James Martinez",
      email: "james@reliableresources.com",
      phone: "(555) 789-0123",
      products: 8,
      status: "inactive",
      address: "Tarakanda, Mymensingh",
    },
    {
      id: "SUP-008",
      name: "Superior Supplies",
      contact: "Lisa Anderson",
      email: "lisa@superiorsupplies.com",
      phone: "(555) 890-1234",
      products: 31,
      status: "active",
      address: "Fulbaria, Mymensingh",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Suppliers</h1>
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
            <Link href="/suppliers/add">
              <PlusCircle className="h-3.5 w-3.5" />
              <span>Add Supplier</span>
            </Link>
          </Button>
        </div>
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
              active Suppliers
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
        <CardHeader>
          <CardTitle>All Suppliers</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={SupplierColumn}
            data={suppliers}
            onRowClick={(row) =>
              (window.location.href = `/suppliers/${row.id}`)
            }
          />
        </CardContent>
      </Card>
    </>
  );
}
