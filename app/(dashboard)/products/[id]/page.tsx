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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Package, Pencil, Save, Trash2 } from "lucide-react";
import SellsCard from "@/components/SellsCard";
import ProductImageUpload from "@/components/ProductImageUpload";

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const productId = params?.id;

  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/products">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="text-2xl font-bold tracking-tight">
            Product Details: {productId}
          </h1>
          <Badge>In Stock</Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Trash2 className="h-4 w-4" />
            <span>Delete</span>
          </Button>
          <Button size="sm" className="gap-1">
            <Save className="h-4 w-4" />
            <span>Save Changes</span>
          </Button>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-[1fr_350px] items-start">
        <div className="grid gap-6 ">
          <Card>
            <CardHeader>
              <CardTitle>Product Information</CardTitle>
              <CardDescription>View and edit product details.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Product Name
                    </label>
                    <Input id="name" defaultValue="Wireless Headphones" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="sku" className="text-sm font-medium">
                      SKU
                    </label>
                    <Input id="sku" defaultValue="SKU-001" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="description" className="text-sm font-medium">
                    Description
                  </label>
                  <Textarea
                    id="description"
                    defaultValue="Premium wireless headphones with noise cancellation and long battery life. Perfect for music lovers and travelers."
                    rows={4}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="category" className="text-sm font-medium">
                      Category
                    </label>
                    <Input id="category" defaultValue="Electronics" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="brand" className="text-sm font-medium">
                      Brand
                    </label>
                    <Input id="brand" defaultValue="SoundWave" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="price" className="text-sm font-medium">
                      Price
                    </label>
                    <Input
                      id="price"
                      defaultValue="89.99"
                      type="number"
                      min="0"
                      step="0.01"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="cost" className="text-sm font-medium">
                      Cost
                    </label>
                    <Input
                      id="cost"
                      defaultValue="45.50"
                      type="number"
                      min="0"
                      step="0.01"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="tax" className="text-sm font-medium">
                      Tax Rate (%)
                    </label>
                    <Input
                      id="tax"
                      defaultValue="7.5"
                      type="number"
                      min="0"
                      step="0.1"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Tabs defaultValue="inventory">
            <TabsList>
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
              <TabsTrigger value="variants">Variants</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>
            <TabsContent value="inventory" className="border-none p-0 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Inventory Management</CardTitle>
                  <CardDescription>
                    Manage stock levels and inventory settings.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <label htmlFor="stock" className="text-sm font-medium">
                        Current Stock
                      </label>
                      <Input
                        id="stock"
                        defaultValue="124"
                        type="number"
                        min="0"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="reorder" className="text-sm font-medium">
                        Reorder Point
                      </label>
                      <Input
                        id="reorder"
                        defaultValue="25"
                        type="number"
                        min="0"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <label htmlFor="location" className="text-sm font-medium">
                        Warehouse Location
                      </label>
                      <Input id="location" defaultValue="A12-B34" />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="supplier" className="text-sm font-medium">
                        Supplier
                      </label>
                      <Input id="supplier" defaultValue="ElectroSupply Inc." />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="variants" className="border-none p-0 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Product Variants</CardTitle>
                  <CardDescription>
                    Manage different versions of this product.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-[1fr_100px_100px_80px] gap-4 p-4 font-medium">
                      <div>Variant</div>
                      <div>Price</div>
                      <div>Stock</div>
                      <div className="text-right">Actions</div>
                    </div>
                    <div className="divide-y">
                      <div className="grid grid-cols-[1fr_100px_100px_80px] gap-4 p-4">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-black"></div>
                          <span>Black</span>
                        </div>
                        <div>$89.99</div>
                        <div>45</div>
                        <div className="flex justify-end">
                          <Button variant="ghost" size="icon">
                            <Pencil className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                        </div>
                      </div>
                      <div className="grid grid-cols-[1fr_100px_100px_80px] gap-4 p-4">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-white border"></div>
                          <span>White</span>
                        </div>
                        <div>$89.99</div>
                        <div>38</div>
                        <div className="flex justify-end">
                          <Button variant="ghost" size="icon">
                            <Pencil className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                        </div>
                      </div>
                      <div className="grid grid-cols-[1fr_100px_100px_80px] gap-4 p-4">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-blue-500"></div>
                          <span>Blue</span>
                        </div>
                        <div>$94.99</div>
                        <div>41</div>
                        <div className="flex justify-end">
                          <Button variant="ghost" size="icon">
                            <Pencil className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="shipping" className="border-none p-0 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Information</CardTitle>
                  <CardDescription>
                    Manage shipping details for this product.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <label htmlFor="weight" className="text-sm font-medium">
                        Weight (kg)
                      </label>
                      <Input
                        id="weight"
                        defaultValue="0.35"
                        type="number"
                        min="0"
                        step="0.01"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="dimensions"
                        className="text-sm font-medium"
                      >
                        Dimensions (cm)
                      </label>
                      <Input id="dimensions" defaultValue="20 x 15 x 8" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="shipping-notes"
                      className="text-sm font-medium"
                    >
                      Shipping Notes
                    </label>
                    <Textarea
                      id="shipping-notes"
                      defaultValue="Fragile item, handle with care. Package contains lithium-ion battery."
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="grid gap-6 ">
          <ProductImageUpload />
          <Tabs defaultValue="sales">
            <TabsList>
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="supplier">Supplier</TabsTrigger>
            </TabsList>
            <TabsContent value="sales" className="pt-4">
              <SellsCard />
            </TabsContent>
            <TabsContent value="supplier" className="pt-4">
              <SellsCard />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
