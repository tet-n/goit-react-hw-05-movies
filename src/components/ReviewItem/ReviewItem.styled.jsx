import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { BsPersonVideo2 } from 'react-icons/bs';

const afterElementStyles = css`
  content: '';
  display: block;
  width: 16%;
  height: 2px;
  background-color: #188064;
  margin-top: 8px;
`;

export const Item = styled.li`
  &:not(:last-child)::after {
    ${afterElementStyles}
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;
export const StyledIcon = styled(BsPersonVideo2)`
  color: ${props => props.theme.colors.active};
`;

export const Title = styled.h3`
  color: ${props => props.theme.colors.active};
`;

export const Content = styled.p`
  color: ${props => props.theme.colors.lightGrey};
`;
