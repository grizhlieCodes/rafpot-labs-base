export const arrayFromNumber = (number: number): Array<number> => {
  return Array.from({ length: number }, (_, i) => i + 1);
};


import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export const generateUuid = () => crypto.randomUUID()
