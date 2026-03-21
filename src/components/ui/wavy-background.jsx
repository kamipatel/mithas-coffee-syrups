"use client";

import { useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

export function WavyBackground({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "slow",
  waveOpacity = 0.5,
}) {
  const canvasRef = useRef(null);
  const animationId = useRef(null);
  const ntRef = useRef(0);

  const waveColors = colors || [
    "rgba(196, 151, 59, 0.3)",   // gold
    "rgba(201, 168, 124, 0.25)", // rose gold
    "rgba(196, 114, 127, 0.2)",  // rose
    "rgba(237, 231, 219, 0.35)", // parchment
    "rgba(155, 115, 64, 0.2)",   // caramel
  ];

  const speedMap = { slow: 0.001, fast: 0.003 };
  const speedValue = speedMap[speed] || 0.001;

  const drawWave = useCallback(
    (ctx, w, h, n) => {
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth || 50;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (let x = 0; x < w; x += 5) {
          const y =
            Math.sin(x * 0.003 + i * 0.7 + ntRef.current) * 36 +
            Math.sin(x * 0.005 + i * 1.4 + ntRef.current * 0.8) * 18 +
            h * 0.5 +
            i * 18;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
        ctx.closePath();
      }
    },
    [waveColors, waveWidth]
  );

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;

    ntRef.current += speedValue;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = backgroundFill || "rgba(246, 241, 233, 1)";
    ctx.globalAlpha = waveOpacity;
    ctx.fillRect(0, 0, w, h);

    drawWave(ctx, w, h, 5);
    animationId.current = requestAnimationFrame(render);
  }, [drawWave, speedValue, backgroundFill, waveOpacity]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };

    resize();
    window.addEventListener("resize", resize);
    render();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationId.current) cancelAnimationFrame(animationId.current);
    };
  }, [blur, render]);

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden",
        containerClassName
      )}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ width: "100%", height: "100%" }}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
}
