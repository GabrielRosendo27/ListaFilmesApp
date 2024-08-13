import React from "react";
import styled from "styled-components";

const ImgSvgCountryStyle = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

const ImgSvgCountry = () => {
  return <ImgSvgCountryStyle src="/countryflag.svg"></ImgSvgCountryStyle>;
};

export default ImgSvgCountry;
