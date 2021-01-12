import {render} from "@testing-library/react";
import React from "react";
import CalculatorFrame from "./CalculatorFrame";

describe("Calculator Frame Functionality", () => {
  it("Renders the number and function buttons", () => {
      const { getByTestId, queryByText} = render(<CalculatorFrame />);

        const buttonNumberOne = getByTestId("numberOne");
        expect(buttonNumberOne).not.toBeNull();
        const buttonNumberTwo = getByTestId("numberTwo");
        expect(buttonNumberTwo).not.toBeNull();
        const buttonNumberThree = getByTestId("numberThree");
        expect(buttonNumberThree).not.toBeNull();
        const buttonNumberFour = getByTestId("numberFour");
        expect(buttonNumberFour).not.toBeNull();
        const buttonNumberFive = getByTestId("numberFive");
        expect(buttonNumberFive).not.toBeNull();
        const buttonNumberSix = getByTestId("numberSix");
        expect(buttonNumberSix).not.toBeNull();
        const buttonNumberSeven = getByTestId("numberSeven");
        expect(buttonNumberSeven).not.toBeNull();
        const buttonNumberEight = getByTestId("numberEight");
        expect(buttonNumberEight).not.toBeNull();
        const buttonNumberNine = getByTestId("numberNine");
        expect(buttonNumberNine).not.toBeNull();
        const buttonNumberZero = getByTestId("numberZero");
        expect(buttonNumberZero).not.toBeNull();

        const buttonFunctionNegative = getByTestId("functionNegative");
        expect(buttonFunctionNegative).not.toBeNull();
        const buttonFunctionClear = getByTestId("functionClear");
        expect(buttonFunctionClear).not.toBeNull();
        
        const buttonFunctionAdd = getByTestId("functionAdd");
        expect(buttonFunctionAdd).not.toBeNull();
        const buttonFunctionSubtract= getByTestId("functionSubtract");
        expect(buttonFunctionSubtract).not.toBeNull();
        const buttonFunctionMultiply = getByTestId("functionMultiply");
        expect(buttonFunctionMultiply).not.toBeNull();
        const buttonFunctionDivide = getByTestId("functionDivide");
        expect(buttonFunctionDivide).not.toBeNull();
  });
  
});
