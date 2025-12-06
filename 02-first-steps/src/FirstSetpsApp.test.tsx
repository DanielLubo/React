import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstSetpsApp } from "./FirstSetpsApp";

const mockItemCounter = vi.fn((props: unknown) => {
    return (
        <div data-testid="ItemCounter" />
    )
});

vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props),
}));

describe('FirstStepsApp', () => {

    afterEach(() => {
        vi.clearAllMocks();
    })

    test('should match snapshot', () => {
        const { container } = render(<FirstSetpsApp />);
        expect(container).toMatchSnapshot();

    });

    test('should render the correct number of ItemCounter components', () => {
        render(<FirstSetpsApp />);

        const itemCounterComponent = screen.getAllByTestId('ItemCounter');
        expect(itemCounterComponent.length).toBe(3);

        screen.debug();
    });

    test('should render ItemCounter with correct props', () => {
        render(<FirstSetpsApp />);
        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: "Minecraft", units: 2,
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: "Valorant", units: 1,
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: "LoL", units: 3,
        });
    })
});