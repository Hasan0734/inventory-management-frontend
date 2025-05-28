import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BASE_API = process.env.NEXT_PUBLIC_BASE_API;

export const getStatusVariant = (status: string) => {
  switch (status) {
    case "Delivered":
      return "default";
    case "Processing":
      return "secondary";
    case "Shipped":
      return "outline";
    case "Pending":
      return "destructive";
    case "Cancelled":
      return "destructive";
    default:
      return "default";
  }
};
