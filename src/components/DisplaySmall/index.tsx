import { ContantDisplay } from "./styles";

interface DisplayProps{
  number?: string[],
}

export function DisplaySmall({number} : DisplayProps) {
  
  return (
    <ContantDisplay>
      {number}
    </ContantDisplay>
  );
}