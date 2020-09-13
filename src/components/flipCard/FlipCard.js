import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FlipCardBack, FLipCardContainer, FlipCardFront, FLipCardWrapper } from './FlipCard.Styles';

const FlipCard = ({ frontSide, backSide }) => {
  const [flip, setIsFrontSide] = useState(false);

  return (
    <FLipCardWrapper>
      <FLipCardContainer onClick={() => setIsFrontSide(!flip)} rotate={flip}>
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
