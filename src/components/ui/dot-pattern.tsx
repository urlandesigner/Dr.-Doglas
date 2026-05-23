import { cn } from "@/lib/utils";

export function DotPattern({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute bg-[url('/images/pontos.svg')] bg-no-repeat bg-contain",
        className,
      )}
    />
  );
}
