import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  padding: 30px 15px;
  width: 30%;
  box-shadow: 0 0 5px #ccc;

  @media (max-wdth: 750px) {
    width: 20%;

    p {
      font-size: 12px;
    }

    span {
      font-size: 20px;
    }

    svg {
      display: none;
    }
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 10px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const HeaderTitle = styled.p`
  font-size: 20px;
`;

const Total = styled.span`
  margin-top: 20px;
  font-size: 36px;
  font-weight: bold;
`;

export { Container, Header, HeaderTitle, Total };
