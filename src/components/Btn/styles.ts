import styled from 'styled-components';

interface ButtonProps{
  background?: string
}


export const Button = styled.button<ButtonProps>`
  width: 70px;
  height: 45px;
  border: 0;
  background-color: ${props => props.background || "white"};
  font-weight: 700;
  font: 18px 'Roboto', sans-serif;
  transition: filter  ease-out 0.4s;

  &:hover{
    border: 1px solid #B2B2B2;
    filter: brightness(0.9);
    -webkit-box-shadow: 0px 0px 11px 6px rgba(204,204,204,0.4); 
    box-shadow: 0px 0px 11px 6px rgba(204,204,204,0.4);
  }

  svg{
    vertical-align: middle;
    width: 15px;
  }
`;