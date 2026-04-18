import IconCloud from "./icon-cloud";
import React from "react";

const slugs: string[] = [
  "typescript",
  "javascript",
  "java",
  "react",
  "android",
  "vercel",
  "html5",
  "css3",
  "nodedotjs",
  "angular",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "testinglibrary",
  "redis",
  "jest",
  "kubernetes",
  "docker",
  "git",
  "jira",
  "supabase",
  "atlassian",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
  "canva",
  "notion",
  "slack",
  "clerk",
  "linux",
  "arduino",
  "googlecloud",
  "mongodb",
  "github",
  "redis",
  "tailwindcss",
  "ruby",
  "python",
  "photoshop",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;