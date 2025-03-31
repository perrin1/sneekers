"use client";

import { Button } from "@/components/ui/button";
import {  MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Évite le problème de "hydration mismatch"
  useEffect(() => {
    setMounted(true);
  }, []);

  // Attendre que le composant soit monté avant d'afficher l'icône
  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <MoonStar size={20} />
        
      ) : (
        <SunMedium  size={20} />
      )}
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
};
