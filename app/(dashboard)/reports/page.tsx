"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart3,
  Box,
  Calendar,
  ChevronDown,
  CircleDollarSign,
  Download,
  LineChart,
  Package,
  PieChart,
  Search,
  ShoppingCart,
  Truck,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChartArea } from "@/components/ChartArea";

export default function ReportsPage() {
  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Reports</h1>
        <div className="flex items-center gap-2">
          <Select defaultValue="last30days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last7days">Last 7 days</SelectItem>
              <SelectItem value="last30days">Last 30 days</SelectItem>
              <SelectItem value="last90days">Last 90 days</SelectItem>
              <SelectItem value="lastyear">Last year</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Calendar className="h-3.5 w-3.5" />
            <span>Date Range</span>
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Download className="h-3.5 w-3.5" />
            <span>Export</span>
          </Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <CircleDollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,389</div>
            <p className="text-xs text-muted-foreground">
              +12.5% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-muted-foreground">+6% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Average Order Value
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$71.31</div>
            <p className="text-xs text-muted-foreground">
              +5.2% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="sales">
        <TabsList>
          <TabsTrigger value="sales">Sales Reports</TabsTrigger>
          <TabsTrigger value="inventory">Inventory Reports</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>
        <TabsContent value="sales" className="border-none p-0 pt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Sales Overview</CardTitle>
                <CardDescription>Monthly sales performance</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 text-center">
                  <BarChart3 className="h-16 w-16 text-muted-foreground" />
                  <h3 className="text-lg font-medium">Sales Chart</h3>
                  <p className="text-sm text-muted-foreground">
                    Bar chart showing monthly sales data would appear here
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Top Selling Products</CardTitle>
                <CardDescription>
                  Products with highest sales volume
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 text-center">
                  <PieChart className="h-16 w-16 text-muted-foreground" />
                  <h3 className="text-lg font-medium">Product Distribution</h3>
                  <p className="text-sm text-muted-foreground">
                    Pie chart showing top selling products would appear here
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Sales Trends</CardTitle>
                <CardDescription>
                  Daily sales over the selected period
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 text-center">
                  <LineChart className="h-16 w-16 text-muted-foreground" />
                  <h3 className="text-lg font-medium">Daily Sales Trend</h3>
                  <p className="text-sm text-muted-foreground">
                    Line chart showing daily sales trends would appear here
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="inventory" className="border-none p-0 pt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Inventory Value</CardTitle>
                <CardDescription>Total value by category</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 text-center">
                  <PieChart className="h-16 w-16 text-muted-foreground" />
                  <h3 className="text-lg font-medium">Category Distribution</h3>
                  <p className="text-sm text-muted-foreground">
                    Pie chart showing inventory value by category would appear
                    here
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Stock Levels</CardTitle>
                <CardDescription>Current inventory status</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 text-center">
                  <BarChart3 className="h-16 w-16 text-muted-foreground" />
                  <h3 className="text-lg font-medium">Stock Level Chart</h3>
                  <p className="text-sm text-muted-foreground">
                    Bar chart showing current stock levels would appear here
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Low Stock Items</CardTitle>
                <CardDescription>
                  Products that need to be restocked soon
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-[1fr_100px_100px_100px] gap-4 p-4 font-medium">
                    <div>Product</div>
                    <div className="text-right">Current Stock</div>
                    <div className="text-right">Reorder Point</div>
                    <div className="text-right">Status</div>
                  </div>
                  <div className="divide-y">
                    <div className="grid grid-cols-[1fr_100px_100px_100px] gap-4 p-4">
                      <div>Bluetooth Speaker</div>
                      <div className="text-right">32</div>
                      <div className="text-right">50</div>
                      <div className="text-right text-amber-500">Low Stock</div>
                    </div>
                    <div className="grid grid-cols-[1fr_100px_100px_100px] gap-4 p-4">
                      <div>USB-C Cable</div>
                      <div className="text-right">45</div>
                      <div className="text-right">100</div>
                      <div className="text-right text-amber-500">Low Stock</div>
                    </div>
                    <div className="grid grid-cols-[1fr_100px_100px_100px] gap-4 p-4">
                      <div>Wireless Keyboard</div>
                      <div className="text-right">18</div>
                      <div className="text-right">25</div>
                      <div className="text-right text-amber-500">Low Stock</div>
                    </div>
                    <div className="grid grid-cols-[1fr_100px_100px_100px] gap-4 p-4">
                      <div>Wireless Mouse</div>
                      <div className="text-right">0</div>
                      <div className="text-right">30</div>
                      <div className="text-right text-red-500">
                        Out of Stock
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="performance" className="border-none p-0 pt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Order Fulfillment</CardTitle>
                <CardDescription>Order processing efficiency</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 text-center">
                  <LineChart className="h-16 w-16 text-muted-foreground" />
                  <h3 className="text-lg font-medium">Fulfillment Time</h3>
                  <p className="text-sm text-muted-foreground">
                    Line chart showing order fulfillment times would appear here
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Supplier Performance</CardTitle>
                <CardDescription>
                  Delivery times and reliability
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 text-center">
                  <BarChart3 className="h-16 w-16 text-muted-foreground" />
                  <h3 className="text-lg font-medium">Supplier Ratings</h3>
                  <p className="text-sm text-muted-foreground">
                    Bar chart showing supplier performance metrics would appear
                    here
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Inventory Turnover</CardTitle>
                <CardDescription>
                  How quickly inventory is sold and replaced
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 text-center">
                  <LineChart className="h-16 w-16 text-muted-foreground" />
                  <h3 className="text-lg font-medium">Turnover Rate</h3>
                  <p className="text-sm text-muted-foreground">
                    Line chart showing inventory turnover rates would appear
                    here
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}
