import React from "react";
import styled from "styled-components";
const ClockSvgStyle = styled.svg`
  fill: #dddddd;
  margin-right: 5px;
`;
const ClockSvg = ({ isClockSvgVisible }) => {
  if (!isClockSvgVisible) return null;
  return (
    <ClockSvgStyle xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 12v-6h-2v8h7v-2h-5z" />
    </ClockSvgStyle>
  );
};

export default ClockSvg;
