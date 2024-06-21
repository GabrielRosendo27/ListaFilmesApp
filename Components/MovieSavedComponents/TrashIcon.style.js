import styled from "styled-components";

export const TrashButtonStyle = styled.button`
  background-color: transparent;
  position: relative;
  border: none;
  cursor: pointer;
  &:after {
    content: "delete";
    position: absolute;
    top: -130%;
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
    height: fit-content;
    background-color: rgb(168, 7, 7);
    padding: 4px 8px;
    border-radius: 5px;
    transition: 0.2s linear;
    transition-delay: 0.2s;
    color: white;
    text-transform: uppercase;
    font-size: 12px;
    opacity: 0;
    visibility: hidden;
  }
`;
export const TrashIconStyle = styled.svg`
  transform: scale(1.2);
  transition: 0.2s linear;
`;
