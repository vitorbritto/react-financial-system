import { useState } from 'react';

import Transactions from '../Transactions';
import * as Styled from './styles';

const Form = ({ handleSaveTransaction, transactions, setTransactions }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [isExpense, setExpense] = useState(false);

  const generateId = () => Math.round(Math.random() * 1000);

  const handleSubmit = () => {
    if (!description || !amount) {
      alert('Informe a descrição e o valor');
      return;
    }

    if (amount < 1) {
      alert('Valores negativos não são permitidos.');
      return;
    }

    const transaction = {
      id: generateId(),
      expense: isExpense,
      description,
      amount,
    };

    handleSaveTransaction(transaction);

    setDescription('');
    setAmount('');
  };

  return (
    <>
      <Styled.Container>
        <Styled.InputBlock>
          <Styled.Label>Descrição</Styled.Label>
          <Styled.Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Styled.InputBlock>
        <Styled.InputBlock>
          <Styled.Label>Valor</Styled.Label>
          <Styled.Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Styled.InputBlock>
        <Styled.RadioGroup>
          <Styled.Input
            type="radio"
            id="optIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(isExpense)}
          />
          <Styled.Label htmlFor="optIncome">Entrada</Styled.Label>
          <Styled.Input
            type="radio"
            id="optExpense"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <Styled.Label htmlFor="optExpense">Saída</Styled.Label>
        </Styled.RadioGroup>
        <Styled.Button onClick={handleSubmit}>Adicionar</Styled.Button>
      </Styled.Container>

      <Transactions items={transactions} setItems={setTransactions} />
    </>
  );
};

export default Form;
