// Create a function that checks if the first argument n is divisible by all other arguments 
// (return true if no other arguments)

// Example:
// (6,1,3)--> true because 6 is divisible by 1 and 3
// (12,2)--> true because 12 is divisible by 2
// (100,5,4,10,25,20)--> true
// (12,7)--> false because 12 is not divisible by 7

// more codewars
// n is the number to be checked for divisability. args is an array representing divisors 
function isDivisible(n, ...args) {
  for (const divisor of args) {
    if (n % divisor !== 0) {
      return false;
    }
  }
  return true;
}

console.log(isDivisible(8, 1, 4));

function sortStudents(names) {
  return names.sort((a, b) => {
    if (a.length === b.length) {
      return b.localeCompare(a);
    }
    return b.length - a.length;
  });
}

function lineUpStudents() {
  const studentNames = [
    'Tadashi', 'Takahiro', 'Takao', 'Takashi', 'Takayuki', 'Takehiko', 'Takeo', 'Takeshi', 'Takeshi'
  ];

  const sortedNames = sortStudents(studentNames);
  return sortedNames;
}

// Example usage:
const result = lineUpStudents();

// Display the result
console.log(result);