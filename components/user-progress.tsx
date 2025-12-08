import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";

type Props = {
  activeCourse: { imageSrc: string; title: string }; // TODO: Replace with database format
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const UserProgress = ({ activeCourse, points, hearts, hasActiveSubscription }: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="/courses">
        <Button variant="ghost">
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className="rounded-md"
            width={32}
            height={32}
          />
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-orange-500">
          <Image src="/images/points.svg" height={28} width={28} alt="Pontos" className="mr-2" />
          {points}
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-rose-500">
          <Image src="/images/heart.svg" height={28} width={28} alt="Vidas" className="mr-2" />

          <span>
            {hasActiveSubscription ? <InfinityIcon className="w-6! h-6! stroke-[3]" /> : hearts}
          </span>
        </Button>
      </Link>
    </div>
  );
};
