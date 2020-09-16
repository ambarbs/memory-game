import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FlipCardBack, FLipCardContainer, FlipCardFront, FLipCardWrapper } from './FlipCard.Styles';
import { useDispatch, useSelector } from 'react-redux';
import { closeImage, setGameOver, setOpenedCards } from '../../store/thunks';
import { gameDimension } from '../../store/constants';
import { getCLoseImageWithIndex, getOpenCards } from '../../store/selectors';

const FlipCard = ({ frontSide, backSide, imageId, imageIndex }) => {
  const [flip, setIsFrontSide] = useState(false);
  const openedCards = useSelector(getOpenCards);
  const closeImageWithIndex = useSelector(getCLoseImageWithIndex);
  const dispatch = useDispatch();

  const flipCardWithTimeout = (time, flip) => {
    setTimeout(() => {
      setIsFrontSide(flip);
    }, time);
  };

  useEffect(() => {
    // Open card after 500ms
    flipCardWithTimeout(500, true);
    // Close card after 5sec
    flipCardWithTimeout(1500, false);
  }, []);

  useEffect(() => {
    if (closeImageWithIndex === imageIndex) {
      flipCardWithTimeout(2000, !flip);
      dispatch(closeImage(null));
    }
  }, [closeImageWithIndex, imageIndex, dispatch, flip]);

  const onClick = () => {
    setIsFrontSide(!flip);

    if (openedCards.length >= gameDimension.row * gameDimension.col - 1) {
      dispatch(setGameOver(true));
      return;
    }
    if (openedCards.length % 2 === 0) {
      openedCards.push({ imageId, imageIndex });
      dispatch(setOpenedCards(openedCards));
      return;
    }
    // If 2nd card opened & does not match the previous card then close the card
    if (openedCards.length % 2 === 1 && !openedCards.find((card) => card.imageId === imageId)) {
      // Close card after 2sec
      flipCardWithTimeout(2000, false);
      // Remove previous image
      dispatch(closeImage(openedCards.pop().imageIndex));
    } else {
      openedCards.push({ imageId, imageIndex });
    }
    dispatch(setOpenedCards(openedCards));
  };

  return (
    <FLipCardWrapper>
      <FLipCardContainer onClick={onClick} flip={flip}>
        <FlipCardFront>{frontSide}</FlipCardFront>
        <FlipCardBack>{backSide}</FlipCardBack>
      </FLipCardContainer>
    </FLipCardWrapper>
  );
};

export default FlipCard;

FlipCard.propTypes = {
  frontSide: PropTypes.element,
  backSide: PropTypes.element,
  imageId: PropTypes.number,
  imageIndex: PropTypes.number,
};

FlipCard.defaultProps = {
  frontSide: <div>Front</div>,
  backSide: <div>Back</div>,
};
