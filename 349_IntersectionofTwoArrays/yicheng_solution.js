var intersection = function(nums1, nums2) {
  var set1 = new Set();
  var set2 = new Set();

  nums1.forEach(item => {
    set1.add(item);
  });

  nums2.forEach(item => {
    set2.add(item);
  });


  var result = [];

  set1.forEach(item => {
    set2.forEach(item2 => {
      if (item == item2) {
        result.push(item);
      }
    });
  });



  return result;
};

module.exports = intersection;
