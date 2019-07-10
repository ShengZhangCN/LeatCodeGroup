var nextGreaterElement = function(nums1, nums2) {
    var result = [];

    nums1.forEach(num => {
        var index = nums2.findIndex(element => {
            return element == num;
        });

        var nextGreater = -1;

        for (var i = index; i < nums2.length; i++) {
            if (nums2[i] > num) {
                nextGreater = nums2[i];
                break;
            }
        }
        result.push(nextGreater);
    });

    return result;
};

module.exports = nextGreaterElement;
