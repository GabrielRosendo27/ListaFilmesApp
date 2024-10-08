import React from "react";
import { TrashButtonStyle, TrashIconStyle } from "./StyleMovieSaved/TrashIcon.style";
import TrashSvgPath from "../../assets/StyleAssets/TrashSvgPath";

const TrashIcon = ({ onClick }) => {
  return (
    <TrashButtonStyle className="btn" onClick={onClick}>
      <TrashIconStyle className="icon" viewBox="0 0 15 17.5" height="17.5" width="15" xmlns="http://www.w3.org/2000/svg" fill="#FCA311">
        <path transform="translate(-2.5 -1.25)" d={TrashSvgPath} id="Fill"></path>
      </TrashIconStyle>
    </TrashButtonStyle>
  );
};

export default TrashIcon;
