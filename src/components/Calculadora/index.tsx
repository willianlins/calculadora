import { DisplaySmall } from "../../components/DisplaySmall";
import { Display } from "../../components/Display";
import { Btn as Button } from "../../components/Btn";

import { Container, Keyboard, Displays } from "./styles";


import { RiDeleteBack2Line } from "react-icons/ri";

export function Calculadora() {
  return (
    <Container>
      <Displays>
        <DisplaySmall number="1"/>
        <Display number="="/>
      </Displays>
      <Keyboard>
        <div>
          <Button numberOrSymbol="%" background="#F1F1F1" />
          <Button numberOrSymbol="CE" background="#F1F1F1" />
          <Button numberOrSymbol="C" background="#F1F1F1" />
          <Button numberOrSymbol="¹/x" background="#F1F1F1" />
          <Button numberOrSymbol="x²" background="#F1F1F1" />
          <Button numberOrSymbol="x" background="#F1F1F1" />
          <Button numberOrSymbol="7" />
          <Button numberOrSymbol="8" />
          <Button numberOrSymbol="9" />
          <Button numberOrSymbol="4" />
          <Button numberOrSymbol="5" />
          <Button numberOrSymbol="6" />
          <Button numberOrSymbol="1" />
          <Button numberOrSymbol="2" />
          <Button numberOrSymbol="3" />
          <Button numberOrSymbol="+/-" />
          <Button numberOrSymbol="0" />
          <Button numberOrSymbol="," />
        </div>
        <div>
          <Button background="#F1F1F1" >
            <RiDeleteBack2Line />
          </Button>
          <Button numberOrSymbol="&divide;" background="#F1F1F1" />
          <Button numberOrSymbol="&times;" background="#F1F1F1" />
          <Button numberOrSymbol="&ndash;" background="#F1F1F1" />
          <Button numberOrSymbol="+" background="#F1F1F1" />
          <Button numberOrSymbol="=" background="#8ABAE0" />
        </div>
      </Keyboard>
    </Container>
  );
}