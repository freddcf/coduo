"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, CodeXml, Crown, FolderCode, Star, Trophy } from "lucide-react";
import Link from "next/link";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

type Props = {
  id: number;
  index: number;
  totalCount: number;
  locked?: boolean;
  current?: boolean;
  percentage: number;
};

export const LessonButton = ({ id, index, totalCount, locked, current, percentage }: Props) => {
  const HALF_CYCLE = 4;
  const maxIndentation = 2; // Desvio máximo (o pico da curva).
  const stepSize = 40; // Distância de deslocamento (mantido em 40).
  // 1. CALCULA O ÍNDICE DENTRO DO SEMI-CICLO (0, 1, 2, 3)

  const subCycleIndex = index % HALF_CYCLE; // 2. DETERMINA QUAL BLOCO DE MEIO CICLO estamos (0, 1, 2, 3...)
  const halfCycleBlock = Math.floor(index / HALF_CYCLE); // 3. LÓGICA DE INDENTAÇÃO ABSOLUTA (0, 1, 2, 1)
  // A fórmula gera o valor absoluto do deslocamento em relação ao centro.
  const absoluteIndentation = maxIndentation - Math.abs(maxIndentation - subCycleIndex); // 4. DETERMINAÇÃO DO SINAL (+/-)
  // Alterna o sinal a cada bloco (0, 2, 4... é +1; 1, 3, 5... é -1)
  const signFactor = halfCycleBlock % 2 === 0 ? 1 : -1; // 5. APLICAÇÃO DA POSIÇÃO CALCULADA
  // Multiplica a indentação absoluta pelo fator de sinal.
  const finalIndentation = absoluteIndentation * signFactor; // 6. VERIFICAÇÃO CRÍTICA DO FECHAMENTO CENTRAL

  const isLastLesson = index === totalCount - 1; // Calcula a posição de curva

  const calculatedPosition = finalIndentation * stepSize; // Aplica o override de fechamento central

  const rightPosition = isLastLesson ? 0 : calculatedPosition;
  console.log(rightPosition);

  const isFirst = index === 0;
  const isLast = index === totalCount;
  const isCompleted = !current && !locked;

  const Icon = isCompleted ? Check : isLast ? CodeXml : Star;

  const href = isCompleted ? `/lesson/${id}` : "/lesson";

  return (
    <Link href={href} aria-disabled={locked} style={{ pointerEvents: locked ? "none" : "auto" }}>
      <div
        className="relative"
        style={{
          right: `${rightPosition}px`,
          marginTop: isFirst && !isCompleted ? 60 : 14,
        }}
      >
        {current ? (
          <div className="h-[102px] w-[102px] relative">
            <div className="absolute -top-6 px-3 py-2.5 border-2 font-bold uppercase text-indigo-500 bg-white rounded-xl animate-bounce tracking-wide z-10">
              Começar
              <div className="absolute left-1/2 -bottom-2 w-0 h-0 border-x-8 border-x-transparent border-t-8 transform -translate-x-1/2" />
            </div>
            <CircularProgressbarWithChildren
              value={Number.isNaN(percentage) ? 0 : percentage}
              styles={{
                path: {
                  stroke: "#615FFF",
                },
                trail: {
                  stroke: "#e5e7eb",
                },
              }}
            >
              <Button
                size="rounded"
                variant={locked ? "locked" : "secondary"}
                className="h-[70px] w-[70px] border-b-8"
              >
                <Icon
                  className={cn(
                    "h-10! w-10!",
                    locked
                      ? "fill-neutral-400 text-neutral-400 stroke-neutral-400"
                      : "fill-primary-foreground text-primary-foreground",
                    isCompleted && "fill-none stroke-4"
                  )}
                />
              </Button>
            </CircularProgressbarWithChildren>
          </div>
        ) : (
          <Button
            size="rounded"
            variant={locked ? "locked" : "secondary"}
            className="h-[70px] w-[70px] border-b-8"
          >
            <Icon
              className={cn(
                "h-7! w-7!",
                locked
                  ? "fill-neutral-400 text-neutral-400 stroke-neutral-400"
                  : "fill-primary-foreground text-primary-foreground",
                isCompleted && "fill-none stroke-4"
              )}
            />
          </Button>
        )}
      </div>
    </Link>
  );
};
