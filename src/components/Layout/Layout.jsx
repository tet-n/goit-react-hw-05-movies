import { Outlet, NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { Container, Header, Nav } from './Layout.styled';

const StyledLink = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  padding: ${props => props.theme.spacing(2, 0)};

  &.active {
    color: #28b48f;
  }
`;

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </Nav>
        </Container>
      </Header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default Layout;
