import styled from '@emotion/styled';

export const OutsideWrap = styled.div`
  display: flex;
  gap: 20px;
  padding: 24px;
  background-color: ${props => props.theme.colors.darkGrey};
  border: 1px solid ${props => props.theme.colors.green};
  border-radius: 12px;
`;

export const ImgWrap = styled.div`
  object-fit: cover;
`;

export const Img = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
`;

export const InsideWrap = styled.div`
  font-size: 16px;
  color: white;
`;

export const MovieTitle = styled.h2`
  margin-bottom: ${props => props.theme.spacing(4)};

  font-size: 32px;
  color: ${props => props.theme.colors.white};
`;

export const Span = styled.span`
  color: ${props => props.theme.colors.active};
`;

export const SubTitle = styled.h3`
  margin-top: 16px;
  margin-bottom: 4px;
`;

export const List = styled.ul`
  display: flex;
  gap: 8px;
  color: ${props => props.theme.colors.active};
`;
