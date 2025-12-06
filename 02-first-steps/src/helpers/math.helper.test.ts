import { describe, expect, test } from 'vitest';
import { add, divide, multiply, subtract } from './math.helper';

describe('Add', () => {
    test('should add two positives numbers', () => {

        //! 1. Arrange
        const a = 1;
        const b = 3;

        //! 2. Act
        const result = add(a, b);

        //! 3. Assert
        expect(result).toBe(a + b);
    });
});


describe('subtract', () => {
    test('should subtract two positives numbers', () => {
        //! 1. Arrage
        const a = 3;
        const b = 1;

        //! 2. Act
        const result = subtract(a, b);

        //! 3. Assert
        expect(result).toBe(a - b);
    });
    test('should subtract two negative numbers', () => {
        //! 1. Arrage
        const a = -2;
        const b = -4;

        //! 2. Act
        const result = subtract(a, b);

        //! 3. Assert
        expect(result).toBe(a - b);
    });
});


describe('multiply', () => {
    test('should multiply two positives numbers', () => {
        //! 1. Arrage
        const a = 3;
        const b = 1;

        //! 2. Act
        const result = multiply(a, b);

        //! 3. Assert
        expect(result).toBe(a * b);
    });
    test('should multiply two negative numbers', () => {
        //! 1. Arrage
        const a = -2;
        const b = -4;

        //! 2. Act
        const result = multiply(a, b);

        //! 3. Assert
        expect(result).toBe(a * b);
    });
});


describe('divide', () => {
    test('should divide two positives numbers', () => {
        //! 1. Arrage
        const a = 2;
        const b = 4;

        //! 2. Act
        const result = divide(a, b);

        //! 3. Assert
        expect(result).toBe(a / b);
    });
})
