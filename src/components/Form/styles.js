import styled from 'styled-components';

const Container = styled.div`
  max-width: 1120px;
  margin: 20px auto;
  background-color: white;
  box-shadow: 0 0 5px #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  gap: 10px;
  padding: 15px 0;

  @media (max-width: 750px) {
    display: grid;
  }
`;

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label``;

const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid #ccc;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-right: 10px;
    margin-left: 20px;
    accent-color: black;
    margin-top: 0;
  }
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background-color: #0984e3;
`;

export { Container, InputBlock, Label, Input, RadioGroup, Button };
