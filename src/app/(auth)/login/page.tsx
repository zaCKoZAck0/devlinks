"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { AuthCard } from "~/components/auth/auth-card";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";

import { EmailIcon, PasswordIcon } from "~/components/icon/form";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Can't be empty" })
    .email({ message: "Invalid email" }),
  password: z.string().min(1, { message: "Can't be empty" }),
});

export default function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <AuthCard
      title="Login"
      description="Add your details below to get back into the app"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-xs h-auto font-normal">
                  Email address
                </FormLabel>
                <FormControl>
                  <Input
                    error={form.formState.errors.email?.message}
                    icon={EmailIcon({ className: "size-4" })}
                    placeholder="e.g. alex@email.com"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-xs h-auto font-normal">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    error={form.formState.errors.password?.message}
                    icon={PasswordIcon({ className: "size-4" })}
                    placeholder="Enter your password"
                    type="password"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" size="lg" className="w-full">
            Login
          </Button>
          <p className="text-center">
            Don’t have an account?{" "}
            <a className="text-primary" href="/create-account">
              Create account
            </a>
          </p>
        </form>
      </Form>
    </AuthCard>
  );
}
