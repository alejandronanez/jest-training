function doubleArray(array) {
  return array.map(x => x * 2);
}

function add(a, b) {
  return a + b;
}

function subtract() {}

function positiveOnly(array) {
  return array.filter(x => x > 0);
}

module.exports = {
  doubleArray,
  add,
  subtract,
  positiveOnly
};
