import * as Styled from './styles';

const ResumeItem = ({ title, Icon, value }) => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.HeaderTitle>{title}</Styled.HeaderTitle>
        <Icon />
      </Styled.Header>
      <Styled.Total>{value}</Styled.Total>
    </Styled.Container>
  );
};

export default ResumeItem;
