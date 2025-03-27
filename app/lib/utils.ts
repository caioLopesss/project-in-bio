import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const TRIAL_DAYS = 3;
const PRICE = formatarParaReal(9.9);
const VITALICE = formatarParaReal(99.9);

function formatarParaReal(numero: number) {
  return numero.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export { TRIAL_DAYS, PRICE, VITALICE };
