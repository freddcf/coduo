"use client";

import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useExitModal } from "@/store/use-exit-modal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export const ExitModal = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  const { isOpen, close } = useExitModal();

  useEffect(() => setIsClient(true), []);

  if (!isClient) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center w-full b-5">
            <Image src="/images/cadu/cadu-sad.png" alt="Cadu triste" height={180} width={180} />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">Espera, não vá!</DialogTitle>
          <DialogDescription className="text-center text-base">
            Você está prestes a sair da lição. Tem certeza?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
            <Button variant="primary" className="w-full" size="lg" onClick={close}>
              Continuar aprendendo
            </Button>
            <Button
              variant="dangerOutline"
              className="w-full"
              size="lg"
              onClick={() => {
                close();
                router.push("/learn");
              }}
            >
              Sair da lição
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
