const divide = (a, b) => {
  if (b === 0) {
    throw new Error('division by 0');
  }
  return a / b;
};

/**
 * @param a number
 * @param b number
 * @returns b===0? error : a/b
 */
module.exports = divide;
