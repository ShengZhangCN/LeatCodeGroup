var findShortestSubArray = function(nums) {
  return getDegree(nums);
};

var getDegree = nums => {
  var map = new Map();

  nums.forEach((num, index) => {
    if (map.has(num)) {
      var info = map.get(num);
      var count = info["count"] + 1;
      var indexList = info["index"];
      indexList.push(index);
      map.set(num, { count: count, index: indexList });
    } else {
      var indexList = [];
      indexList.push(index);
      map.set(num, { count: 1, index: indexList });
    }
  });

  console.log(map);

  var degree = 0;
  var number = 0;
  for (var [key, value] of map) {
    if (value["count"] >= degree) {
      degree = value["count"];
      number = key;
    }
  }

  console.log(degree);

  var length = nums.length;

  for (var [key, value] of map) {
    if (degree == value["count"]) {
      var indexList = value["index"];

      var len = indexList[indexList.length - 1] - indexList[0] + 1;

      length = Math.min(length, len);
    }
  }

  return length;
};

module.exports = findShortestSubArray;
