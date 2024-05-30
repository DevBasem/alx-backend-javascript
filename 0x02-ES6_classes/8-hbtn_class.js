class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Getter for size
  get size() {
    return this._size;
  }

  // Getter for location
  get location() {
    return this._location;
  }

  // Override valueOf method for casting to Number
  valueOf() {
    return this._size;
  }

  // Override toString method for casting to String
  toString() {
    return this._location;
  }
}

export default HolbertonClass;
