export default function cleanSet(set, startString) {
  if (!Set.prototype.isPrototypeOf(set) || typeof startString !== 'string') {
    throw new TypeError('Arguments must be Set and String');
  }

  const filteredValues = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      filteredValues.push(value.slice(startString.length));
    }
  }

  return filteredValues.join('-');
}
