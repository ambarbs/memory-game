import React from 'react';
import { Grid } from '../common/Common.Styles';
import FlipCard from '../flipCard/FlipCard';
import { CardBackSide } from './CardList.Styles';
import { useSelector } from 'react-redux';
import { getGameKey, getGameMatrix, getMatrixDimension } from '../../store/selectors';

const CardList = () => {
  const gameMatrix = useSelector(getGameMatrix);
  const gameKey = useSelector(getGameKey);
  const matrixDimension = useSelector(getMatrixDimension);
  let cards = gameMatrix
    ? gameMatrix.map((item, index) => (
        <FlipCard
          key={`${gameKey}_${index}`}
          imageId={item.imageId}
          imageIndex={item.index}
          backSide={<CardBackSide />}
          FrontSide={item.image}
        />
      ))
    : null;

  return (
    <Grid key={gameKey} row={matrixDimension.row} col={matrixDimension.col}>
      {cards}
    </Grid>
  );
};

export default CardList;
