import styled from "styled-components";

// Container para os cards
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  margin: 50px auto 0 auto;
  //background: linear-gradient(135deg, #2d3150, #1c1b34);
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
`;

// Imagem do filme
const MovieImage = styled.img`
  width: 4vw;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.75);
`;

// Container para as informações do filme
const InfoContainer = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-left: 15px;
`;

// Título do filme
const Title = styled.h2`
  max-width: 300px;
  font-size: 0.875rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// Detalhes do filme
const Details = styled.p`
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  opacity: 0.7;
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
