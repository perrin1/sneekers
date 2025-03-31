"use client";

 
import {   signOut } from "next-auth/react";
import {   LogOut } from "lucide-react";
import React, { useTransition } from "react";
import { Loader } from "@/components/ui/Loader";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export const LogOutButton = () => {
  const [isPending, statTransition] = useTransition();

  return (
    <DropdownMenuItem
      onClick={() => {
        statTransition(() => signOut());
      }}
      
      className="flex items-center gap-2"
    >
        {isPending ? <Loader /> : <LogOut className="mr-2 h-4 w-4" /> } 
      
    </DropdownMenuItem>
  );
};
 

 