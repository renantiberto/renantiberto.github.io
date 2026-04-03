"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "@phosphor-icons/react";
import { useEffect, useState, startTransition } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setMounted(true);
    });
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Alternar tema"
      className="relative w-14 h-8 rounded-full transition-colors duration-300 bg-black dark:bg-white flex items-center"
    >
      <span className="absolute w-6 h-6 rounded-full transition-transform duration-300 bg-white dark:bg-black left-1 dark:translate-x-6 flex items-center justify-center">
        {isDark
          ? <Moon size={14} weight="fill" />
          : <Sun size={14} weight="fill" />
        }
      </span>
    </button>
  );
}