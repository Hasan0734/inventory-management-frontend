"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Box,
  CircleDollarSign,
  Package,
  PackagePlus,
  ShoppingCart,
} from "lucide-react";
import InventoryOverview from "@/components/InventoryOverview";
import { LowStock } from "@/components/LowStock";
import RecentActivity from "@/components/RecentActivity";
import StaticsCard from "@/components/StaticsCard";

export default function InventoryDashboard() {
  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <Button className="gap-1" asChild>
          <Link href="/add-product">
            <PackagePlus className="h-4 w-4" />
            Add Product
          </Link>
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StaticsCard
          icon={Box}
          title="Total Products"
          total="1,284"
          subStatus="+24 from last month"
        />
        <StaticsCard
          icon={Package}
          title="Low Stock Items"
          total="45"
          subStatus="+12 since last week"
        />

        <StaticsCard
          icon={ShoppingCart}
          title="Pending Orders"
          total="23"
          subStatus="-4 from yesterday"
        />
        <StaticsCard
          icon={CircleDollarSign}
          title="Inventory Value"
          total="$142,384"
          subStatus="+2.5% from last month"
        />
      </div>

      <Tabs defaultValue="inventory">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="low-stock">Low Stock</TabsTrigger>
            <TabsTrigger value="recent">Recent Activity</TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" size="sm">
              Export
            </Button>
            <Button variant="outline" size="sm">
              Filter
            </Button>
          </div>
        </div>

        <TabsContent value="inventory" className="border-none p-0 pt-4">
          <InventoryOverview />
        </TabsContent>
        <TabsContent value="low-stock" className="border-none p-0 pt-4">
          <LowStock />
        </TabsContent>
        <TabsContent value="recent" className="border-none p-0 pt-4">
          <RecentActivity />
        </TabsContent>
      </Tabs>
    </div>
  );
}
