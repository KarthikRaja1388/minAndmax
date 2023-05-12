const numbers = [1, 2, 5, 7, 9, 10];

function minAndMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return { min, max };
}

console.log(minAndMax(numbers));
