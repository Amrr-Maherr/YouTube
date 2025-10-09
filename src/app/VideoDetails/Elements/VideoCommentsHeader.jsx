"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function VideoCommentsHeader({ commentCount }) {
  return (
    <div className="flex items-center justify-start gap-3 mb-4">
      <h5 className="text-[20px] font-bold">Comments {commentCount}</h5>

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="newest">Newest first</SelectItem>
          <SelectItem value="oldest">Oldest first</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
