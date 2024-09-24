import styled from "styled-components";

export const ButtonComponentStyle = styled.button`
  color: #fff;
  padding: 0.6em 1.5em;
  font-size: 16px;
  border-radius: 0.5em;
  background: #2a478e;
  border: 1px solid #2a478e;
  cursor: pointer;
  transition: all 0.3s;
  letter-spacing: 1px;
  &:hover {
    transform: scale(1.06, 1.06);
    background: #7c39d5;
    border: 1px solid #7c39d5;
  }
  @media (max-width: 368px) {
    padding: 0.5em 1.4em;
    font-size: 14px;
  }
`;
