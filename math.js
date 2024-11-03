function add(a, b) {
  return a + b;
}

function minus(a, b) {
  return Math.max(a, b) - Math.min(a, b);
}

module.exports = { add, minus };
