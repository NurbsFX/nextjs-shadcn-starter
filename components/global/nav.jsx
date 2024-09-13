"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PenTool, BookOpenText, AudioLines, MicVocal, House, Settings, LogOut, StickyNote } from 'lucide-react';

// Menu items pour la sidebar
const menuItems = [
  {
    title: "Reading",
    icon: <BookOpenText className="size-5" />,
    list: [
      { title: "Analytics", path: "/reading/analytics" },
      { title: "Training", path: "/reading/training" },
    ],
  },
  {
    title: "Listening",
    icon: <AudioLines className="size-5" />,
    list: [
      { title: "Analytics", path: "/listening/analytics" },
      { title: "Training", path: "/listening/training" },
    ],
  },
  {
    title: "Writing",
    icon: <PenTool className="size-5" />,
    list: [
      { title: "Analytics", path: "/writing/analytics" },
      { title: "Training", path: "/writing/training" },
    ],
  },
  {
    title: "Speaking",
    icon: <MicVocal className="size-5" />,
    list: [
      { title: "Analytics", path: "/speaking/analytics" },
      { title: "Training", path: "/speaking/training" },
    ],
  },
  {
    title: "Exams Tests",
    icon: <StickyNote className="size-5" />,
    list: [
      { title: "Analytics", path: "/exams/analytics" },
      { title: "Training", path: "/exams/training" },
    ],
  },
];

export default function Sidebar() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // S'assurer que le composant est monté côté client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Retourner null tant que le composant n'est pas monté
  if (!mounted) {
    return null;
  }

  const logoSrc = resolvedTheme === "dark" ? "/images/kedge-logo-blanc.png" : "/images/kedge-logo-noir.png";

  return (
    <>
      {/* Sidebar */}
      <nav className="fixed z-20 h-full w-[250px] bg-background p-6 shadow-sm">
        <div className="flex flex-col items-start justify-between h-full">
          {/* Logo */}
          <Link href="/" className="mb-10 w-full">
            <Image src={logoSrc} width={100} height={50} className="h-auto w-auto rounded-md object-cover" alt="Kedge logo" />
          </Link>
          <div className="mb-4 flex items-center gap-3 text-gray-800 dark:text-gray-100">
            <div className="text-xl">
              <House className="size-5" />
            </div>
            <Label className="text-lg font-semibold">Home</Label>
          </div>
          {/* Navigation Links with Accordion */}
          <Accordion type="single" collapsible className="w-full">
            {menuItems.map((category) => (
              <AccordionItem key={category.title} value={category.title}>
                <AccordionTrigger className="flex items-center gap-2 text-gray-800 dark:text-gray-100 justify-left">
                  {category.icon && <div >{category.icon}</div>}
                  <Label className="text-lg font-semibold">{category.title}</Label>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="flex flex-col gap-3 pl-6">
                    {category.list.map((item) => (
                      <li key={item.title}>
                        <Link href={item.path} className="flex items-center gap-2 p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
                          <Label>{item.title}</Label>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-8 flex items-center gap-3 text-gray-800 dark:text-gray-100">
            <div className="text-xl">
              <Settings className="size-5" />
            </div>
            <Label className="text-lg font-semibold">Settings</Label>
          </div>

          <div className="mt-auto w-full mb-auto">
            <Button className="items-center gap-3">
              <LogOut className="size-4" />
              Log out
            </Button>
          </div>

          {/* Theme Toggle */}
          <div className="mt-auto w-full mb-auto">
            <ThemeToggle />
          </div>
        </div>
      </nav >
    </>
  );
}
