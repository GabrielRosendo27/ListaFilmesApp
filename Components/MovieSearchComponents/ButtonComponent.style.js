import styled from "styled-components";

export const ButtonComponentStyle = styled.button`
  color: #090909;
  padding: 0.6em 1.5em;
  font-size: 16px;
  border-radius: 0.5em;
  background: #e8e8e8;
  cursor: pointer;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  &:hover {
    border: 1px solid black;
  }
  @media (max-width: 368px) {
    padding: 0.5em 1.4em;
    font-size: 14px;
  }
`;
