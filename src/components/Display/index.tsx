import { useEffect, useState } from "react";
import { ContantDisplay } from "./styles";

interface DisplayProps{
  number?: string,
}


export function Display({number} : DisplayProps) {

  const [numberDisplay, setnumberDisplay] = useState(['']);

  useEffect(()=>{
    addNumber(number || '');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[number]);

  function addNumber(number: string): void{

    if(number !== '='){
      numberDisplay[0] !== '' ? setnumberDisplay([...numberDisplay, number]) : setnumberDisplay([number]);
    }else{
      let numOne;
      let numTwo;

      numOne = numberDisplay.slice(0 ,numberDisplay.findIndex((arr) => arr === '+' ));
      console.log('-----------------')
      console.log(numOne)
    }
  }



  console.log(numberDisplay)
  return (
    <ContantDisplay>
      {numberDisplay}
    </ContantDisplay>
  );
}
