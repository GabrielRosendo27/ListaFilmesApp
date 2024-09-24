import React from "react";
import styled from "styled-components";

const ImgSvgStyle = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 8px;
`;

const ImgSvg = () => {
  return <ImgSvgStyle src="/movierecorder.svg"></ImgSvgStyle>;
};

export default ImgSvg;
