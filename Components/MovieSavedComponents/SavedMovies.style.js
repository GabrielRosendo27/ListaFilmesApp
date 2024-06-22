import styled from "styled-components";

// Container para os cards
const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: max-content;
  max-height: max-content;
  gap: 1rem;
  margin-top: 20px;
  //background: linear-gradient(135deg, #2d3150, #1c1b34);
`;

// Card individual
const Card = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  background-color: #3a3a5c;
  border-radius: 8px;
  padding: 1rem;
  color: #ffffff;
`;

// Imagem do filme
const MovieImage = styled.img`
  width: max-content;
  height: 90px;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.75);
`;

// Container para as informações do filme
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

// Título do filme
const Title = styled.h2`
  max-width: 300px;
  font-size: 0.9rem;
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
  height: max-content;
  background-color: #4a4a6a;
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 1rem;
  margin-left: auto;
`;

const Rating = styled.span`
  margin-left: 0.2rem;
  font-size: 0.9rem;
`;

const TrashDiv = styled.div`
  display: flex;
  align-items: end;
`;

export { Rating, RatingContainer, Details, Title, InfoContainer, MovieImage, Card, CardsContainer, TrashDiv };
