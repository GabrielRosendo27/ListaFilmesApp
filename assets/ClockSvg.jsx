import React from "react";
import styled from "styled-components";
const ClockSvgStyle = styled.svg`
  width: 24px;
  height: 24px;
  fill: #dddddd;
  margin-right: 8px;
`;
const ClockSvg = () => {
  return (
    <ClockSvgStyle width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
      <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z" />
    </ClockSvgStyle>
  );
};

export default ClockSvg;
