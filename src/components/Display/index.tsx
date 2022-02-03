import { ContantDisplay } from "./styles";

interface DisplayProps {
  number: string,
}

export function Display({ number }: DisplayProps) {

  let num = 40;

  const sizeFont = number.length < 13 ? num : num -= (number.length -11)*2;
  
  return (
    <ContantDisplay sizeFont={sizeFont}>
      {number}
    </ContantDisplay>
  );
}
