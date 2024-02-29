// @ts-check

import { test, expect } from '@jest/globals';
import calculator from '../src/calculator.js';

test('calculator', () => {
  const calc = calculator;
  calc.a = 1;
  calc.b = 2;
  expect(calc.sum()).toBe(3);
  expect(calc.mul()).toBe(2);
});
