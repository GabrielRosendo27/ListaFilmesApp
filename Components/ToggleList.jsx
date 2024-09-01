import React from "react";
import styled from "styled-components";

const ToggleListContainer = styled.div`
  width: max-content;
  border-radius: 8px;
  cursor: pointer;
  padding: 5px 5px 0 5px;
  transition: transform 0.2s linear;
  transform: rotate(${(props) => (props.$isRotated ? "90deg" : "0deg")});
`;
const ToggleListSvg = styled.img`
  width: 22px;
  height: 22px;
  &:hover {
    transform: scale(1.125);
    transition: transform 0.2s linear;
  }
`;
//

//
const ToggleList = ({ toggleContainer }) => {
  const [isRotated, setIsRotated] = React.useState(false);

  const toggleClick = () => {
    setIsRotated(!isRotated);
    toggleContainer();
  };

  return (
    <ToggleListContainer $isRotated={isRotated} onClick={toggleClick}>
      <ToggleListSvg src="togglelistsvg.svg"></ToggleListSvg>
    </ToggleListContainer>
  );
};

export default ToggleList;
