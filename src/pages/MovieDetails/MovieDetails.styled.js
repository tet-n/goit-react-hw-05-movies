import { Link, NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const LinkStyle = styled(Link)`
  display: inline-block;
  margin-bottom: 32px;
  padding: 8px;

  font-weight: 700;

  background-color: #188064;
  color: white;

  border-radius: 4px;

  transition: background-color 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98),
    color 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  :hover,
  :focus {
    background-color: ${props => props.theme.colors.active};
    color: ${props => props.theme.colors.grey};
  }
`;

export const Detail = styled.p`
  margin-top: 28px;
  margin-bottom: 14px;
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
`;

export const LinkList = styled.ul`
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 14px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 18px;
  color: #ffffff;
  text-decoration: underline #188064;

  transition: transform 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  :hover,
  :focus {
    transform: scale(1.02);
  }

  &.active {
    color: #28b48f;
    font-size: 24px;
  }
`;
