import { COLORS } from "@/lib/constants";

export default function Divider({ width = 80 }) {
  return (
    <div className="flex items-center justify-center gap-3.5 my-7">
      <div
        className="h-px"
        style={{
          width,
          background: `linear-gradient(to right, transparent, ${COLORS.gold}80)`,
        }}
      />
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="2" fill={COLORS.gold} />
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <circle
            key={a}
            cx={8 + 5.5 * Math.cos((a * Math.PI) / 180)}
            cy={8 + 5.5 * Math.sin((a * Math.PI) / 180)}
            r="1"
            fill={COLORS.gold}
            opacity="0.45"
          />
        ))}
      </svg>
      <div
        className="h-px"
        style={{
          width,
          background: `linear-gradient(to left, transparent, ${COLORS.gold}80)`,
        }}
      />
    </div>
  );
}
