import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Package, PackagePlus, ShoppingCart } from "lucide-react";
import ActivityCard from "./ActivityCard";

const activityData = [
  {
    icon: PackagePlus,
    title: "New Stock Added",
    date: "Today at 10:30 AM",
    iconClassName: "text-primary",
    description: "50 units of 'Wireless Headphones' added to inventory",
  },
  {
    icon: Package,
    title: "Low Stock Alert",
    date: "Yesterday at 4:15 PM",
    iconClassName: "text-amber-500",
    description: "'Bluetooth Speaker' has reached low stock threshold",
  },
  {
    icon: ShoppingCart,
    title: "Order Fulfilled",
    date: "Yesterday at 2:30 PM",
    iconClassName: "text-green-500",
    description: "Order #12345 has been packed and shipped",
  },
  {
    icon: Package,
    title: "Out of Stock",
    date: "2 days ago at 9:45 AM",
    iconClassName: "text-red-500",
    description: "'Wireless Mouse' is now out of stock",
  },
];

const RecentActivity = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>
            Recent inventory changes and updates.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activityData.map((item, index) => (
              <ActivityCard
                key={index}
                icon={item.icon}
                title={item.title}
                date={item.date}
                iconClassName={item.iconClassName}
                description={item.description}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default RecentActivity;
