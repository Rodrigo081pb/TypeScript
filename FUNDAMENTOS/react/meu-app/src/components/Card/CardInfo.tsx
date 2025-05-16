import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;

interface ICardInfo {
    text: string
}

const CardInfo = ({text}: ICardInfo ) => {
  return (
    <>
      <Title>{ text }</Title>
    </>
  );
};

export default CardInfo;
