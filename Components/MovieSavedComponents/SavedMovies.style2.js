import styled from "styled-components";

// Container para os cards
const CardsContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
`;

// Card individual
const Card = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: row;
  background-color: #3a3a5c;
  border-radius: 8px;
  padding: 0.5rem;
  color: #ffffff;
  margin: 0 auto;
  @media (max-width: 1000px) {
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
    gap: 2.2rem;
  }
  @media (max-width: 960px) {
    width: 60vw;
    gap: 2rem;
  }
  @media (max-width: 640px) {
    gap: 1.5rem;
  }
  @media (max-width: 590px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
`;

// Título do filme
const Title = styled.h2`
  width: 30vw;
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 0.4rem;
  @media (max-width: 1150px) {
    font-size: 0.8rem;
  }
  @media (max-width: 590px) {
    margin-left: 0;
    width: 55vw;
    text-align: center;
  }
  @media (max-width: 505px) {
    width: 60vw;
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
  @media (max-width: 590px) {
    font-size: 0.8rem;
    margin-left: 0.4rem;
  }
`;

// Classificação do filme
const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4a4a6a;
  border-radius: 6px;
  padding: 0.5rem;
  & > :nth-child(2) {
    margin-left: 0.5rem;
  }
  @media (max-width: 730px) {
    padding: 0.4rem;
    gap: 1rem;
  }
  @media (max-width: 590px) {
    padding: 0.4rem;
    gap: 0.9rem;
    margin-left: 0.4rem;
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
  @media (max-width: 730px) {
    font-size: 0.8rem;
    & > :nth-child(1) {
      width: 14px;
    }
  }
  @media (max-width: 590px) {
    font-size: 0.8rem;
    & > :nth-child(1) {
      width: 14px;
    }
  }
`;

const TrashDiv = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
  @media (max-width: 590px) {
    align-self: end;
    position: relative;
    left: -2%;
  }
`;

export { Rating, RatingContainer, Details, Title, InfoContainer, MovieImage, Card, CardsContainer1, TrashDiv };
