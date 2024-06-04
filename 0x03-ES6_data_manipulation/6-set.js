export default function setFromArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Argument must be an array');
  }

  return new Set(arr);
}
