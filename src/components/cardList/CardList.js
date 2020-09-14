import React from 'react';
import { Grid } from '../common/Common.Styles';
import FlipCard from '../flipCard/FlipCard';
import { CardBackSide } from './CardList.Styles';
import { useSelector } from 'react-redux';

const CardList = () => {
  const gameMatrix = useSelector((state) => state.gameReducer.gameMatrix);
  const gameKey = useSelector((state) => state.gameReducer.gameKey);
  const closeImageWithIndex = useSelector((state) => state.gameReducer.closeImageWithIndex);

  let cards = gameMatrix.map((item, index) => (
    <FlipCard
      key={`${gameKey}_${index}`}
      imageId={item.imageId}
      closeImageWithIndex={closeImageWithIndex}
      imageIndex={item.index}
      backSide={<CardBackSide />}
      frontSide={item.image}
    />
  ));

  return <Grid key={gameKey}>{cards}</Grid>;
};

export default CardList;
