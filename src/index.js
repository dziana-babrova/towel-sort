module.exports = function towelSort (matrix = []) {
  let sortedMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 1) {
          sortedMatrix.push(matrix[i].reverse());
      } else sortedMatrix.push(matrix[i]);
  }

  sortedMatrix = sortedMatrix.flat();
  return sortedMatrix;
}
