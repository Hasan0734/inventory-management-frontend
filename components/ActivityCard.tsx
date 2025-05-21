import React from "react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

interface PropsType {
  icon: any;
  title: string;
  date: string;
  iconClassName?: string;
  description?: string;
}
const ActivityCard = ({
  icon,
  title,
  date,
  iconClassName,
  description,
}: PropsType) => {
  const Icon = icon;
  return (
    <>
      <Card className="bg-background flex items-start gap-4 rounded-lg border p-4">
        <div className="rounded-full bg-primary/10 p-2">
          <Icon className={cn("h-4 w-4", iconClassName)} />
        </div>
        <div className="grid gap-1">
          <p className={"text-sm font-medium"}>{title}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
          <p className="text-xs text-muted-foreground">{date}</p>
        </div>
      </Card>
    </>
  );
};

export default ActivityCard;
