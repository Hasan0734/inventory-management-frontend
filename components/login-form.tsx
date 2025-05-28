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
import { Form, FormMessage } from "./ui/form";
import TextInput from "./ui/text-input";
import axios from "axios";

import { useActionState } from "react";
import { singin } from "@/app/login/actions";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [state, fromAction, pending] = useActionState(singin, undefined);
  const form = useForm();

  //  function onSubmit(data: z.infer<typeof FormSchema>) {
  //   const res =  axios.post("/api/auth/login", data).catch((err) => {
  //     toast.error(err.response.data.message);
  //   });

  // }

  console.log(state?.errors);
  return (
    <Form {...form}>
      <form action={fromAction} className="space-y-4">
        <TextInput
          name="email"
          label="Email"
          form={form}
          placeholder={"Enter your email"}
          isMessage={true}
          customeMessage={state?.errors.email}
        />
        <TextInput
          name="password"
          label="Password"
          form={form}
          placeholder={"Enter password"}
          type={"password"}
          isMessage={true}
          customeMessage={state?.errors.password}
        />
        <Button type="submit" className="w-full mb-2">
          Login
        </Button>
        {state?.errors?.status === "fail" && (
          <FormMessage className="text-center">
            {state?.errors?.message}
          </FormMessage>
        )}
      </form>
    </Form>
  );
}
