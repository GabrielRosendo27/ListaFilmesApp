import styled from "styled-components";

// Container para os cards
const CardsContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
`;

// Card individual

const Cards = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: ${(props) => (props.$isRotated ? "column" : "row")};
  background-color: #161f3b;
  border-radius: 8px;
  padding: 0.5rem;
  color: #ffffff;
  margin: 0 auto;

  @media (max-width: 1050px) {
    width: 90vw;
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
  @media (max-width: 590px) {
    display: block;
  }
`;

// Container para as informações do filme
const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  gap: 2.5rem;
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
    justify-content: center;
  }
`;

// Título do filme
const Title = styled.h2`
  width: 30vw;
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 0.3rem;

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
  width: ${(props) => (props.$isRotated ? "max-content" : "")};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #060a16;
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
const Sinopse = styled.div`
  /* display: none; */
`;
const TrashDiv = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  @media (max-width: 590px) {
    align-self: end;
  }
`;

export { Rating, Cards, RatingContainer, Details, Title, InfoContainer, MovieImage, CardsContainer1, TrashDiv, Sinopse };
