"use client";
import React, { useEffect, useMemo, useState, ReactElement } from "react";
import { useTheme } from "next-themes";
import { Cloud, fetchSimpleIcons, renderSimpleIcon, SimpleIcon } from "react-icon-cloud";

interface CloudProps {
  containerProps: {
    style: React.CSSProperties;
  };
  options: {
    reverse: boolean;
    depth: number;
    wheelZoom: boolean;
    imageScale: number;
    activeCursor: string;
    tooltip: string;
    initial: [number, number];
    clickToFront: number;
    tooltipDelay: number;
    outlineColour: string;
    maxSpeed: number;
    minSpeed: number;
  };
}

export const cloudProps: CloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "none",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export const renderCustomIcon = (
  icon: SimpleIcon,
  theme: "light" | "dark" | undefined,
  imageArray?: string[]
): ReactElement =>
  renderSimpleIcon({
    icon,
    bgHex: theme === "light" ? "#f3f2ef" : "#080510",
    fallbackHex: theme === "light" ? "#6e6e73" : "#ffffff",
    minContrastRatio: theme === "dark" ? 2 : 1.2,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault(),
    },
  });

interface IconCloudProps {
  iconSlugs?: string[];
  imageArray?: string[];
}

export default function IconCloud({
  iconSlugs = [],
}: IconCloudProps): ReactElement | null {
  const [data, setData] = useState<{ simpleIcons: Record<string, SimpleIcon> } | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (iconSlugs.length > 0) {
      fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
    }
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, (theme as "light" | "dark" | undefined) || "dark")
    );
  }, [data, theme]);

  return (
  // @ts-expect-error: react-icon-cloud types are incomplete for Cloud props
    <Cloud {...cloudProps}>
      <>
        <>{renderedIcons}</>
      </>
    </Cloud>
  );
}