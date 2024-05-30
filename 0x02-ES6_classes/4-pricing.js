import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this._amount = Pricing._validateAmount(amount);
    this._currency = Pricing._validateCurrency(currency);
  }

  // Getter and setter for amount
  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = Pricing._validateAmount(value);
  }

  // Getter and setter for currency
  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = Pricing._validateCurrency(value);
  }

  // Static validation methods
  static _validateAmount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    return amount;
  }

  static _validateCurrency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    return currency;
  }

  // Method to display the full price
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversion rate must be numbers');
    }
    return amount * conversionRate;
  }
}

export default Pricing;
