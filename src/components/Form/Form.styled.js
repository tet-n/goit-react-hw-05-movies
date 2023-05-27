import styled from '@emotion/styled';

export const Field = styled.input`
  display: inline-block;
  margin-right: ${props => props.theme.spacing(2)};
  padding: ${props => props.theme.spacing(2)};
  height: ${props => props.theme.spacing(9)};
  border-radius: ${props => props.theme.spacing(1)};
  transition: box-shadow 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  :hover,
  :focus {
    box-shadow: ${props => props.theme.shadows.regular};
  }
`;

export const Button = styled.button`
  padding: ${props => props.theme.spacing(2, 2)};

  font-weight: 700;

  color: ${props => props.theme.colors.ghostWhite};
  background-color: ${props => props.theme.colors.green};
  border-radius: ${props => props.theme.spacing(1)};
  transition: background-color 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98),
    color 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  :hover,
  :focus {
    background-color: ${props => props.theme.colors.active};
    color: ${props => props.theme.colors.grey};
  }
`;

export const Span = styled.span`
  display: block;
  margin-top: ${props => props.theme.spacing(1)};
  color: ${props => props.theme.colors.active};
`;
