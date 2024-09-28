import styled from "styled-components";

// Container para os cards
const CardsContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin: 0 auto;
`;

// Card individual

const Cards = styled.div`
  max-width: 1300px;
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.$isRotated ? "column" : "row")};
  gap: 10px;
  background-color: #14213d;
  align-items: center;
  border-radius: 10px;
  padding: 0.5rem;
  color: #ffffff;
  margin: 0 auto;
  @media (max-width: 590px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Imagem do filme
const MovieImage = styled.img`
  width: 15vw;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.75);
  display: none;
  margin-right: 0.9rem;
`;

// Container para as informações do filme
const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  @media (max-width: 590px) {
    gap: 20px;
  }
`;
const InsideInfoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MovieYearMovieRuntimeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  flex-grow: 1;
  white-space: nowrap;
  @media (max-width: 750px) {
    gap: 20px;
  }
  @media (max-width: 590px) {
    gap: 10px;
  }
`;
const MovieTitleContainer = styled.div`
  width: 150px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-grow: 1;
  border-radius: 24px;
  padding: 5px;
  @media (max-width: 590px) {
    width: 280px;
    padding: 0;
    color: #fb8500;
  }
`;
const Tooltip = styled.div`
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
  background-color: orange;
  color: black;
  font-weight: bold;
  text-align: center;
  padding: 5px;
  border-radius: 4px;
  position: absolute;
  z-index: 1;
  bottom: 125%; /* Ajuste para posicionar acima do título */
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transition: opacity 0.3s;

  &::after {
    content: "";
    position: absolute;
    top: 100%; /* Setinha do tooltip apontando para o título */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: orange transparent transparent transparent;
  }
`;
const Title = styled.h2`
  font-size: 0.9rem;
  @media (max-width: 590px) {
    font-size: 1rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

// Detalhes do filme
const Details = styled.p`
  display: flex;
  font-size: 1rem;
  opacity: 0.7;
`;

// Classificação do filme
const RatingContainer = styled.div`
  width: ${(props) => (props.$isRotated ? "max-content" : "")};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: #060a16;
  border-radius: 6px;
  padding: 0.5rem;
  & > :nth-child(2) {
    margin-left: 0.5rem;
  }
`;

const Rating = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;

  & > :nth-child(1) {
    margin-right: 0.3rem;
  }
`;

const TrashDiv = styled.div`
  display: flex;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
`;

const TrashRatingDiv = styled.div`
  display: flex;
  gap: 10px;
`;

const DescriptionSpan = styled.span`
  position: absolute;
  top: -32px;
  left: -11px;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 12px;
  background: orange;
  color: #fff;
  border-top: 3px solid #161f3b;
  border-left: 4px solid #161f3b;
  border-right: 4px solid #161f3b;
  border-bottom: 3px solid #161f3b;
  border-radius: 24px;
  @media (max-width: 590px) {
    display: none;
  }
`;
const MovieDescDiv = styled.div`
  position: relative;
`;
const SinopseDiv = styled.div`
  animation: anim 1s;
  padding: 10px;
  letter-spacing: 1px;
  line-height: 1.8;
  @keyframes anim {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export {
  Rating,
  Cards,
  RatingContainer,
  Details,
  Title,
  InfoContainer,
  MovieImage,
  CardsContainer1,
  TrashDiv,
  TrashRatingDiv,
  MovieTitleContainer,
  Tooltip,
  InsideInfoContainer,
  MovieYearMovieRuntimeDiv,
  DescriptionSpan,
  MovieDescDiv,
  SinopseDiv,
};
