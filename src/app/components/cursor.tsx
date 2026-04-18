
"use client";
import { Children, type HTMLAttributes, type SVGProps } from "react";
import { cn } from "@/lib/utils";

export type CursorProps = HTMLAttributes<HTMLSpanElement>;

import { useEffect, useRef, useState } from "react";

export const Cursor = ({ className, ...props }: CursorProps) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    document.body.style.cursor = "none";
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)"
      }}
      className={cn("custom-cursor", className)}
      {...props}
    >
      <CursorPointer />
    </div>
  );
};

export type CursorPointerProps = SVGProps<SVGSVGElement>;

export const CursorPointer = ({ className, ...props }: CursorPointerProps) => (
  <svg
    aria-hidden="true"
    className={cn("size-3.5", className)}
    fill="none"
    focusable="false"
    height="20"
    viewBox="0 0 20 20"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.438 6.716 1.115.05A.832.832 0 0 0 .05 1.116L6.712 19.45a.834.834 0 0 0 1.557.025l3.198-8 7.995-3.2a.833.833 0 0 0 0-1.559h-.024Z"
      fill="#5CFF3B"
    />
  </svg>
);

export type CursorBodyProps = HTMLAttributes<HTMLSpanElement>;

export const CursorBody = ({
  children,
  className,
  ...props
}: CursorBodyProps) => (
  <span
    className={cn(
      "relative ml-3.5 flex flex-col whitespace-nowrap rounded-xl py-1 pr-3 pl-2.5 text-xs",
      Children.count(children) > 1 && "rounded-tl [&>:first-child]:opacity-70",
      "bg-secondary text-foreground",
      className
    )}
    {...props}
  >
    {children}
  </span>
);

export type CursorNameProps = HTMLAttributes<HTMLSpanElement>;

export const CursorName = (props: CursorNameProps) => <span {...props} />;

export type CursorMessageProps = HTMLAttributes<HTMLSpanElement>;

export const CursorMessage = (props: CursorMessageProps) => <span {...props} />;