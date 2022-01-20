import { ContantDisplay } from "./styles";

interface DisplayProps{
  number?: string[],
}

export function Display({number} : DisplayProps) {

  return (
    <ContantDisplay>
      {number}
    </ContantDisplay>
  );
}
