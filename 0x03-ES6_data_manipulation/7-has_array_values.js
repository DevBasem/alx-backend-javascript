export default function hasValuesFromArray(set, arr) {
  if (!(set instanceof Set) || !Array.isArray(arr)) {
    throw new TypeError('Arguments must be Set and Array');
  }

  // Check if every element in the array exists in the set
  return arr.every((element) => set.has(element));
}
