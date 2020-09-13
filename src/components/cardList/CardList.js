import React from 'react';
import { Grid } from '../common/Common.Styles';
import FlipCard from '../flipCard/FlipCard';
import { CardBackSide } from './CardList.Styles';
import { images } from './Images';

const CardList = () => {
  let cards = images.map((image, index) => (
    <FlipCard
      key={index}
      backSide={<CardBackSide />}
      frontSide={
        image
      }
    />
  ));

  return <Grid>{cards}</Grid>;
};

export default CardList;
