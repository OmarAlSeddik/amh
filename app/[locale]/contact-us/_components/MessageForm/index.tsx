"use client";
import SubmitButton from "@/components/custom/SubmitButton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import MessageFormImage from "@/public/contact/message-form.webp";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormSchema } from "./form-schema";

const MessageForm = () => {
  const t = useTranslations("Contact");
  const [response, setResponse] = useState("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    await startTransition(async () => {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: values.phone,
          message: values.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setResponse(t("emailSent"));
      }

      form.reset();
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex justify-center bg-[#191919] text-white"
      >
        <div className="flex flex-1 justify-center py-24">
          <div className="flex max-w-[40rem] flex-col gap-4">
            <h1 className="h1">{t("getInTouch")}</h1>
            <Separator className="h-px bg-white" />
            <p>{t("yourQuestionsAnswered")}</p>
            <div className="flex">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="flex flex-1 flex-col gap-2">
                    <FormLabel>{t("firstName")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("firstNamePlaceholder")}
                        className="bg-transparent"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="flex flex-1 flex-col gap-2">
                    <FormLabel>{t("lastName")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("lastNamePlaceholder")}
                        className="bg-transparent"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-1 flex-col gap-2">
                    <FormLabel>{t("emailAddress")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("emailPlaceholder")}
                        className="bg-transparent"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="flex flex-1 flex-col gap-2">
                    <FormLabel>{t("phoneNumber2")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("phonePlaceholder")}
                        className="bg-transparent"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="flex flex-1 flex-col gap-2">
                  <FormLabel>{t("leaveUsAMessage")}</FormLabel>
                  <FormControl>
                    <Textarea
                      className="bg-transparent"
                      id="message"
                      placeholder={t("messagePlaceholder")}
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex flex-col gap-2">
              <SubmitButton isPending={isPending} className="w-32">
                {t("sendMessage")}
              </SubmitButton>
              <small className={response ? "text-green-500" : "hidden"}>
                {t("messageReceived")}
              </small>
            </div>
          </div>
        </div>
        <Image
          src={MessageFormImage}
          alt="Message Form"
          className="hidden w-1/2 flex-1 object-cover lg:block"
        />
      </form>
    </Form>
  );
};

export default MessageForm;
