import readlineSync from 'readline-sync';

const calculator = {
  a: 0,
  b: 0,
  read() {
    this.a = readlineSync.questionFloat('Введите первое число: ');
    this.b = readlineSync.questionFloat('Введите второе число: ');
  },

  sum() {
    if (this.a === null || this.b === null) {
      throw new Error('run read first');
    }

    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

export default calculator;
