import styled from "styled-components";

interface ContantDisplayProps{
  sizeFont: number;
}


export const ContantDisplay = styled.div<ContantDisplayProps>`
  
  height: 52px;
  vertical-align: middle;
  font-family: 'Ubuntu', 'Roboto';
  font-size:  ${props => props.sizeFont}px;
  font-weight: 500;
  padding: 0 10px;
`;