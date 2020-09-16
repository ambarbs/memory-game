import { images } from '../components/cardList/Images';
import { gameDimension } from './constants';

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
 * @returns {*[]}
 */
export const getInitialLayout = (row = gameDimension.row, col = gameDimension.col) => {
  const imageArray = [];
  for (let i = 0, imageCounter = 0; i < row * col; i += 2, imageCounter++) {
    // push image pair
    imageArray.push({ imageId: imageCounter, image: images[imageCounter], index: i });
    imageArray.push({ imageId: imageCounter, image: images[imageCounter], index: i + 1 });
  }
  return getShuffledArray(imageArray);
};
