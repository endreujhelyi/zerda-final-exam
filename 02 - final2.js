// ## 2.
// Create a function that reverses a string


const reverser = string => {
  let length = 0;
  for(let i in string) {
    length += 1;
    i++;
  }

  let reversedString = '';
  for(let i = length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}


console.log(reverser('hello robotzsaru'));
