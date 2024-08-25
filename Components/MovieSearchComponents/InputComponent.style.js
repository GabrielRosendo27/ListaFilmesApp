import styled from "styled-components";

export const InputContainerStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
export const InputComponentStyle = styled.input`
  width: 40vw;
  padding: 10px 0px 10px 40px;
  border-radius: 9999px;
  border: solid 1px #333;
  transition: all 0.2s ease-in-out;
  outline: none;
  opacity: 0.8;
  background: lightgray;
  font-size: 16px;
  color: black;
  &:focus {
    opacity: 1;
  }
  &::placeholder {
    color: black;
  }
  @media (max-width: 960px) {
    width: 70vw;
  }
  @media (max-width: 540px) {
    width: 65vw;
  }
  @media (max-width: 540px) {
    width: 58vw;
  }
  @media (max-width: 368px) {
    width: 55vw;
    &::placeholder {
      font-size: 12px;
    }
  }
`;
