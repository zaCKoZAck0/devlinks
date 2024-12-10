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

import { createAccount } from "~/actions/auth/create-account";
import { useAction } from "~/hooks/use-action";

import { toast } from "sonner";

const formSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Can't be empty" })
      .email({ message: "Invalid email" }),
    password: z.string().min(8, { message: "Too Short" }),
    confirmPassword: z.string().min(1, { message: "Can't be empty" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Didn't match",
    path: ["confirmPassword"],
  });

export default function CreateAccountPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { execute, fieldErrors } = useAction(createAccount, {
    onSuccess: (data) => {
      toast.success(`Welcome ${data.email}`);
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    await execute(values);
  }
  return (
    <AuthCard
      title="Create Account"
      description="Let’s get you started sharing your links!"
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
                    error={
                      form.formState.errors.email?.message ||
                      fieldErrors?.email![0]
                    }
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
                  Create Password
                </FormLabel>
                <FormControl>
                  <Input
                    error={
                      form.formState.errors.password?.message ||
                      fieldErrors?.password![0]
                    }
                    icon={PasswordIcon({ className: "size-4" })}
                    placeholder="At least 8 characters"
                    type="password"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-xs h-auto font-normal">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <Input
                    error={
                      form.formState.errors.confirmPassword?.message ||
                      fieldErrors?.confirmPassword![0]
                    }
                    icon={PasswordIcon({ className: "size-4" })}
                    placeholder="At least 8 characters"
                    type="password"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" size="lg" className="w-full">
            Create Account
          </Button>
          <p className="text-center">
            Already have an account?{" "}
            <a className="text-primary" href="/login">
              Login
            </a>
          </p>
        </form>
      </Form>
    </AuthCard>
  );
}
