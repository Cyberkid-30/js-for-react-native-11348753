
//Task 1
function processArray(array) {
  const newArray = array.map((item) => {
    if (item % 2 === 0) {
      return item * item;
    } else {
      return item * item * item;
    }
  });

  return newArray;
}
