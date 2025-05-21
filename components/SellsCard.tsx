import React from "react";
import { ShoppingCart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const SellsCard = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Sales Information</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm font-medium">Total Sales</div>
              <div className="text-2xl font-bold mt-1">1,245</div>
            </div>
            <div>
              <div className="text-sm font-medium">Revenue</div>
              <div className="text-2xl font-bold mt-1">$112,043</div>
            </div>
          </div>
          <div className="grid gap-1">
            <div className="text-sm font-medium">Last Order</div>
            <div className="text-sm">Today at 10:45 AM</div>
          </div>
          <div className="grid gap-1">
            <div className="text-sm font-medium">Popular With</div>
            <div className="flex flex-wrap gap-1">
              <Badge variant="secondary" className="rounded-sm">
                Music Lovers
              </Badge>
              <Badge variant="secondary" className="rounded-sm">
                Travelers
              </Badge>
              <Badge variant="secondary" className="rounded-sm">
                Students
              </Badge>
            </div>
          </div>
          <Button variant="outline" className="w-full gap-1">
            <ShoppingCart className="h-4 w-4" />
            <span>View Orders</span>
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default SellsCard;
