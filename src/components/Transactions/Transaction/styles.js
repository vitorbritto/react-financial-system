import styled from 'styled-components';

const Tr = styled.tr``;

const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? 'center' : 'start')}
    word-break: break-all;

    svg {
        width: 18px;
        height: 18px;
    }
`;

const Label = styled.span``;

export { Tr, Td, Label };
