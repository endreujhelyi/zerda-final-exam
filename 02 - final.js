// ## 2.
// Create a function that reverses a string


const reverser = string => {
  let e = '';
  for(let i = string.length - 1; i >= 0; i--) {
    e += string[i];
  }
  return e;
}


console.log(reverser('hello robotzsaru'));
