import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";
import { negative } from "../helpers/calcHelper";

function CalculatorFrame() {
  const [input, setInput] = useState<string>("");
  const [operator, setOperator] = useState<string>("");
  const [firstNumber, setFirstNumber] = useState<string>("");

  function appendNumber(numberButton: string) {
    if (isNaN(parseInt(input)) || input === "0") {
      setInput(numberButton);
    } else {
      const currentInput = input + numberButton;
      setInput(currentInput);
    }
  }

  function clearInput() {
    const currentInput = "";
    setInput(currentInput);
    if (input === "") {
      setFirstNumber("");
      setOperator("");
    }
  }

  function negate() {
    if (input !== "") {
      const currentInput = negative(parseInt(input)).toString();
      setInput(currentInput);
    }
  }

  function functionSelect(value: string) {
    if (firstNumber === "") {
      setOperator(value);
      setFirstNumber(input);
      setInput("");
    } else {
      equalsButton();
    }
  }

  function equalsButton() {
    if (operator === "+") {
      const first = parseInt(firstNumber);
      const second = parseInt(input);
      setInput((first + second).toString());
      setFirstNumber("");
      setOperator("");
    } else if (operator === "-") {
      const first = parseInt(firstNumber);
      const second = parseInt(input);
      setInput((first - second).toString());
      setFirstNumber("");
      setOperator("");
    } else if (operator === "*") {
      const first = parseInt(firstNumber);
      const second = parseInt(input);
      setInput((first * second).toString());
      setFirstNumber("");
      setOperator("");
    } else {
      const first = parseInt(firstNumber);
      const second = parseInt(input);
      setInput((first / second).toString());
      setFirstNumber("");
      setOperator("");
    }
  }

  return (
    <CalculatorWindow>
      <CalcContent>
        <ButtonBank>
          <InputWindow value={input}></InputWindow>
          <Form.Text> {firstNumber + "  " + operator} </Form.Text>
        </ButtonBank>
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
            <CalcButton
              variant="light"
              data-testid="functionAdd"
              onClick={() => functionSelect("+")}
            >
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
            <CalcButton
              variant="light"
              data-testid="functionSubtract"
              onClick={() => functionSelect("-")}
            >
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
            <CalcButton
              variant="light"
              data-testid="functionMultiply"
              onClick={() => functionSelect("*")}
            >
              *
            </CalcButton>
          </div>
          <div>
            <CalcButton
              variant="light"
              data-testid="functionNegative"
              onClick={() => {
                negate();
              }}
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
            <CalcButton
              variant="light"
              data-testid="functionDivide"
              onClick={() => functionSelect("/")}
            >
              /
            </CalcButton>
          </div>
          <div>
            <CalcButton variant="dark" onClick={() => functionSelect("/")}>
              .
            </CalcButton>
            <EqualsButton onClick={() => equalsButton()}> = </EqualsButton>
          </div>
        </ButtonBank>
      </CalcContent>
    </CalculatorWindow>
  );
}

const CalculatorWindow = styled.div`
  background-color: #9f9f9f;
  width: 362x;
  height: 575px;
`;

const ButtonBank = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const CalcButton = styled(Button)`
  width: 60px;
  height: 60px;
  margin: 10px;
  background-color: "#9B9B9B";
`;

const EqualsButton = styled(Button)`
  width: 130px;
  height: 60px;
  background-color: "#9B9B9B";
`;

const InputWindow = styled(Form.Control)`
  margin: 15px;
  text-align: right;
  width: 322px;
  height: 66px;
`;
const CalcContent = styled.div`
  marign: 50px;
`;
export default CalculatorFrame;
