"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/shadcn/button";
import { Input } from "../ui/shadcn/input";
import { ImShare } from "react-icons/im";
import { toast } from "@/hooks/use-toast";

const FormLinkShare = ({ shareUrl }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const shareLink = `${window.location.origin}/submit/${shareUrl}`;

  return (
    <div className="flex flex-grow gap-4 items-center">
      <Input value={shareLink} readOnly />
      <Button
        className="w-[250px]"
        onClick={() => {
          navigator.clipboard.writeText(shareLink);

          toast({ description: "متن کپی شد" });
        }}
      >
        <ImShare className="h-4 w-4" /> کپی
      </Button>
    </div>
  );
};

export default FormLinkShare;
