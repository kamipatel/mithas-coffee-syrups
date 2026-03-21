import { cn } from "@/lib/utils";

export function Meteors({ number = 3, className }) {
  const meteors = new Array(number).fill(true);

  return (
    <>
      {meteors.map((_, idx) => (
        <span
          key={idx}
          className={cn(
            "animate-meteor absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-full shadow-[0_0_0_1px_#C4973B10]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%]",
            "before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-gold before:to-transparent",
            className
          )}
          style={{
            top: 0,
            left: `${Math.floor(Math.random() * 80 + 10)}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.floor(Math.random() * 4 + 4)}s`,
          }}
        />
      ))}
    </>
  );
}
