import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PropsType {
  item: {
    icon: any;
    title: string;
    total: string;
    subStatus: string;
  };
}

const StaticsCard = ({ item }: PropsType) => {
  return (
    <>
      <Card className="@container/card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
          <item.icon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{item.total}</div>
          <p className="text-xs text-muted-foreground">{item.subStatus}</p>
        </CardContent>
      </Card>
    </>
  );
};

export default StaticsCard;
