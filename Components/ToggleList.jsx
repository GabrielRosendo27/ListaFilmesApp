import React from "react";
import styled from "styled-components";

const ToggleListContainer = styled.div`
  width: max-content;
  border-radius: 8px;
  cursor: pointer;
  padding: 5px 5px 0 5px;
`;
const ToggleListSvg = styled.img`
  width: 22px;
  height: 22px;
`;

const ToggleList = () => {
  return (
    <ToggleListContainer>
      <ToggleListSvg src="togglelistsvg.svg"></ToggleListSvg>
    </ToggleListContainer>
  );
};

export default ToggleList;
