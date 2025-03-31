"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { LogIn } from "lucide-react";
import React, { useTransition } from "react";
import { Loader } from "@/components/ui/Loader";

export const LoginButton = () => {
  const [isPending, statTransition] = useTransition();

  return (
    <Button
      onClick={() => {
        statTransition(() => signIn());
      }}
      variant="ghost"
      className="flex items-center gap-2"
    >
        {isPending ? <Loader /> : <LogIn className="mr-2 h-4 w-4" /> } 
      
    </Button>
  );
};
