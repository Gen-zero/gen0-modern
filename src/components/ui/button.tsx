
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        custom: "uppercase font-medium bg-[#1f1f3f]/50 text-white backdrop-blur-sm border border-[#8c35f2]/40 hover:border-[#8c35f2] hover:text-[#e5deff] transition-all duration-500 relative overflow-hidden hover:shadow-[0_0_25px_rgba(140,53,242,0.6)] before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#8c35f2]/0 before:via-[#8c35f2]/30 before:to-[#8c35f2]/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000 before:ease-in-out after:content-[''] after:absolute after:inset-0 after:scale-[1.05] after:rounded-md after:opacity-0 after:border after:border-[#8c35f2] hover:after:scale-100 hover:after:opacity-100 after:transition-all after:duration-500",
        wave: "font-mono uppercase tracking-widest text-[#e0e0ff] relative overflow-hidden backdrop-filter backdrop-blur-xl bg-[rgba(30,30,60,0.4)] border border-[rgba(100,200,255,0.2)] rounded-[2rem] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(100,200,255,0.6)] hover:border-[rgba(100,200,255,0.8)] focus:animate-pulse-focus active:after:animate-ripple after:content-[''] after:absolute after:inset-0 after:rounded-[2rem] after:pointer-events-none wave-btn will-change-transform",
        holo: "relative font-['Exo_2',_sans-serif] uppercase tracking-widest text-[#eaeaff] bg-[rgba(20,10,40,0.8)] border-0 rounded-lg overflow-hidden transition-all duration-200 shadow-[inset_0_0_10px_rgba(255,255,255,0.1),_0_0_20px_rgba(100,100,255,0.2)] hover:transform hover:scale-[1.03] hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.2),_0_0_30px_rgba(100,100,255,0.4)] before:content-[''] before:absolute before:inset-[-2px] before:z-[-1] before:bg-gradient-to-r before:from-violet-500 before:via-cyan-500 before:to-fuchsia-500 before:bg-[length:400%_400%] before:animate-[neonShift_4s_linear_infinite] before:rounded-lg after:content-[''] after:absolute after:inset-0 after:bg-[url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"60\" height=\"60\"><path d=\"M0 0 L60 0 L60 60\" stroke=\"rgba(255,255,255,0.05)\" stroke-width=\"1\"/></svg>')] after:opacity-0 after:animate-[gridFade_6s_ease-in-out_infinite] after:pointer-events-none active:after:animate-[gridSweep_0.5s_ease_forwards] will-change-transform",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
