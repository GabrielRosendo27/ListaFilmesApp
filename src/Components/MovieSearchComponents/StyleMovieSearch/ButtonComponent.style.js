import styled from "styled-components";

export const ButtonComponentStyle = styled.button`
  color: #023047;
  padding: 0.6em 1.5em;
  font-size: 16px;
  border-radius: 0.5em;
  background: #fca311;
  border: 1px solid #fca311;
  cursor: pointer;
  transition: all 0.3s;
  letter-spacing: 1px;
  font-weight: 500;
  &:hover {
    transform: scale(1.05, 1.05);
    font-weight: 600;
  }
  @media (max-width: 368px) {
    padding: 0.5em 1.4em;
    font-size: 14px;
  }
`;
