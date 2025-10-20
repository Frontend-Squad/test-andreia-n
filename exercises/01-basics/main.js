// Implement the functions below.
// Keep implementations small, readable, and tested by running `npm test`.

export function toTitleCase(s) {
  return s
    .trim() 
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}


export function isPalindrome(s) {
  // Return true if s reads the same ignoring case and spaces.
  // "Race car" -> true
}

export function sumEven(nums) {
  // Sum even integers in the array.
  // [1,2,3,4,6] -> 12
}
