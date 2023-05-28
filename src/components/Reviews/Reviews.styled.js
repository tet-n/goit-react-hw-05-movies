import styled from '@emotion/styled';

export const List = styled.ul`
  color: white;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(7)};
`;

export const Info = styled.p`
  font-style: italic;
  color: white;
`;
