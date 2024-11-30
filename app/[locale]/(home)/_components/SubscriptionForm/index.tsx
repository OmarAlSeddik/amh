"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SubscriptionSchema } from "./schema";

export default function SubscriptionForm() {
  const [subscribed, setSubscribed] = useState(false);

  const t = useTranslations("Home");

  const form = useForm<z.infer<typeof SubscriptionSchema>>({
    resolver: zodResolver(SubscriptionSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof SubscriptionSchema>) {
    setSubscribed(true);
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-1">
        {!subscribed && (
          <div className="flex h-16 w-80 items-end">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("enterEmail")}</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="ahmad@example.com"
                      className="rounded-r-none border-primary text-black"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className="rounded-l-none">{t("subscribeButton")}</Button>
          </div>
        )}
        {subscribed && <span className="h-16 w-80 text-green-500">{t("thankYou")}</span>}
      </form>
    </Form>
  );
}
