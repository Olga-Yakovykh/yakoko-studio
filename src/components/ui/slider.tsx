import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center py-2",
      className
    )}
    {...props}
  >
    {/* Track */}
    <SliderPrimitive.Track className="relative h-3 w-full grow overflow-hidden rounded-full bg-secondary shadow-inner">
      
      {/* Active range */}
      <SliderPrimitive.Range className="absolute h-full bg-primary shadow-[0_0_12px_rgba(255,80,50,0.4)]" />
    
    </SliderPrimitive.Track>

    {/* Thumb */}
    <SliderPrimitive.Thumb
      className="
        block h-6 w-6 rounded-full 
        bg-white 
        border-2 border-primary 
        shadow-lg
        transition-all duration-200
        hover:scale-110
        focus-visible:outline-none 
        focus-visible:ring-4 
        focus-visible:ring-primary/30
      "
    />
  </SliderPrimitive.Root>
));

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };