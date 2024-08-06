"use client";

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

const SubmitButton = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled className={cn("flex w-full gap-2", className)}>
          <Loader2 className="size-4 animate-spin" />
          <span>Pending...</span>
        </Button>
      ) : (
        <Button className={cn("flex w-full gap-2", className)}>
          {children}
        </Button>
      )}
    </>
  );
};

export default SubmitButton;
