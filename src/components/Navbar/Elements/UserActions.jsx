"use client"
import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { useEffect, useState } from "react";
const UserActions = () => {
  const [image,setImage] = useState(null)
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"))
    if (userData) {
      const userImage = userData?.picture;
      setImage(userImage)
    } else {
      setImage(null)
    }
  },[])
  return (
    <div className=" hidden md:flex items-center gap-5">
      <Tooltip>
        <TooltipTrigger>
          <div className="w-[78px] h-[36px] rounded-full bg-[var(--background)] flex items-center justify-center gap-2">
            <p className="text-[14px] text-[var(--foreground)]">Add</p>
            <Plus className="text-[var(--foreground)]" strokeWidth={1} />
          </div>
        </TooltipTrigger>
        <TooltipContent>Add</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--background)]">
            <Bell
              size={24}
              strokeWidth={1}
              className="text-[var(--foreground)]"
            />
          </div>
        </TooltipTrigger>
        <TooltipContent>notification</TooltipContent>
      </Tooltip>
      <Link href="/Profile">
        <Avatar className="cursor-pointer">
          <AvatarImage
            src={image}
            className="w-[32px] h-[32px] rounded-full"
          />
          <AvatarFallback className="bg-gray-700 text-[var(--foreground)]">
            CN
          </AvatarFallback>
        </Avatar>
      </Link>
    </div>
  );
};

export default UserActions;
