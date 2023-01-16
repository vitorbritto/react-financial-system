import Transaction from './Transaction';
import * as Styled from './styles';

const Transactions = ({ items, setItems }) => {
  const onDelete = (id) => {
    const newItems = items.filter((transaction) => transaction.id !== id);
    
    setItems(newItems);
    localStorage.setItem('transactions', JSON.stringify(newItems));
  }

  const foundTransactions = localStorage.getItem('transactions');
  console.log('🚀 ~ file: index.js:13 ~ Transactions ~ foundTransactions', foundTransactions);

  const transactionsList = (
    <Styled.Table>
      <Styled.THead>
        <Styled.Tr>
          <Styled.Th width={40}>Descrição</Styled.Th>
          <Styled.Th width={40}>Valor</Styled.Th>
          <Styled.Th width={10}>
            Tipo
          </Styled.Th>
          <Styled.Th width={10} />
        </Styled.Tr>
      </Styled.THead>
      <Styled.TBody>
        {items.map((item, index) => (
          <Transaction key={index} item={item} onDelete={onDelete} />
        ))}
      </Styled.TBody>
    </Styled.Table>
  );

  const transactionsEmpty = (
    <Styled.Message>
      <Styled.MessageText>Não existem transações até momento.</Styled.MessageText>
    </Styled.Message>
  );

  return foundTransactions ? transactionsList : transactionsEmpty;
};

export default Transactions;
