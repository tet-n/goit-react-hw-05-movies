import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${props => props.theme.spacing(7)};
`;

export const Item = styled.li`
  font-size: 12px;
  transition: transform 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98),
    box-shadow 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  :hover,
  :focus {
    transform: scale(1.05);
    box-shadow: ${props => props.theme.shadows.regular};
  }
  overflow: hidden;
  border-radius: 10px;
`;

export const Img = styled.img`
  width: 250px;
  object-fit: cover;
`;

export const Title = styled.h2`
  padding: ${props => props.theme.spacing(4, 2)};
  color: ${props => props.theme.colors.ghostWhite};
  background-color: ${props => props.theme.colors.green};
`;
