import type { Metadata } from "next"
import InventoryDashboard from "./inventory-dashboard"

export const metadata: Metadata = {
  title: "Inventory Management System",
  description: "A comprehensive inventory management system for your business",
}

export default function Home() {
  return <InventoryDashboard />
}
