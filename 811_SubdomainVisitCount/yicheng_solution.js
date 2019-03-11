var subdomainVisits = function(cpdomains) {
    var map = new Map();

    cpdomains.forEach(domain =>{
        var splitResult = domain.split(" ");
        var count = parseInt(splitResult[0]);
        var domainStr = splitResult[1];

        var dStr = domainStr;

        if (!map.has(dStr)){
            map.set(dStr, count);
        }
        else {
            map.set(dStr, map.get(dStr) + count);
        }

        while (dStr.indexOf(".") != -1){
            var index = dStr.indexOf(".");
            var subStr = dStr.substring(index + 1);
            if (!map.has(subStr)){
                map.set(subStr, count);
            }
            else{
                map.set(subStr, map.get(subStr) + count);
            }
            dStr = subStr;
        }

    });

    var result =[];
    map.forEach((value, key) =>{
        result.push(`${value} ${key}`);

    })
    return result;
};

var input1 = ["9001 discuss.leetcode.com"];
var input2 = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"];

console.log(subdomainVisits(input1));
console.log(subdomainVisits(input2));
// var domain = "9001 discuss.leetcode.com";
// var splitResult = domain.split(" ");
// console.log(splitResult);
// var map = new Map();
// var str = "1";
// map.set(str, 1);
// console.log(map);
