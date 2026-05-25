"use client";

import { useEffect, useRef, useCallback } from "react";

function GrainOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth * 0.5;
    canvas.height = window.innerHeight * 0.5;

    const imageData = ctx.createImageData(canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const value = Math.random() * 50;
      data[i] = value;
      data[i + 1] = value;
      data[i + 2] = value;
      data[i + 3] = 15;
    }

    ctx.putImageData(imageData, 0, 0);
  }, []);

  useEffect(() => {
    draw();
    const interval = setInterval(draw, 3000);
    const handleResize = () => {
      draw();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-40 mix-blend-overlay"
      style={{ imageRendering: "pixelated" }}
    />
  );
}

export { GrainOverlay };
