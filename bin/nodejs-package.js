#!/usr/bin/env node

import calculator from '../index.js';

calculator.read();

console.log('Сумма чисел: ', calculator.sum());
console.log('Произведение чисел: ', calculator.mul());
