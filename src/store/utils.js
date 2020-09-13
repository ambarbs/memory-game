import { images } from '../components/cardList/Images';

const shuffleArray = (array = []) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export const getInitialLayout = (row = 2, col = 5) => {
  const imageArray = [];
  for (let i = 0, imageCounter = 0; i < row * col; i += 2, imageCounter++) {
    // push image pair
    imageArray.push({ imageId: imageCounter, image: images[imageCounter], index: i });
    imageArray.push({ imageId: imageCounter, image: images[imageCounter], index: i + 1 });
  }
  shuffleArray(imageArray);
  return imageArray;
};
