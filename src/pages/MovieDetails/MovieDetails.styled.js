import { Link, NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const LinkStyle = styled(Link)`
  display: inline-block;
  margin-bottom: 32px;
  padding: 8px;
  background-color: #188064;
  color: white;

  border-radius: 4px;
`;

export const Detail = styled.p`
  margin-top: 28px;
  margin-bottom: 14px;
  font-size: 20px;
  font-weight: 700;
`;

export const LinkList = styled.ul`
  display: flex;
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
  }
`;
