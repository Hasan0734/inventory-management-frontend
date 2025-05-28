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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Box, ChevronDown, Package, Save } from "lucide-react";
import ProductImageUpload from "@/components/ProductImageUpload";

export default function AddProductPage() {
  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/products">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="text-2xl font-bold tracking-tight">Add New Product</h1>
        </div>
        <Button size="sm" className="gap-1">
          <Save className="h-4 w-4" />
          <span>Save Product</span>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-[1fr_350px] items-start">
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Information</CardTitle>
              <CardDescription>
                Enter the basic details for your new product.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Product Name *
                    </label>
                    <Input id="name" placeholder="Enter product name" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="sku" className="text-sm font-medium">
                      SKU *
                    </label>
                    <Input id="sku" placeholder="Enter unique SKU" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="description" className="text-sm font-medium">
                    Description
                  </label>
                  <Textarea
                    className=""
                    id="description"
                    placeholder="Enter product description"
                    rows={4}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="category" className="text-sm font-medium">
                      Category *
                    </label>
                    <Select>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="accessories">Accessories</SelectItem>
                        <SelectItem value="clothing">Clothing</SelectItem>
                        <SelectItem value="home-kitchen">
                          Home & Kitchen
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="brand" className="text-sm font-medium">
                      Brand
                    </label>
                    <Input id="brand" placeholder="Enter brand name" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="price" className="text-sm font-medium">
                      Price *
                    </label>
                    <Input
                      id="price"
                      placeholder="0.00"
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
                      placeholder="0.00"
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
                      placeholder="0.0"
                      type="number"
                      min="0"
                      step="0.1"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Inventory Management</CardTitle>
              <CardDescription>
                Set up inventory tracking for this product.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="stock" className="text-sm font-medium">
                    Initial Stock *
                  </label>
                  <Input id="stock" placeholder="0" type="number" min="0" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="reorder" className="text-sm font-medium">
                    Reorder Point
                  </label>
                  <Input id="reorder" placeholder="0" type="number" min="0" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="location" className="text-sm font-medium">
                    Warehouse Location
                  </label>
                  <Input id="location" placeholder="e.g., A12-B34" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="supplier" className="text-sm font-medium">
                    Supplier
                  </label>
                  <Select>
                    <SelectTrigger id="supplier">
                      <SelectValue placeholder="Select supplier" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="electrosupply">
                        ElectroSupply Inc.
                      </SelectItem>
                      <SelectItem value="techworld">
                        TechWorld Distributors
                      </SelectItem>
                      <SelectItem value="globalgoods">
                        Global Goods Ltd.
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Shipping Information</CardTitle>
              <CardDescription>
                Enter shipping details for this product.
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
                    placeholder="0.00"
                    type="number"
                    min="0"
                    step="0.01"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="dimensions" className="text-sm font-medium">
                    Dimensions (cm)
                  </label>
                  <Input id="dimensions" placeholder="L x W x H" />
                </div>
              </div>
              <div className="grid gap-2">
                <label htmlFor="shipping-notes" className="text-sm font-medium">
                  Shipping Notes
                </label>
                <Textarea
                  className="resize-none"
                  id="shipping-notes"
                  placeholder="Enter any special shipping instructions"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-6">
          <ProductImageUpload />
          {/* <Card>
            <CardHeader>
              <CardTitle>Product Image</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="aspect-square overflow-hidden rounded-md bg-muted flex items-center justify-center">
                <div className="text-muted-foreground">
                  <Package className="h-12 w-12 mx-auto" />
                  <p className="text-sm text-center mt-2">Upload Image</p>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Upload Image
              </Button>
            </CardContent>
          </Card> */}
          <Card>
            <CardHeader>
              <CardTitle>Product Status</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="status" className="text-sm font-medium">
                  Status
                </label>
                <Select>
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <label htmlFor="visibility" className="text-sm font-medium">
                  Visibility
                </label>
                <Select>
                  <SelectTrigger id="visibility">
                    <SelectValue placeholder="Select visibility" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="visible">Visible</SelectItem>
                    <SelectItem value="hidden">Hidden</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
