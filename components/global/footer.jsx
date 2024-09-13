"use client";
import { TbCoffee } from "react-icons/tb";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";

const footerLinks = [
  {
    "title": "À propos",
    "links": [
      { "name": "À propos de nous", "href": "#" },
      { "name": "Notre équipe", "href": "#" },
      { "name": "Carrières", "href": "#" }
    ]
  },
  {
    "title": "Services",
    "links": [
      { "name": "Développement Web", "href": "#" },
      { "name": "Développement Mobile", "href": "#" },
      { "name": "Design", "href": "#" }
    ]
  },
  {
    "title": "Contact",
    "links": [
      { "name": "Nous contacter", "href": "#" },
      { "name": "Support", "href": "#" },
      { "name": "Ventes", "href": "#" }
    ]
  }

];

const Footer = () => {
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

  return (
    <section className="px-4 w-[calc(100%-250px)]">
      {/* Utilisation de grid avec ajustement de colonnes selon la largeur disponible */}
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 py-20 lg:grid-cols-5 md:grid-cols-3">
        <div className="sm:col-span-3 lg:col-span-2">
          <Label className="mb-2 text-lg font-bold">Shadcn Boilerplate</Label>
          <br />
          <Label className="max-w-sm text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Label>
        </div>
        {footerLinks.map((footerLink) => (
          <div key={footerLink.title}>
            <Label className="mb-4 text-lg font-bold">{footerLink.title}</Label>
            <ul className="space-y-2 text-sm">
              {footerLink.links.map((link) => (
                <li key={link.name}>
                  <Label>
                    <a href={link.href}>{link.name}</a>
                  </Label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto w-full py-2">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between">
          <Label>
            <span className="text-xs">
              &copy; {new Date().getFullYear()} talk²
            </span>
          </Label>
          <Label className="text-xs">
            Built with <TbCoffee className="inline-block" /> by{" "}
            <span className="animated-gradient">talk²</span>
          </Label>
        </div>
      </div>
    </section>
  );
};

export default Footer;
