import styled from "styled-components";

export const InputContainerStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
export const InputComponentStyle = styled.input`
  width: 500px;
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
`;
