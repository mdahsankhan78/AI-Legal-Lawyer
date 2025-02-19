import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        "flex min-h-[60px] w-full border-b border-input bg-transparent px-3 py-2 text-white shadow-sm placeholder:text-white focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-md focus:border-b-primary",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
