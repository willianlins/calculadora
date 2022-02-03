import styled from "styled-components";

interface ContantDisplayProps{
  sizeFont: number;
}

export const ContantDisplay = styled.div<ContantDisplayProps>`
  width: 275px;
  height: 30px;
  text-align: right;
  font: ${props => props.sizeFont < 11 ?  '22px': '12px' }  'Ubuntu', 'Roboto';
  font-weight: 400;
  padding: 0 10px;
  color: #5C5C5C;
`;