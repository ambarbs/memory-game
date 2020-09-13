import React from 'react';
import { Grid } from '../common/ImageCard.Styles';
import FlipCard from '../flipCard/FlipCard';
import { CardBackSide, ImageCardWrapper } from './CardList.Styles';

const CardList = () => {
  let cards = Array(10).fill(
    <FlipCard
      backSide={<CardBackSide>Back</CardBackSide>}
      frontSide={
        <ImageCardWrapper src={'https://s3-us-west-2.amazonaws.com/s.cdpn.io/29841/jimmy.jpg'} />
      }
    />
  );

  return <Grid>{cards}</Grid>;
};

export default CardList;
