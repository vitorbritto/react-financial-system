import { useState, useEffect } from 'react';

import Header from './components/Header';
import Resume from './components/Resume';
import Form from './components/Form';

import GlobalStyle from './styles/global';

const App = () => {
  const data = localStorage.getItem('transactions');
  const [transactions, setTransactions] = useState(
    data ? JSON.parse(data) : []
  );
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountExpense = transactions
      .filter((transaction) => transaction.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactions
      .filter((transaction) => !transaction.expense)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? '-' : ''} R$ ${total}`);
  }, [transactions]);

  const handleSaveTransaction = (transaction) => {
    const newTransactions = [...transactions, transaction];

    setTransactions(newTransactions);

    localStorage.setItem('transactions', JSON.stringify(newTransactions));
  };

  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form
        handleSaveTransaction={handleSaveTransaction}
        transactions={transactions}
        setTransactions={setTransactions}
      />
      <GlobalStyle />
    </>
  );
};

export default App;
