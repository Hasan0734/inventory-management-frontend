"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "./ui/form";
import TextInput from "./ui/text-input";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

const FormSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const router = useRouter();
  const [message, setMessage] = useState("");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const res = await axios.post("/api/auth/login", data).catch((err) => {
      toast.error(err.response.data.message);
    });

    if (res) {
      // router.push("/0);
    }
  }

  return (
    <div className={cn("flex flex-col gap-6 ", className)} {...props}>
      <Card className="">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter login to your account and access <br /> dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <TextInput
                name="email"
                label="Email"
                form={form}
                placeholder={"Enter your email"}
              />
              <TextInput
                name="password"
                label="Password"
                form={form}
                placeholder={"Enter password"}
                type={"password"}
              />
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
