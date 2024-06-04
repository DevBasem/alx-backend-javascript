function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  const result = [];
  
  for (const value of set) {
    if (value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  }
  
  return result.join('-');
}

export default cleanSet;
