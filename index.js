// Code your solution here:
function driversWithRevenueOver(drivers, dollars) {
  return drivers.filter(function (driver) {
    return driver.revenue > dollars;
  });
};

function driverNamesWithRevenueOver(drivers, dollars) {
  return driversWithRevenueOver(drivers, dollars)
    .map(function (driver) {
      return driver.name;
    });
};

function exactMatch(drivers, matcher) {
  return drivers.filter(function (driver) {
    let target = false;
      for (const key in matcher) { 
        target = driver[key] === matcher[key];
      };
    return target;
  });
};

function exactMatchToList(drivers, matcher) {
  return exactMatch(drivers, matcher)
    .map(function (driver) {
      return driver.name;
    });
};