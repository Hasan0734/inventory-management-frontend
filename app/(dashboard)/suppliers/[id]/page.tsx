import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  BarChart3,
  Box,
  Building,
  ChevronDown,
  CircleDollarSign,
  Mail,
  MapPin,
  Package,
  Pencil,
  Phone,
  ShoppingCart,
  Truck,
  User,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface SupplierDetailPageProps {
  params: {
    id: string;
  };
}

export default function SupplierDetailPage({
  params,
}: SupplierDetailPageProps) {
  const supplierId = params.id;

  // This would normally come from a database
  const supplierDetails = {
    id: supplierId,
    name: "ElectroSupply Inc.",
    status: "Active",
    contactPerson: "Sarah Johnson",
    email: "sarah@electrosupply.com",
    phone: "(555) 123-4567",
    website: "www.electrosupply.com",
    address:
      "123 Supplier St, Suite 400\nSan Francisco, CA 94103\nUnited States",
    description:
      "ElectroSupply Inc. is a leading distributor of electronic components and accessories. Specializing in high-quality audio equipment, mobile accessories, and computer peripherals.",
    paymentTerms: "Net 30",
    taxId: "12-3456789",
    products: [
      {
        id: "SKU-001",
        name: "Wireless Headphones",
        category: "Electronics",
        stock: 124,
        price: "$89.99",
      },
      {
        id: "SKU-003",
        name: "Bluetooth Speaker",
        category: "Electronics",
        stock: 32,
        price: "$59.99",
      },
      {
        id: "SKU-005",
        name: "Wireless Mouse",
        category: "Electronics",
        stock: 0,
        price: "$34.99",
      },
      {
        id: "SKU-008",
        name: "USB-C Cable",
        category: "Accessories",
        stock: 45,
        price: "$14.99",
      },
    ],
    orders: [
      {
        id: "PO-001",
        date: "May 10, 2025",
        amount: "$2,450.75",
        status: "Delivered",
      },
      {
        id: "PO-002",
        date: "April 25, 2025",
        amount: "$1,875.50",
        status: "Delivered",
      },
      {
        id: "PO-003",
        date: "April 12, 2025",
        amount: "$3,240.00",
        status: "Delivered",
      },
    ],
  };

  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/suppliers">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="text-2xl font-bold tracking-tight">
            {supplierDetails.name}
          </h1>
          <Badge>{supplierDetails.status}</Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Pencil className="h-4 w-4" />
            <span>Edit</span>
          </Button>
          <Button size="sm" className="gap-1">
            <ShoppingCart className="h-4 w-4" />
            <span>Create Order</span>
          </Button>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Supplier Information</CardTitle>
              <CardDescription>Details about this supplier.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <div className="text-sm font-medium">Description</div>
                  <div className="text-sm">{supplierDetails.description}</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-medium">Payment Terms</div>
                    <div className="mt-1 text-sm">
                      {supplierDetails.paymentTerms}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Tax ID</div>
                    <div className="mt-1 text-sm">{supplierDetails.taxId}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Tabs defaultValue="products">
            <TabsList>
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="orders">Purchase Orders</TabsTrigger>
            </TabsList>
            <TabsContent value="products" className="border-none p-0 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Supplied Products</CardTitle>
                  <CardDescription>
                    Products supplied by {supplierDetails.name}.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">SKU</TableHead>
                        <TableHead>Product Name</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead className="text-right">In Stock</TableHead>
                        <TableHead className="text-right">Price</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {supplierDetails.products.map((product) => (
                        <TableRow
                          key={product.id}
                          className="cursor-pointer hover:bg-muted/50"
                        >
                          <TableCell className="font-medium">
                            {product.id}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div className="h-10 w-10 rounded-md bg-muted"></div>
                              <span>{product.name}</span>
                            </div>
                          </TableCell>
                          <TableCell>{product.category}</TableCell>
                          <TableCell className="text-right">
                            {product.stock}
                          </TableCell>
                          <TableCell className="text-right">
                            {product.price}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="orders" className="border-none p-0 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Purchase Orders</CardTitle>
                  <CardDescription>
                    Recent orders from this supplier.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {supplierDetails.orders.map((order) => (
                        <TableRow
                          key={order.id}
                          className="cursor-pointer hover:bg-muted/50"
                        >
                          <TableCell className="font-medium">
                            {order.id}
                          </TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell className="text-right">
                            {order.amount}
                          </TableCell>
                          <TableCell className="text-right">
                            <Badge variant="outline">{order.status}</Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-start gap-3">
                <User className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <div>
                  <div className="font-medium">
                    {supplierDetails.contactPerson}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Primary Contact
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <div>
                  <div className="font-medium">{supplierDetails.email}</div>
                  <div className="text-sm text-muted-foreground">Email</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <div>
                  <div className="font-medium">{supplierDetails.phone}</div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <div>
                  <div className="font-medium">{supplierDetails.website}</div>
                  <div className="text-sm text-muted-foreground">Website</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <div>
                  <div className="font-medium whitespace-pre-line">
                    {supplierDetails.address}
                  </div>
                  <div className="text-sm text-muted-foreground">Address</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Performance</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-medium">On-Time Delivery</div>
                  <div className="text-2xl font-bold mt-1">98%</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Quality Rating</div>
                  <div className="text-2xl font-bold mt-1">4.8/5</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-medium">Response Time</div>
                  <div className="text-2xl font-bold mt-1">1.2 days</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Avg. Lead Time</div>
                  <div className="text-2xl font-bold mt-1">5 days</div>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium">Last Order</div>
                <div className="text-sm mt-1">May 10, 2025</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
