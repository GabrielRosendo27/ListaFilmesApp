import styled from "styled-components";

// Container para os cards
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  margin: 50px auto 0 auto;
  background: linear-gradient(135deg, #2d3150, #1c1b34);
  /* Media query for screens smaller than 1024px */
  @media (max-width: 1600px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

// Card individual
const Card = styled.div`
  width: 31vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #3a3a5c;
  border-radius: 8px;
  padding: 1rem;
  color: #ffffff;
  @media (max-width: 1600px) {
    width: 45vw;
  }
  @media (max-width: 960px) {
    width: 90vw;
  }
`;

// Imagem do filme
const MovieImage = styled.img`
  width: 4vw;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.75);
  @media (max-width: 1600px) {
    width: 6vw;
  }
  @media (max-width: 1050px) {
    width: 8vw;
  }
  @media (max-width: 960px) {
    width: 10vw;
  }
  @media (max-width: 768px) {
    width: 10vw;
  }
`;

// Container para as informações do filme
const InfoContainer = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-left: 15px;
  justify-content: center;

  @media (max-width: 1600px) {
    width: 30vw;
  }
  @media (max-width: 960px) {
    width: 60vw;
  }
`;

// Título do filme
const Title = styled.h2`
  max-width: 220px;
  font-size: 0.875rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 1150px) {
    font-size: 0.825rem;
  }
  @media (max-width: 1050px) {
    max-width: 170px;
  }
  @media (max-width: 960px) {
    max-width: 500px;
    font-size: 0.9rem;
  }
`;

// Detalhes do filme
const Details = styled.p`
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  opacity: 0.7;
  @media (max-width: 1150px) {
    font-size: 0.775rem;
  }
  @media (max-width: 960px) {
    font-size: 0.9rem;
  }
`;

// Classificação do filme
const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  height: max-content;
  background-color: #4a4a6a;
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 1rem;
  & > :nth-child(2) {
    margin-left: 0.5rem;
  }
  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;

const Rating = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  & > :nth-child(1) {
    margin-right: 0.3rem;
  }
`;

const TrashDiv = styled.div`
  width: max-content;
  display: flex;
  align-items: end;
`;

export { Rating, RatingContainer, Details, Title, InfoContainer, MovieImage, Card, CardsContainer, TrashDiv };
