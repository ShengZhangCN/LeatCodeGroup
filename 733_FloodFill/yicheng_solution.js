var floodFill = function(image, sr, sc, newColor) {
  if (image[sr][sc] != newColor) {
    dfs(image, sr, sc, newColor, image[sr][sc]);
  }
  return image;
};

var dfs = (image, sr, sc, newColor, oldColor) => {
  if (
    sr >= 0 &&
    sr < image.length &&
    sc >= 0 &&
    sc < image[0].length &&
    image[sr][sc] == oldColor
  ) {
    image[sr][sc] = newColor;

    dfs(image, sr + 1, sc, newColor, oldColor);
    dfs(image, sr - 1, sc, newColor, oldColor);
    dfs(image, sr, sc + 1, newColor, oldColor);
    dfs(image, sr, sc - 1, newColor, oldColor);
  }
};

module.exports = floodFill;
