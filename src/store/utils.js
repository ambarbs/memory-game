import { getCardIcons } from '../components/cardList/CardIcons';

/**
 *
 * @param array
 * @returns {*[]}
 */
export const getShuffledArray = (array = []) => {
  const shuffledArray = [...array];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

/**
 *
 * @param row
 * @param col
 * @param iconStyle
 * @returns {*[]}
 */
export const getInitialLayout = (row = 2, col = 5, iconStyle = 0) => {
  const imageArray = [];
  const icons = Object.values(getCardIcons(iconStyle));
  for (let i = 0, imageCounter = 0; i < row * col; i += 2, imageCounter++) {
    const IconComponent = icons[imageCounter];
    // push image pair
    imageArray.push({ imageId: imageCounter, image: IconComponent, index: i });
    imageArray.push({ imageId: imageCounter, image: IconComponent, index: i + 1 });
  }
  return getShuffledArray(imageArray);
};
