export default function createInt8TypedArray(length, position, value) {
  if (length < 0 || position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Allocate memory for the ArrayBuffer with the desired length
  const buffer = new ArrayBuffer(length);

  // Create a DataView to access the ArrayBuffer with Int8 view
  const view = new DataView(buffer);

  // Set the value at the specified position (converted to Int8)
  view.setInt8(position, value);

  return view;
}
