import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FlipCardBack, FLipCardContainer, FlipCardFront, FLipCardWrapper } from './FlipCard.Styles';

const FlipCard = ({ frontSide, backSide }) => {
  const [flip, setIsFrontSide] = useState(false);

  const flipCardWithTimeout = (time, flip) => {
    setTimeout(() => {
      setIsFrontSide(flip);
    }, time);
  };

  useEffect(() => {
    // Open card after 500ms
    flipCardWithTimeout(500, true);
    // Close card after 5sec
    flipCardWithTimeout(3500, false);
  }, []);

  const onClick = () => {
    setIsFrontSide(!flip);
    // Close card after 5sec
    flipCardWithTimeout(2000, false);
  };

  return (
    <FLipCardWrapper>
      <FLipCardContainer onClick={onClick} rotate={flip}>
        <FlipCardFront>{backSide}</FlipCardFront>
        <FlipCardBack>{frontSide}</FlipCardBack>
      </FLipCardContainer>
      {/*{flip ? frontSide : backSide}*/}
    </FLipCardWrapper>
  );
};

export default FlipCard;

FlipCard.propTypes = {
  frontSide: PropTypes.element,
  backSide: PropTypes.element,
};

FlipCard.defaultProps = {
  frontSide: (
    <div
      style={{
        width: '160px',
        height: '160px',
        display: 'flex',
        justifyContent: 'centre',
        alignItems: 'centre',
        border: '1px solid',
      }}
    >
      Front
    </div>
  ),
  backSide: (
    <div
      style={{
        width: '160px',
        height: '160px',
        display: 'flex',
        justifyContent: 'centre',
        alignItems: 'centre',
        border: '1px solid',
      }}
    >
      Back
    </div>
  ),
};
