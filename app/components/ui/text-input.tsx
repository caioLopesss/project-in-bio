import { cn } from "@/app/lib/utils";
import React from "react";

export default function TextInput(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <input
      {...props}
      className={cn(
        `w-full p-3 bg-secondary text-white placeholder:text-content-placeholder rounded-xl
    border border-transparent hover:border-secondary hover:text-body active:border-tertiary`,
        props.className
      )}
    />
  );
}
