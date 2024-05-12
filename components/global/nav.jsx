import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav className="fixed z-20 h-[69px] w-full bg-background p-4">
        <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight">
            Shadcn Boilerplate
          </Link>
          <ThemeToggle />
        </div>
      </nav>
      <div className="relative h-[69px] w-full"></div>
    </>
  );
}
