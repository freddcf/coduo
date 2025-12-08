import Image from "next/image";

const Loading = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <Image
            src="/images/cadu/cadu-runsing.png"
            alt="Cadu pensando"
            width={120}
            height={120}
            className="animate-bounce"
          />
        </div>
        <p className="text-lg font-medium text-slate-700 animate-pulse">
          Preparando suas lições...
        </p>
      </div>
    </div>
  );
};

export default Loading;
