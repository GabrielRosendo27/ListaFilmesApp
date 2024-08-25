import styled, { keyframes } from "styled-components";

const fadeInOut = keyframes`
  0% { opacity: 0; transform: translateY(-20px); }
  10% { opacity: 1; transform: translateY(0); }
  90% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-20px); }
`;
export const MovieSearchContainerStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  animation: ${fadeInOut} 3s forwards;
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
  width: 200px;
  border-radius: 8px;
  margin-top: 10px;
`;

export const MovieTextMovieSearch = styled.h2`
  color: white;
  margin-bottom: 10px;
`;
// export const MovieSearchContainerStyle = styled.div`
//   position: absolute;
//   top: 20%;
//   left: 50%;
//   z-index: 1;
// `;

// export const ImgSearch = styled.img`
//   width: 200px;
//   border-radius: 8px;
// `;
// export const MovieTextMovieSearch = styled.h2`
//   color: white;
// `;
