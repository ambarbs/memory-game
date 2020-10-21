import { images } from '../components/cardList/Images';

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
  // shuffle before creating the game else it will create the game with same icons
  const icons = getShuffledArray(images[iconStyle]);
  for (let i = 0, imageCounter = 0; i < row * col; i += 2, imageCounter++) {
    // push image pair
    imageArray.push({ imageId: imageCounter, image: icons[imageCounter], index: i });
    imageArray.push({ imageId: imageCounter, image: icons[imageCounter], index: i + 1 });
  }
  return getShuffledArray(imageArray);
};

/**
 *
 * @param gameMatrix
 * @param iconStyle
 * @returns {*[]}
 */
export const replaceImagesInLayout = ({ gameMatrix, iconStyle = 0 }) => {
  // get unique imageIds
  const imageIds = Array.from(new Set(gameMatrix.map((card) => card.imageId)));
  const icons = images[iconStyle];

  // filter out and change both items' images with new image
  imageIds.forEach((imageId, imageCounter) => {
    const image = icons[imageCounter];
    const cardsWithImageId = gameMatrix.filter((card) => card.imageId === imageId);

    // replace image for both cards with new image
    cardsWithImageId.forEach((card) => (card.image = image));
  });

  return [...gameMatrix];
};
