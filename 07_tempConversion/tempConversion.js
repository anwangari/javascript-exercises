const convertToCelsius = function(F) {
  let celsius = ((F - 32) * (5 / 9))
  celsius = Math.round((celsius * 10).toFixed(1)) / 10
  return celsius
};

const convertToFahrenheit = function(C) {
  let far = (C * (9 / 5) + 32)
  far = Math.round((far * 10).toFixed(1)) / 10
  return far
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
