class Currency {
  constructor(code, name) {
    this._code = Currency._validateCode(code);
    this._name = Currency._validateName(name);
  }

  // Getter and setter for code
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = Currency._validateCode(value);
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = Currency._validateName(value);
  }

  // Static validation methods
  static _validateCode(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    return code;
  }

  static _validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return name;
  }

  // Method to display the full currency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
