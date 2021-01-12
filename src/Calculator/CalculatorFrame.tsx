import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";
import { negative } from "../helpers/calcHelper";

function CalculatorFrame() {
  const [input, setInput] = useState<string>("");
  const [operator, setOpperator] = useState<string>("");
  const [firstNumber, setFirstNumber] = useState<string>("");

  function appendNumber(numberButton: string) {
    const currentInput = input + numberButton;
    setInput(currentInput);
  }

  function clearInput() {
    const currentInput = "";
    setInput(currentInput);
  }

  function negate() {
    const currentInput = negative(parseInt(input)).toString();
    setInput(currentInput);
  }

  

  return (
    <CalculatorWindow>
      <CalcContent>
        <InputWindow value={input}></InputWindow>

        <ButtonBank>
          <div>
            <CalcButton
              variant="light"
              data-testid="numberSeven"
              onClick={() => appendNumber("7")}
            >
              7
            </CalcButton>
            <CalcButton
              variant="light"
              data-testid="numberEight"
              onClick={() => appendNumber("8")}
            >
              8
            </CalcButton>
            <CalcButton
              variant="light"
              data-testid="numberNine"
              onClick={() => appendNumber("9")}
            >
              9
            </CalcButton>
            <CalcButton variant="light" data-testid="functionAdd">
              +
            </CalcButton>
          </div>
          <div>
            <CalcButton
              variant="light"
              data-testid="numberFour"
              onClick={() => appendNumber("4")}
            >
              4
            </CalcButton>
            <CalcButton
              variant="light"
              data-testid="numberFive"
              onClick={() => appendNumber("5")}
            >
              5
            </CalcButton>
            <CalcButton
              variant="light"
              data-testid="numberSix"
              onClick={() => appendNumber("6")}
            >
              6
            </CalcButton>
            <CalcButton variant="light" data-testid="functionSubtract">
              -
            </CalcButton>
          </div>
          <div>
            <CalcButton
              variant="light"
              data-testid="numberOne"
              onClick={() => appendNumber("1")}
            >
              1
            </CalcButton>
            <CalcButton
              variant="light"
              data-testid="numberTwo"
              onClick={() => appendNumber("2")}
            >
              2
            </CalcButton>
            <CalcButton
              variant="light"
              data-testid="numberThree"
              onClick={() => appendNumber("3")}
            >
              3
            </CalcButton>
            <CalcButton variant="light" data-testid="functionMultiply">
              *
            </CalcButton>
          </div>
          <div>
            <CalcButton
              variant="light"
              data-testid="functionNegative"
              onClick={() => {negate()}}
            >
              (-)
            </CalcButton>
            <CalcButton
              variant="light"
              data-testid="numberZero"
              onClick={() => appendNumber("0")}
            >
              0
            </CalcButton>
            <CalcButton
              variant="light"
              data-testid="functionClear"
              onClick={() => clearInput()}
            >
              C
            </CalcButton>
            <CalcButton variant="light" data-testid="functionDivide">
              /
            </CalcButton>
          </div>
        </ButtonBank>
      </CalcContent>
    </CalculatorWindow>
  );
}

const CalculatorWindow = styled.div`
  background-color: white;
  width: 250px;
  height: 300px;
`;

const ButtonBank = styled.div`
  display: flex;
  flex-direction: column;
`;

const CalcButton = styled(Button)`
  width: 30px;
  height: 30px;
  margin: 10px;
`;

const InputWindow = styled(Form.Control)`
  margin: 15px;
  text-align: right;
`;
const CalcContent = styled.div`
  margin: 20px;
`;
export default CalculatorFrame;
