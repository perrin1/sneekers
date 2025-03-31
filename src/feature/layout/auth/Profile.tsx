import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { getAuthSession } from "@/lib/auth";
import { User2 } from "lucide-react";
import Link from "next/link";
import { LogOutButton } from "./LogOutButton";

export const Profile = async () => {
  const session = await getAuthSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2">
          {session?.user?.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-auto">
        <DropdownMenuItem  asChild>
        
          <Link href="/profile">          
            <User2 className="mr-2 h-4 w-4" /> profile
          </Link> 
        </DropdownMenuItem>

        <LogOutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
