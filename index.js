// Code your solution here:
function driversWithRevenueOver(driver, revenue){
  const newArray = driver.filter(element => element.revenue > revenue);
{
  return newArray;
}
}

function driverNamesWithRevenueOver(driver, revenue){
  return driversWithRevenueOver(driver, revenue).map(function(person){
  return person.name
});
}

function exactMatch(drivers, object) {
  return drivers.filter(function(element){
    let result = false;

  for (const key in object){
    result = element[key] === object[key];
  }
  return result;
});
}



function exactMatchToList(drivers, object){
return exactMatch(drivers, object).map(function(driver){
  return driver.name;
});
}
