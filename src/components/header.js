import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const HeaderContainer = styled.header`
  background: #eee;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 5vw;

@media (min-width: calc(550px + 10vw)) {
  padding-left: calc((100vw - 550px - 0.5rem) / 2);
  padding-right: calc((100vw - 550px - 0.5rem) / 2);
}
`;

const NavBar = styled.nav`
  margin-top: 0;
`;

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${(props) => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #222;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const Header = () => (
  <HeaderContainer>
    <NavLink to="/" fontWeight="bold">
      FEM Workshop
    </NavLink>
    <NavBar>
      <NavLink to="/" activeClassName="current-page">
        Home
      </NavLink>
      <NavLink to="/about/" activeClassName="current-page">
        About
      </NavLink>
      <NavLink to="/contact/" activeClassName="current-page">
        Contact
      </NavLink>
    </NavBar>
  </HeaderContainer>
);

export default Header;
