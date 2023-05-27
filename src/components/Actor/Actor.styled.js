import styled from '@emotion/styled';
import { css } from '@emotion/react';

const afterElementStyles = css`
  content: '';
  display: block;
  width: 16%;
  height: 2px;
  background-color: #2bc098;
  margin-top: 8px;
`;

export const Item = styled.li`
  &:not(:last-child)::after {
    ${afterElementStyles}
  }
`;

export const Img = styled.img`
  margin-bottom: 8px;

  width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
`;

export const Name = styled.h3`
  margin-bottom: 4px;

  font-size: 20px;
  color: ${props => props.theme.colors.white};
`;

export const Character = styled.p`
  font-style: italic;
  color: ${props => props.theme.colors.active};
`;
