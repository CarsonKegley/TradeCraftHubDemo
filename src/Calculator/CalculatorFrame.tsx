import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";
import { addDecimal, negative } from "../helpers/calcHelper";

function CalculatorFrame() {
  const [input, setInput] = useState<string>("0");
  const [operator, setOperator] = useState<string>("");
  const [firstNumber, setFirstNumber] = useState<string>("");

  function appendNumber(numberButton: string) {
    if (isNaN(Number(input)) || input === "0") {
      setInput(numberButton);
    } else {
      const currentInput = input + numberButton;
      setInput(currentInput);
    }
  }

  function clearInput() {
    const currentInput = "0";
    setInput(currentInput);
    if (input === "0") {
      setFirstNumber("");
      setOperator("");
    }
  }

  function negate() {
    if (!isNaN(Number(input))) {
      const currentInput = negative(Number(input)).toString();
      setInput(currentInput);
    }
  }

  function functionSelect(value: string) {
    if (firstNumber === "") {
      setOperator(value);
      setFirstNumber(input);
      setInput("0");
    } else {
      equalsButton();
    }
  }

  function equalsButton() {
    if (operator === "+") {
      const first = Number(firstNumber);
      const second = Number(input);
      setInput((first + second).toString());
    } else if (operator === "-") {
      const first = Number(firstNumber);
      const second = Number(input);
      setInput((first - second).toString());
    } else if (operator === "*") {
      const first = Number(firstNumber);
      const second = Number(input);
      setInput((first * second).toString());
    } else if (operator === "/") {
      const first = Number(firstNumber);
      const second = Number(input);
      setInput((first / second).toString());
    }
    setFirstNumber("");
    setOperator("");
  }

  function decimalButton(value: string) {
    setInput(addDecimal(value));
  }

  return (
    <CalculatorWindow>
      <CalcContent>
        
        <InputArea>
          <InputWindow value={input}></InputWindow>
          <InputText>{firstNumber + "  " + operator} </InputText> 
        </InputArea>
        <div style = {{display:"flex",}}>
        <ButtonBank>
          <div>
            <CalcButton
              data-testid="numberSeven"
              onClick={() => appendNumber("7")}
            >
              <ButtonText>7</ButtonText>
            </CalcButton>
            <CalcButton
              data-testid="numberEight"
              onClick={() => appendNumber("8")}
            >
              <ButtonText>8</ButtonText>
            </CalcButton>
            <CalcButton
              data-testid="numberNine"
              onClick={() => appendNumber("9")}
            >
              <ButtonText>9</ButtonText>
            </CalcButton>
          </div>
          <div>
            <CalcButton
              data-testid="numberFour"
              onClick={() => appendNumber("4")}
            >
              <ButtonText>4</ButtonText>
            </CalcButton>
            <CalcButton
              data-testid="numberFive"
              onClick={() => appendNumber("5")}
            >
              <ButtonText>5</ButtonText>
            </CalcButton>
            <CalcButton
              data-testid="numberSix"
              onClick={() => appendNumber("6")}
            >
              <ButtonText>6</ButtonText>
            </CalcButton>
            
          </div>
          <div>
            <CalcButton
              data-testid="numberOne"
              onClick={() => appendNumber("1")}
            >
              <ButtonText>1</ButtonText>
            </CalcButton>
            <CalcButton
              data-testid="numberTwo"
              onClick={() => appendNumber("2")}
            >
              <ButtonText>2</ButtonText>
            </CalcButton>
            <CalcButton
              data-testid="numberThree"
              onClick={() => appendNumber("3")}
            >
              <ButtonText>3</ButtonText>
            </CalcButton>
            
          </div>
          <div>
            <CalcButton
              data-testid="functionNegative"
              onClick={() => {
                negate();
              }}
            >
              <ButtonText>(-)</ButtonText>
            </CalcButton>
            <CalcButton
              data-testid="numberZero"
              onClick={() => appendNumber("0")}
            >
              <ButtonText>0</ButtonText>
            </CalcButton>
            <CalcButton
              data-testid="functionClear"
              onClick={() => clearInput()}
            >
              <ButtonText>C</ButtonText>
            </CalcButton>
            
          </div>
          <div>
            <CalcButton onClick={() => decimalButton(input)}>
              <ButtonText>.</ButtonText>
            </CalcButton>
            <EqualsButton onClick={() => equalsButton()}>
              {" "}
              <EqualsButtonText>=</EqualsButtonText>{" "}
            </EqualsButton>
          </div>
        </ButtonBank>
        <FunctionButtonGroup>
          <CalcButton
            data-testid="functionDivide"
            onClick={() => functionSelect("/")}
          >
            <ButtonText>/</ButtonText>
          </CalcButton>
          <CalcButton
              data-testid="functionMultiply"
              onClick={() => functionSelect("*")}
            >
              <ButtonText>*</ButtonText>
            </CalcButton>
            <CalcButton
              data-testid="functionSubtract"
              onClick={() => functionSelect("-")}
            >
              <ButtonText>-</ButtonText>
            </CalcButton>
          <AddButton
            data-testid="functionAdd"
            onClick={() => functionSelect("+")}
          >
            <AddButtonText>+</AddButtonText>
          </AddButton>
        </FunctionButtonGroup>
        </div>
      </CalcContent>
    </CalculatorWindow>
  );
}

const CalculatorWindow = styled.div`
  background-color: #9f9f9f;
  width: 362x;
  height: 575px;
  border-radius: 10px;
  background: #9f9f9f;
  box-shadow: -4px 4px 9px #282828;
`;

const ButtonBank = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const FunctionButtonGroup = styled.div`
  display: flex;
  flex-direction: column; 
  margin: 20px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top:20px;
  margin-left:20px;
  margin-right:20px;
`;
const CalcButton = styled(Button)`
  width: 60px;
  height: 60px;
  margin: 10px;
  border-radius: 10px;
  background: #9b9b9b;
  box-shadow: -6px 6px 12px #888888, 6px -6px 12px #aeaeae;
  border-color: #9b9b9b;
  color: white;
  border-style: hidden;
`;

const AddButton = styled(CalcButton)`
  height:140px;

`;

const EqualsButton = styled(CalcButton)`
  width: 140px;
`;

const InputWindow = styled(Form.Control)`
  margin: 15px;
  text-align: right;
  width: 322px;
  height: 66px;
  border-radius: 10px;
  background: #bebebe;
  box-shadow: inset 22px -22px 44px #a7a7a7, inset -22px 22px 44px #d5d5d5;
  border-color: #bebebe;
  font-size: 33px;
  border-style: hidden;
`;
const CalcContent = styled.div`
  marign: 50px;
  display: flex;
  flex-direction: column;
`;




//Text styling
const ButtonText = styled.span`
  position: relative;
  bottom: -14px;
  right: -16px;
  font-size: 24px;
`;

const EqualsButtonText = styled(ButtonText)`
  right: -55px;
`;

const AddButtonText = styled(ButtonText)`
  bottom: -55px;
`;

const InputText = styled(Form.Text)`
  margin-left:20px;
  font-size: 18px;
  min-height:25px;
`;

export default CalculatorFrame;
