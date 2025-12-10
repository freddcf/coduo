import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebaritem";
import { ClerkLoaded, ClerkLoading, SignedIn, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-0">
          <Image src="/images/cadu/cadu-core.png" alt="Logo" height={40} width={40} />
          <h1 className="text-3xl font-bold text-indigo-600 tracking-wide">coduo</h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Aprender" iconSrc="/images/learn.svg" href="/learn" />
        <SidebarItem label="Ranking" iconSrc="/images/leaderboard.svg" href="/leaderboard" />
        <SidebarItem label="Missões" iconSrc="/images/quests.svg" href="/quests" />
        <SidebarItem label="Loja" iconSrc="/images/shop.svg" href="/shop" />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton
            appearance={{
              elements: {
                userButtonPopoverCard: "z-[1000] pointer-events-auto",
              },
            }}
          />
        </ClerkLoaded>
      </div>
    </div>
  );
};
