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
  const cleaned = s.replace(/\s+/g, '').toLowerCase();
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}


export function sumEven(nums) {
  return nums
    .filter((n) => Number.isInteger(n) && n % 2 === 0)
    .reduce((sum, n) => sum + n, 0);
}
