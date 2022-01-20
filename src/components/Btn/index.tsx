import React, { ReactNode } from "react";
import { Button } from "./styles";

interface BtnProps{
  background?: string
  numberOrSymbol?: string
  children?: ReactNode;
  onClick?: ()=> void;
}


export function Btn({ background, numberOrSymbol, children, onClick}: BtnProps) {
  return (
      <Button background={background} onClick={onClick}>{numberOrSymbol || children}</Button>
  )
}