import { Button } from "./styles";

interface BtnProps {
  background?: string
  numberOrSymbol: string
}


export function Btn({ background, numberOrSymbol }: BtnProps) {
  return (
    <>
      <Button background={background}>{numberOrSymbol}</Button>
    </>
  );
}