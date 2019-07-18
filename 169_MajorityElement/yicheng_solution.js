var majorityElement = function(nums) {
  var map = {};


  nums.forEach(num =>{
    if (map[num] != undefined){
      map[num]++;
    }
    else{
      map[num] = 1;
    }
  });

  console.log(map);

  for (var key in map){
    if (map[key] > Math.floor(nums.length / 2)){
      return parseInt(key);
    }
  }

  return -1;

};

module.exports = majorityElement;
