export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true; // block-scoped variable
    let task2 = false; // block-scoped variable
  }

  return [task, task2];
}
