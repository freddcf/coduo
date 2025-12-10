import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="">
          <Image
            src="/images/javascript.svg"
            alt="Javascript"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Javascript
        </Button>
        <Button size="lg" variant="ghost" className="">
          <Image
            src="/images/java.svg"
            alt="Java"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Java
        </Button>
        <Button size="lg" variant="ghost" className="">
          <Image
            src="/images/golang.svg"
            alt="Golang"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Golang
        </Button>
        <Button size="lg" variant="ghost" className="">
          <Image
            src="/images/react.svg"
            alt="React"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          React
        </Button>
      </div>
    </footer>
  );
};
