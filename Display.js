class Display {
  constructor(displayPreviousValue, displayCurrentValue) {
    this.displayCurrentValue = displayCurrentValue;
    this.displayPreviousValue = displayPreviousValue;
    this.calculator = new Calculator();
    this.operationType = undefined;
    this.currentValue = '';
    this.previousValue = '';
    this.operators = {
      add: '+',
      div: '/',
      mult: 'x',
      sub: '-',
    }
  }

  // Delete character
  deletenum() {
    this.currentValue = this.currentValue.toString().slice(0,-1);
    this.printValues();
  }

  // Delete all character
  deleteall() {
    this.currentValue = '';
    this.previousValue = '';
    this.operationType = undefined;
    this.printValues();
    this.displayPreviousValue = '';
  }

  // update numbers on display
  compute(type) {
    if(this.operationType === 'div' && +this.currentValue === 0) {
      this.displayPreviousValue.dataset.error = 'Error'
      return
    }

    this.operationType !== 'equal' && this.calculate();
    this.operationType = type;
    this.previousValue = this.currentValue || this.previousValue;
    this.currentValue = '';
    this.printValues();
  }

  // add numbers to the calculator
  addnum(num) {
    if(num === '.' && this.currentValue.includes('.')) return
    this.currentValue = this.currentValue.toString() + num.toString();
    this.printValues();
  }

  // show numbers
  printValues () {
    this.displayCurrentValue.textContent = this.currentValue;
    this.displayPreviousValue.textContent = `${this.previousValue} ${this.operators[this.operationType] || ''}`;
  }

  // calculate numbers
  calculate() {
    const previousValue = parseFloat(this.previousValue);
    const currentValue = parseFloat(this.currentValue);

    if( isNaN(currentValue) || isNaN(previousValue) ) return  
    this.currentValue = this.calculator[this.operationType](previousValue, currentValue).toString();
  }
}