import { ContantDisplay } from "./styles";

interface DisplayProps{
  number: string,
}

export function DisplaySmall({number} : DisplayProps) {
 
  const sizeFont = number.length;

  console.log(number);
  return (
    <ContantDisplay sizeFont={sizeFont}>
      {number}
    </ContantDisplay>
  );
}