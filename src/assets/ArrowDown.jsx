import React from "react";
import styled from "styled-components";
export let arrowClick = () => {};

const ArrowDownContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.15s linear;
  transform: rotate(${(props) => (props.$isRotated ? "360deg" : "270deg")});
`;
const ArrowDownSvg = styled.img`
  transition: transform 0.15s linear;
`;

const ArrowDown = () => {
  const [isRotated, setIsRotated] = React.useState(false);

  arrowClick = () => {
    setIsRotated(!isRotated);
  };

  return (
    <ArrowDownContainer $isRotated={isRotated} onClick={arrowClick}>
      <ArrowDownSvg src="arrow-down.svg" alt="" width={"26px"} height={"26px"} />
      {/* {isRotated ? "" : ""} */}
    </ArrowDownContainer>
  );
};

export default ArrowDown;
