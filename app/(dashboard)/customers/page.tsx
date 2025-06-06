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
import { CustomerColumn } from "@/components/columns/CustomerColumn";
import { Input } from "@/components/ui/input";

export default function CustomersPage() {
  const data = [
    {
      name: "Alice Johnson",
      phone: "+1 (555) 123-4567",
      email: "alice.johnson@example.com",
      address: "123 Main St, Springfield, IL 62701",
      imageURL: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Bob Smith",
      phone: "+1 (555) 987-6543",
      email: "bob.smith@example.com",
      address: "456 Elm St, Austin, TX 73301",
      imageURL: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Carol White",
      phone: "+1 (555) 555-7890",
      email: "carol.white@example.com",
      address: "789 Oak Ave, Portland, OR 97201",
      imageURL: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      name: "David Lee",
      phone: "+1 (555) 321-4567",
      email: "david.lee@example.com",
      address: "321 Pine Rd, Miami, FL 33101",
      imageURL: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      name: "Eva Brown",
      phone: "+1 (555) 654-3210",
      email: "eva.brown@example.com",
      address: "654 Cedar Ln, Seattle, WA 98101",
      imageURL: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      name: "Frank Miller",
      phone: "+1 (555) 111-2222",
      email: "frank.miller@example.com",
      address: "101 Maple Dr, Denver, CO 80201",
      imageURL: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      name: "Grace Kim",
      phone: "+1 (555) 333-4444",
      email: "grace.kim@example.com",
      address: "202 Birch Blvd, San Francisco, CA 94101",
      imageURL: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
      name: "Henry Adams",
      phone: "+1 (555) 777-8888",
      email: "henry.adams@example.com",
      address: "303 Cherry St, Boston, MA 02101",
      imageURL: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    {
      name: "Isabella Martinez",
      phone: "+1 (555) 666-9999",
      email: "isabella.martinez@example.com",
      address: "404 Walnut Rd, Phoenix, AZ 85001",
      imageURL: "https://randomuser.me/api/portraits/women/9.jpg",
    },
    {
      name: "Jack Wilson",
      phone: "+1 (555) 444-5555",
      email: "jack.wilson@example.com",
      address: "505 Ash Ct, Chicago, IL 60601",
      imageURL: "https://randomuser.me/api/portraits/men/10.jpg",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Customers</h1>
        <div className="flex items-center gap-2">
          <Button size="sm" className="h-8 gap-1" asChild>
            <Link href="/suppliers/add">
              <PlusCircle className="h-3.5 w-3.5" />
              <span>Add Customer</span>
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
        <CardHeader className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <CardTitle>All Customers</CardTitle>
          <div className="flex items-center flex-wrap md:flex-nowrap gap-2">
            <Input className="w-auto" placeholder="Search by name or phone or email" />
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
          <DataTable data={data} columns={CustomerColumn} />
        </CardContent>
      </Card>
    </>
  );
}
