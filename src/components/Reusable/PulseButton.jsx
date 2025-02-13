"use client";;
import React from "react";

import { cn } from "@/lib/utils";

export default function PulsatingButton({
  className,
  children,
  pulseColor = "#204FCD",
  duration = "1.5s",
  ...props
}) {
  return (
    (<button
      className={cn(
        "relative bg-blue-500 px-4 py-2 text-center text-white dark:bg-blue-500 dark:text-black inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16 bg-primary m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900",
        className
      )}
      style={
        {
          "--pulse-color": pulseColor,
          "--duration": duration
        }
      }
      {...props}>
      <div className="relative z-10">{children}</div>
      <div
        className="absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-inherit" />
    </button>)
  );
}