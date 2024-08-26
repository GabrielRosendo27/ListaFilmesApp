import styled, { keyframes } from "styled-components";

const fadeInOut = keyframes`
  0% { opacity: 0; transform: translateY(-20px); }
  10% { opacity: 1; transform: translateY(0); }
  90% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-20px); }
`;
export const MovieSearchContainerStyle = styled.div`
  position: fixed;
  z-index: 1000;
  padding: 16px;
  border-radius: 10px;
  text-align: center;
  animation: ${fadeInOut} 2s forwards;
  border: 2px solid rgba(58, 58, 92, 1);
  background: rgba(99, 150, 96, 0.7);
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
export const ImgSearch = styled.img`
  width: 120px;
  border-radius: 8px;
  margin-top: 10px;
`;

export const MovieTextMovieSearch = styled.h2`
  color: white;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 575px) {
    font-size: 12px;
  }
  @media (max-width: 368px) {
    font-size: 9px;
  }
`;
