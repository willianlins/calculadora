import { ReactNode } from "react";
import { Button } from "./styles";

interface BtnProps {
  background?: string
  numberOrSymbol?: string
  children?: ReactNode;
}


export function Btn({ background, numberOrSymbol, children }: BtnProps) {
  return (
    <>
      <Button background={background}>{ numberOrSymbol || children}</Button>
    </>
  )
}