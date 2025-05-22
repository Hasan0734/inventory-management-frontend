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

const data = [
  {
    title: "Total Products",
    icon: Box,
    total: "12,84",
    subStatus: "+24 from last month",
  },
  {
    title: "Low Stock Items",
    icon: Package,
    total: "45",
    subStatus: "+12 since last week",
  },
  {
    title: "Pending Orders",
    icon: ShoppingCart,
    total: "23",
    subStatus: "-4 from yesterday",
  },
  {
    title: "Inventory Value",
    icon: CircleDollarSign,
    total: "$142,384",
    subStatus: "+2.5% from last month",
  },
];
export default function InventoryDashboard() {
  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <Button className="gap-1" asChild>
          <Link href="/add-product">
            <PackagePlus className="h-4 w-4" />
            Add Product
          </Link>
        </Button>
      </div>
      <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4  *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card">
        {data.map((item, i) => (
          <StaticsCard key={i} item={item} />
        ))}
      </div>

      <Tabs defaultValue="inventory">
        <div className="flex items-center flex-wrap  gap-4">
          <TabsList>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="low-stock">Low Stock</TabsTrigger>
            <TabsTrigger value="recent">Recent Activity</TabsTrigger>
          </TabsList>
          <div className="md:ml-auto flex items-center gap-2">
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
    </>
  );
}
