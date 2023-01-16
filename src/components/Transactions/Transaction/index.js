import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from 'react-icons/fa';

import * as Styled from './styles';

const Transaction = ({ item, onDelete }) => {
  return (
    <Styled.Tr>
      <Styled.Td>{item.description}</Styled.Td>
      <Styled.Td>{item.amount}</Styled.Td>
      <Styled.Td>
        {item.expense 
          ? ( <FaRegArrowAltCircleDown color="red" /> ) 
          : ( <FaRegArrowAltCircleUp color="green" /> )
        }
      </Styled.Td>
      <Styled.Td>
        <FaTrash onClick={() => onDelete(item.id)} />
      </Styled.Td>
    </Styled.Tr>
  );
};

export default Transaction;
