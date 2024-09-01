import styled from "styled-components";

// Container para os cards
const CardsContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin: 0 auto;

  @media (max-width: 1600px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

// Card individual
const Card = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #3a3a5c;
  border-radius: 8px;
  padding: 0.5rem;
  color: #ffffff;
  position: relative;
  @media (max-width: 1600px) {
    width: 90vw;
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
    width: 12vw;
  }
  @media (max-width: 960px) {
    width: 10vw;
  }
  @media (max-width: 768px) {
    width: 11vw;
  }
  @media (max-width: 568px) {
    width: 15vw;
  }
`;

// Container para as informações do filme
const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  gap: 2.5rem;
  flex-wrap: nowrap;
  align-items: center;

  @media (max-width: 1600px) {
    width: 30vw;
  }
  @media (max-width: 960px) {
    width: 60vw;
  }
`;

// Título do filme
const Title = styled.h2`
  width: 30vw;
  font-size: 0.875rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 1150px) {
    font-size: 0.825rem;
  }
`;

// Detalhes do filme
const Details = styled.p`
  display: flex;
  align-items: center;
  font-size: 1rem;
  opacity: 0.7;
  @media (max-width: 1150px) {
    font-size: 0.9rem;
  }
  @media (max-width: 960px) {
    font-size: 0.8rem;
  }
  @media (max-width: 450px) {
    font-size: 0.7rem;
  }
  @media (max-width: 450px) {
    font-size: 0.655rem;
  }
`;

// Classificação do filme
const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #4a4a6a;
  border-radius: 6px;
  padding: 0.5rem;
  & > :nth-child(2) {
    margin-left: 0.5rem;
  }
  @media (max-width: 450px) {
    padding: 0.3rem;
    position: absolute;
    left: 60vw;
  }
  @media (max-width: 368px) {
    padding: 0.2rem;
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
  align-items: center;
`;

export { Rating, RatingContainer, Details, Title, InfoContainer, MovieImage, Card, CardsContainer1, TrashDiv };
