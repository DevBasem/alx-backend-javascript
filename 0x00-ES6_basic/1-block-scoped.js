export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  /* eslint-disable no-unused-vars */
  if (trueOrFalse) {
    const innerTask = true;
    const innerTask2 = false;
  }
  /* eslint-disable no-unused-vars */

  return [task, task2];
}
