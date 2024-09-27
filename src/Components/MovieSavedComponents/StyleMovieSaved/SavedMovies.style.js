import styled from "styled-components";

// Container para os cards
const CardsContainer1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  margin: 0 auto;
  position: relative;
  @media (max-width: 1600px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;
const Card = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #14213d;
  border-radius: 8px;
  padding: 1rem;
  color: #e5e5e5;
  margin: 0 auto;
  @media (max-width: 576px) {
    max-width: 300px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

// Imagem do filme
const MovieImage = styled.img`
  width: 100px;
  height: 100%;
  border-radius: 6px;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.75);
  @media (max-width: 576px) {
    width: 200px;
  }
`;

// Container para as informações do filme
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-left: 12px;
  letter-spacing: 1px;
`;

// Título do filme
const TitleContainer = styled.div`
  width: 200px;
  position: relative;
  display: inline-block;
  cursor: pointer;
  @media (max-width: 1050px) {
    width: 150px;
  }
  @media (max-width: 576px) {
    width: 250px;
  }
`;
const Title = styled.h2`
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  color: #fca311;
  cursor: pointer;
  @media (max-width: 576px) {
    font-size: 18px;
  }
`;
const Tooltip = styled.div`
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
  background-color: orange;
  color: #000000;
  text-align: center;
  padding: 5px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  position: absolute;
  z-index: 1;
  bottom: 125%; /* Ajuste para posicionar acima do título */
  left: 20%;
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
    border-color: #fca311 transparent transparent transparent;
  }
`;
// Detalhes do filme
const Details = styled.p`
  display: flex;
  align-items: center;
  font-size: 1rem;
  opacity: 0.7;
`;

// Classificação do filme
const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  height: max-content;
  background-color: #fca311;
  border-radius: 6px;
  padding: 0.5rem;
  color: #14213d;
  font-weight: 600;
  & > :nth-child(2) {
    margin-left: 0.2rem;
  }
  @media (max-width: 576px) {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

const Rating = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  & > :nth-child(1) {
    margin-right: 0.3rem;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  @media (max-width: 368px) {
    font-size: 0.6rem;
  }
`;

const TrashDiv = styled.div`
  width: max-content;
  display: flex;
  align-items: end;
  @media (max-width: 576px) {
    align-self: end;
  }
`;

export { Rating, RatingContainer, Details, Title, InfoContainer, MovieImage, Card, CardsContainer1, TrashDiv, Tooltip, TitleContainer };
