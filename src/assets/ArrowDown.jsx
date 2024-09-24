import React from "react";
import styled from "styled-components";

const ArrowDownContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(270deg);
`;
const ArrowDownSvg = styled.img``;

const ArrowDown = () => {
  return (
    <ArrowDownContainer>
      <ArrowDownSvg src="arrow-down.svg" alt="" width={"26px"} height={"26px"} />
    </ArrowDownContainer>
  );
};

export default ArrowDown;
