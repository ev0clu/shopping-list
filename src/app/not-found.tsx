"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const NotFound = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen flex justify-center items-center bg-background">
      <div className="w-full space-y-6">
        <div className="flex flex-row items-center justify-center font-sans h-10">
          <h1 className="mr-5 block pr-6 align-top text-2xl font-medium leading-[49px]">
            404
          </h1>
          <Separator orientation="vertical" className="bg-foreground" />
          <div className="ml-5 block">
            <h2 className="m-0 text-sm font-normal leading-[49px]">
              This page could not be found
            </h2>
          </div>
        </div>
        <div className="w-full text-center">
          <Link
            rel="preconnect"
            href={"/"}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "relative rounded-full px-5 py-3"
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Got back to home
            <div
              className={cn("absolute right-1 top-1", {
                "text-emerald-500": isHovered,
              })}
            >
              <ArrowUpRight strokeWidth={1.5} className="h-4 w-4" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
