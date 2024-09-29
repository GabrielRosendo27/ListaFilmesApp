import styled from "styled-components";

export const InputContainerStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const InputComponentStyle = styled.input`
  width: 1000px;
  padding: 10px 0px 10px 40px;
  border-radius: 8px;
  border: solid 1px #333;
  transition: all 0.2s ease-in-out;
  outline: none;
  background: #b2b3b2;
  font-size: 16px;
  color: black;
  &:focus {
    background: #d6f6e7;
  }
  &::placeholder {
    color: black;
  }
  @media (max-width: 1200px) {
    width: 600px;
  }
  @media (max-width: 800px) {
    width: 400px;
  }
  @media (max-width: 600px) {
    width: 200px;
    &::placeholder {
      font-size: 13px;
    }
  }
`;
