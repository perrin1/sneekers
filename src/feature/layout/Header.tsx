import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/src/theme/ThemeToggle";
import clsx from "clsx";
import { BellDot, Binoculars, BrickWall, House } from "lucide-react";
import Link from "next/link";
import React from "react";
import { LoginButton } from "./auth/LoginButton";
import { getAuthSession } from "@/lib/auth";
import { Profile } from "./auth/Profile";

export const Header = async () => {
  const session = await getAuthSession();

  return (
    <header className="border-b bordder-b-accent py-4 sticky top-0 z-50">
      <div className="container flex items-center justify-between  max-w-[80%] m-auto gap-1">
        <h1 className="text-2xl font-bold mr-4">SneeKers</h1>
        <div>
          <nav className="flex gap-4">
            <Link
              href="/"
              className={clsx(buttonVariants({ variant: "ghost" }), "flex-1")}
            >
              {" "}
              <House size={16} /> Acceuil
            </Link>
            <Link
              href="/"
              className={clsx(buttonVariants({ variant: "ghost" }), "flex-1")}
            >
              {" "}
              <Binoculars size={16} /> Voir Tout
            </Link>
            <Link
              href="/"
              className={clsx(buttonVariants({ variant: "ghost" }), "flex-1")}
            >
              {" "}
              <BrickWall size={16} /> A Propos
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <BellDot size={16} />

          {session?.user ? <Profile /> : <LoginButton />}

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
