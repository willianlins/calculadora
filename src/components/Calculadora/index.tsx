import { DisplaySmall } from "../../components/DisplaySmall";
import { Display } from "../../components/Display";
import { Btn as Button } from "../../components/Btn";

import { Container, Keyboard, Displays } from "./styles";

import { useEffect, useState } from "react";

import { RiDeleteBack2Line } from "react-icons/ri";


export function Calculadora() {

  const [numberDisplay, setnumberDisplay] = useState(['0']);
  const [numberDisplaySmall, setnumberDisplaySmall] = useState(['']);

  
  function addNumber(number: string): void {
    switch (number) {
      case '+':
        break;
      case '-':
        break;
      case '*':
        break;
      case '/':
        break;
      case '%':
        break;
      case '-':
        break;
      case '-':
        break;
      case '-':
        break;
      case '-':
        break;
      case '-':
        break;
      case '-':
        break;
      case '-':
        break;
      case 'C':
        setnumberDisplay(['0']);
        break;
      case 'CE':
        setnumberDisplay(['0']);
        setnumberDisplaySmall(['']);
        break;
      default:
        if(numberDisplay[0] !== '0' || (numberDisplay[0] === '0' || number === '0')){
          setnumberDisplay([...numberDisplay, number])
        }else{
          setnumberDisplay([number])
        }
    }



    // if (number !== '=') {
    //   numberDisplay[0] !== '' ? setnumberDisplay([...numberDisplay, number]) : setnumberDisplay([number]);
    // } else {
    //   let numOne;
    //   let numTwo;

    //   numOne = numberDisplay.slice(0, numberDisplay.findIndex((arr) => arr === '+'));
    //   console.log('-----------------')
    //   console.log(numOne)
    // }
  }


  return (
    <Container>
      <Displays>
        <DisplaySmall number={numberDisplaySmall} />
        <Display number={numberDisplay} />
      </Displays>
      <Keyboard>
        <div>
          <Button numberOrSymbol="%" background="#F1F1F1" onClick={() => addNumber('%')} />
          <Button numberOrSymbol="CE" background="#F1F1F1" onClick={() => addNumber('CE')} />
          <Button numberOrSymbol="C" background="#F1F1F1" onClick={() => addNumber('C')} />
          <Button numberOrSymbol="¹/x" background="#F1F1F1" onClick={() => addNumber('0')} />
          <Button numberOrSymbol="x²" background="#F1F1F1" onClick={() => addNumber('0')} />
          <Button numberOrSymbol="x" background="#F1F1F1" onClick={() => addNumber('**')} />
          <Button numberOrSymbol="7" onClick={() => addNumber('7')} />
          <Button numberOrSymbol="8" onClick={() => addNumber('8')} />
          <Button numberOrSymbol="9" onClick={() => addNumber('9')} />
          <Button numberOrSymbol="4" onClick={() => addNumber('4')} />
          <Button numberOrSymbol="5" onClick={() => addNumber('5')} />
          <Button numberOrSymbol="6" onClick={() => addNumber('6')} />
          <Button numberOrSymbol="1" onClick={() => addNumber('1')} />
          <Button numberOrSymbol="2" onClick={() => addNumber('2')} />
          <Button numberOrSymbol="3" onClick={() => addNumber('3')} />
          <Button numberOrSymbol="+/-" onClick={() => addNumber('0')} />
          <Button numberOrSymbol="0" onClick={() => addNumber('0')} />
          <Button numberOrSymbol="," onClick={() => addNumber('.')} />
        </div>
        <div>
          <Button background="#F1F1F1" >
            <RiDeleteBack2Line />
          </Button>
          <Button numberOrSymbol="&divide;" background="#F1F1F1" onClick={() => addNumber('/')} />
          <Button numberOrSymbol="&times;" background="#F1F1F1" onClick={() => addNumber('*')} />
          <Button numberOrSymbol="&ndash;" background="#F1F1F1" onClick={() => addNumber('-')} />
          <Button numberOrSymbol="+" background="#F1F1F1" onClick={() => addNumber('+')} />
          <Button numberOrSymbol="=" background="#8ABAE0" onClick={() => addNumber('=')} />
        </div>
      </Keyboard>
    </Container>
  );
}