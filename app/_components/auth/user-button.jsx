"use client";

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/app/_components/ui/shadcn/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/_components/ui/shadcn/dropdown-menu";
import { useCurrentUser } from "@/hooks/use-current-user";
import { User } from "lucide-react";
import { LogoutButton } from "./logout-button";
import { ExitIcon } from "@radix-ui/react-icons";

const UserButton = () => {
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || undefined} />
          <AvatarFallback className="bg-gradient-to-r from-indigo-400 to-cyan-400">
            <User className="text-white" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start">
        <LogoutButton>
          <DropdownMenuItem>
            <LogoutButton>
              <div className="flex items-center">
                <ExitIcon className="h-4 w-4 mr-2" /> خروج
              </div>
            </LogoutButton>
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
