"use client";

import React from "react";
import Link from "next/link";
import { Binoculars, Facebook, Linkedin, Instagram, House, BrickWall } from "lucide-react";

import clsx from "clsx";
import { buttonVariants } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className=" border-t  bordder-t-accent  text-white py-6">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <Link href="/">
              <span className="text-xl font-bold tracking-wide cursor-pointer">
              SneeKers
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex text-gray-900 dark:text-white space-x-6 text-sm">
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

          {/* Réseaux sociaux */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://facebook.com" target="_blank">
              <Facebook size={16} />
            </Link>

            <Link href="https://instagram.com" target="_blank">
              <Instagram size={16} />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Linkedin size={16} />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 mt-6">
          &copy; {new Date().getFullYear()} MonSite. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};
