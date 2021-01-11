import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";

function CalculatorFrame() {
  const [input, setInput] = useState<string>("");

  function handleNumberClick(numberButton: string) {
    setInput(input + numberButton);
  }

  return (
    <CalculatorWindow>
      <CalcContent>
        <InputWindow></InputWindow>

        <ButtonBank>
          <div>
            <CalcButton variant="light" > 7</CalcButton>
            <CalcButton variant="light">8</CalcButton>
            <CalcButton variant="light">9</CalcButton>
            <CalcButton variant="light">+</CalcButton>
          </div>
          <div>
            <CalcButton variant="light">4</CalcButton>
            <CalcButton variant="light">5</CalcButton>
            <CalcButton variant="light">6</CalcButton>
            <CalcButton variant="light">-</CalcButton>
          </div>
          <div>
            <CalcButton variant="light">1</CalcButton>
            <CalcButton variant="light">2</CalcButton>
            <CalcButton variant="light">3</CalcButton>
            <CalcButton variant="light">*</CalcButton>
          </div>
          <div>
            <CalcButton variant="light">(-)</CalcButton>
            <CalcButton variant="light">0</CalcButton>
            <CalcButton variant="light">=</CalcButton>
            <CalcButton variant="light">/</CalcButton>
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
`;
const CalcContent = styled.div`
  margin: 20px;
`;
export default CalculatorFrame;
