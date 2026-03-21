import { cn } from "@/lib/utils";

export default function SectionTitle({ children, className }) {
  return (
    <h2
      className={cn(
        "font-serif text-[clamp(30px,5vw,46px)] text-espresso font-medium leading-[1.2] tracking-[-0.01em]",
        className
      )}
    >
      {children}
    </h2>
  );
}
