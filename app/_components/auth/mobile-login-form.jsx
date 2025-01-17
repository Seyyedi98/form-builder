"use client";

import { otpLogin } from "@/actions/auth/otp-login";
import { Button } from "@/app/_components/ui/shadcn/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/shadcn/form";
import { Input } from "@/app/_components/ui/shadcn/input";
import { LoginSchema, OtpLoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { CardWrapper } from "../ui/cards/card-wrapper";
import { FormError } from "../ui/form/form-error";
import { FormSuccess } from "../ui/form/form-success";

export const MobileLoginForm = () => {
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPanding, startTransition] = useTransition();

  const form = useForm({
    resolver: zodResolver(OtpLoginSchema),
    defaultValues: {
      phoneNumber: "",
      password: "password",
      code: "",
    },
  });

  const onSubmit = (values) => {
    setError("");
    setSuccess("");
    startTransition(async () => {
      otpLogin(values).then((data) => {
        if (data?.error) {
          // form.reset();
          setError(data.error);
        }

        if (data?.success) {
          // form.reset();
          setSuccess(data.success);
        }

        if (data?.showOtpInput) {
          setShowOtpInput(true);
        }
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="خوش آمدید"
      backButtonLabel="حساب کاربری ندارید؟"
      backButtonHref="/auth/register"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            {/* Email field */}
            {!showOtpInput && (
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>شماره موبایل</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPanding}
                        placeholder="09123456789"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {/* OTP Confirmation page */}
            {showOtpInput && (
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>کد ارسال شده</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPanding}
                        placeholder="123456"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button disabled={isPanding} type="submit" className="w-full">
            {showOtpInput ? "ارسال" : "ورود"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
