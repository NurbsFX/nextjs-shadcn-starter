"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      size="icon"
      variant="outline"
    >
      {theme === "dark" ? (
        <RiSunLine className="text-lg" />
      ) : (
        <RiMoonClearLine className="text-lg" />
      )}
    </Button>
  );
}
