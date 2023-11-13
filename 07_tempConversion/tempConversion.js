const convertToCelsius = function(degree) {
  let newDegree = (degree-32) * (5/9);
  let result = Math.round(newDegree*10)/10;
  return result;
};

const convertToFahrenheit = function(degree) {
  let newDegree = (degree * (9/5)) + 32;
  let result = Math.round(newDegree*10)/10;
  return result;
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
