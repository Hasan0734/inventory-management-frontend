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
  Building,
  CircleDollarSign,
  Download,
  Filter,
  MoreHorizontal,
  Package,
  PlusCircle,
  Search,
  ShoppingCart,
  Truck,
} from "lucide-react";

export default function CategoriesPage() {
  const suppliers = [
    {
      id: "SUP-001",
      name: "ElectroSupply Inc.",
      contact: "Sarah Johnson",
      email: "sarah@electrosupply.com",
      phone: "(555) 123-4567",
      products: 24,
      status: "Active",
    },
    {
      id: "SUP-002",
      name: "TechWorld Distributors",
      contact: "Michael Chen",
      email: "michael@techworld.com",
      phone: "(555) 234-5678",
      products: 36,
      status: "Active",
    },
    {
      id: "SUP-003",
      name: "Global Goods Ltd.",
      contact: "David Wilson",
      email: "david@globalgoods.com",
      phone: "(555) 345-6789",
      products: 18,
      status: "Active",
    },
    {
      id: "SUP-004",
      name: "Quality Components Co.",
      contact: "Jennifer Taylor",
      email: "jennifer@qualitycomponents.com",
      phone: "(555) 456-7890",
      products: 42,
      status: "Inactive",
    },
    {
      id: "SUP-005",
      name: "Prime Parts Supply",
      contact: "Robert Brown",
      email: "robert@primeparts.com",
      phone: "(555) 567-8901",
      products: 15,
      status: "Active",
    },
    {
      id: "SUP-006",
      name: "Innovative Imports",
      contact: "Emily Davis",
      email: "emily@innovativeimports.com",
      phone: "(555) 678-9012",
      products: 29,
      status: "Active",
    },
    {
      id: "SUP-007",
      name: "Reliable Resources",
      contact: "James Martinez",
      email: "james@reliableresources.com",
      phone: "(555) 789-0123",
      products: 8,
      status: "On Hold",
    },
    {
      id: "SUP-008",
      name: "Superior Supplies",
      contact: "Lisa Anderson",
      email: "lisa@superiorsupplies.com",
      phone: "(555) 890-1234",
      products: 31,
      status: "Active",
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Active":
        return "default";
      case "Inactive":
        return "secondary";
      case "On Hold":
        return "destructive";
      default:
        return "default";
    }
  };

  return (
    <div className="grid gap-6">
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
        <CardHeader>
          <CardTitle>All Suppliers</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>
                  <div className="flex items-center gap-1">
                    Supplier Name
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead>Contact Person</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="text-center">Products</TableHead>
                <TableHead className="text-right">Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {suppliers.map((supplier) => (
                <TableRow
                  key={supplier.id}
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() =>
                    (window.location.href = `/suppliers/${supplier.id}`)
                  }
                >
                  <TableCell className="font-medium">{supplier.id}</TableCell>
                  <TableCell>{supplier.name}</TableCell>
                  <TableCell>{supplier.contact}</TableCell>
                  <TableCell>{supplier.email}</TableCell>
                  <TableCell className="text-center">
                    {supplier.products}
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant={getStatusVariant(supplier.status)}>
                      {supplier.status}
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
                          +
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <DropdownMenuItem asChild>
                          <Link href={`/suppliers/${supplier.id}`}>
                            View Details
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Deactivate</DropdownMenuItem>
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
