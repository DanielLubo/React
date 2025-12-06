import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyAwesomeApp } from './MyAwesomeApp';

describe('MyAwesomeApp', () => {
    test('should render firstName and lastName', () => {
        const { container } = render(<MyAwesomeApp firstName="Ana" lastName="Sofia" />);

        // console.log(screen.debug);
        screen.debug();

        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');

        expect(h1?.innerHTML).toContain('Ana');
        expect(h3?.innerHTML).toContain('Sofia');
    });

    test('should render firstName and lastName - screen', () => {
        render(<MyAwesomeApp firstName="Ana" lastName="Sofia" />);
        screen.debug();

        // const h1 = screen.getByRole('heading', {
        //     level: 1,
        // });

        const h1 = screen.getByTestId('first-name-title');

        expect(h1.innerHTML).toContain('Ana');
    });


    test('should match snapshot', () => {
        const { container } = render(<MyAwesomeApp firstName="Ana" lastName="Sofia" />);
        expect(container).toMatchSnapshot();
    });


    // test('should match snapshot', () => {
    //     render(<MyAwesomeApp firstName="Ana" lastName="Sofia" />);
    //     expect(screen.getByTestId('div-app')).toMatchFileSnapshot();
    // })
});