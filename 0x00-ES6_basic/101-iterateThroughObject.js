export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  for (const employee of reportWithIterator) {
    result += `${employee} | `;
  }

  result = result.slice(0, -3);

  return result;
}
