import { Button, buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";

export default function RainbowGlassButton({
  children,
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  return <Button variant="rainbow-outline">{children}</Button>;
}
