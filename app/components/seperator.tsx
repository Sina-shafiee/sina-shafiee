"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

function Separator({
  orientation = "horizontal",
  decorative = true,
  className,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className="bg-gray-100 shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px w-px h-full"
      {...props}
    />
  );
}

export { Separator };
