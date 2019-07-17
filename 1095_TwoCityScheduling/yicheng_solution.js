var twoCitySchedCost = function(costs) {
  var sortedCosts = costs.sort((cost1, cost2) => {
    return cost1[0] - cost1[1] - (cost2[0] - cost2[1]);
  });

  var totalCost = 0;

  for (var i = 0; i < sortedCosts.length; i++) {
    if (i < sortedCosts.length / 2) {
      totalCost += sortedCosts[i][0];
    } else {
      totalCost += sortedCosts[i][1];
    }
  }

  return totalCost;
};

module.exports = twoCitySchedCost;
