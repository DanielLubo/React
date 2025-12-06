import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, expectTypeOf, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe('ItemCouner', () => {
    test('should render with default values', () => {
        const name = 'Test Item'
        render(<ItemCounter name={name} units={2} />);


        expect(screen.getByText(name)).toBeDefined();
    });

    test('should render with custom quantity', () => {
        const name = 'Test Item';
        const quantity = 10;
        render(<ItemCounter name={name} units={quantity} />);
        expect(screen.getByText(quantity)).toBeDefined();
    });

    test('Should increase count when +1 button is pressed', () => {
        render(<ItemCounter name="Test item" units={1} />);
        const [buttonAdd] = screen.getAllByRole('button');
        fireEvent.click(buttonAdd);
        expect(screen.getByText('2')).toBeDefined();

    });

    test('Should increase count when -1 button is pressed', () => {
        render(<ItemCounter name="Hola" units={5} />);
        const [, buttonSubtract] = screen.getAllByRole('button');

        fireEvent.click(buttonSubtract);
        expect(screen.getByText('4')).toBeDefined();
    });

    test('Should not decrease count when -1 button is pressed and quantity', () => {
        render(<ItemCounter name="Hola" units={1} />);
        const [, buttonSubtract] = screen.getAllByRole('button');

        fireEvent.click(buttonSubtract);
        expect(screen.getByText('1')).toBeDefined();
    });

    test('should change to red when count is 1', () => {
        const quantity = 1;
        const name = 'Test item'
        render(<ItemCounter name={name} units={quantity} />);

        const itemText = screen.getByText(name);
        expect(itemText.style.color).toBe('red');
    });

    test('should change to black when count is greater than 1', () => {
        const quantity = 2;
        const name = 'Test item'
        render(<ItemCounter name={name} units={quantity} />);

        const itemText = screen.getByText(name);
        expect(itemText.style.color).toBe('black');
    });
})