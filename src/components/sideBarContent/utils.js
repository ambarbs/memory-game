export const getMatrixDimension = (gameDifficulty) => {
  switch (gameDifficulty) {
    case 0:
      return { row: 2, col: 3 };
    default:
    case 1:
      return { row: 2, col: 5 };
    case 2:
      return { row: 3, col: 6 };
  }
};
