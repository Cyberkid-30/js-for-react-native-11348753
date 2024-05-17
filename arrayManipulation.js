//Task 1
function processArray(array) {
  const newArray = array.map((item) => {
    if (item % 2 === 0) {
      return item * item;
    } else {
      return item * 3;
    }
  });

  return newArray;
}

//Task 2
//The argument numbers is processed by the processArray function
function formatArrayStrings(strings, numbers) {
  const newArray = strings.map((str, index) => {
    const num = numbers[index];
    if (num % 2 === 0) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  });

  return newArray;
}

