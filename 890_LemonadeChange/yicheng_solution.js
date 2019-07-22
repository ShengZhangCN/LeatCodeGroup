var lemonadeChange = function(bills) {
  var five = 0;
  var ten = 0;
  var twenty = 0;

  for (var i = 0; i < bills.length; i++) {
    if (bills[i] == 5) {
      five++;
    } else if (bills[i] == 10) {
      ten++;
      if (five > 0) {
        five--;
      } else {
        return false;
      }
    } else {
      if (ten > 0) {
        ten--;
        if (five > 0) {
          five--;
        } else {
          return false;
        }
      } else {
        if (five >= 3) {
          five -= 3;
        } else {
          return false;
        }
      }
    }
  }

  return true;
};

module.exports = lemonadeChange;
