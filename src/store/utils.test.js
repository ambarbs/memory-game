import { getInitialLayout, getShuffledArray } from './utils';

describe('utils', () => {
  describe('Shuffle Array', () => {
    let arr;
    beforeEach(() => {
      arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    });

    it('should return an array', () => {
      expect(Array.isArray(getShuffledArray(arr))).toBe(true);
    });

    it('should contain same number of items after shuffling', () => {
      const shuffledArray = getShuffledArray(arr);
      expect(arr.length).toBe(shuffledArray.length);
    });

    it('should contain same elements in shuffled array', () => {
      const shuffledArray = getShuffledArray(arr);
      expect(arr.every((item) => shuffledArray.includes(item))).toBe(true);
    });
  });

  describe('Shuffle Array', () => {
    it('should return an array of objects', () => {
      const initialLayout = getInitialLayout(1, 1);
      expect(Array.isArray(initialLayout)).toBe(true);
      expect(typeof initialLayout[0] === 'object').toBe(true);
    });

    it('should contain row * col number of items in initial layout', () => {
      const row = 3,
        col = 4;
      expect(getInitialLayout(row, col).length).toBe(row * col);
    });

    it('should contain an array of object with keys ["index", "image", "imageId"]', () => {
      const initialLayout = getInitialLayout(1, 1);
      expect(
        Object.keys(initialLayout[0]).every((key) => ['index', 'image', 'imageId'].includes(key))
      ).toBe(true);
    });
  });
});
