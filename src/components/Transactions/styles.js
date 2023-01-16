import styled from 'styled-components';

const Table = styled.table`
  background-color: white;
  padding: 20px;
  box-shadow: 0 0 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  width: 100%;
`;

const THead = styled.thead``;

const TBody = styled.tbody``;

const Tr = styled.tr``;

const Th = styled.th`
  border-bottom: inset;
  padding-bottom: 5px;
  text-align: ${(props) => (props.alignCenter ? 'center' : 'start')};
  width: ${(props) => (props.width ? '%' : 'auto')};
`;

const Message = styled.div`
  background-color: #FFFF22;
  padding: 20px 0;
  box-shadow: 0 0 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
`;

const MessageText = styled.div`
  color: black;
  font-size: 20px;
  text-align: center;
  font-weight: 700;
`;

export { Table, THead, TBody, Tr, Th, Message, MessageText };
