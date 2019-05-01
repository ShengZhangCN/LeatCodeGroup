var singleNumber = function(nums) {
    var single = 0;
    nums.forEach(num =>{
        single = single ^ num;
    });

    return single;
};
