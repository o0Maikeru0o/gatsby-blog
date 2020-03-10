/** @jsx jsx */
import { jsx } from 'theme-ui';
import NavLink from './nav-link';

const Header = () => (
  <header
    sx={{
      display: 'flex',
      alignItems: 'center',
      variant: 'styles.header',
    }}
  >
    <NavLink
      to="/"
      sx={{
        variant: 'styles.navlink',
        p: 2,
      }}
    >
      MWN
    </NavLink>
    <div sx={{ mx: 'auto' }} />
    <NavLink
      to="/blog"
      sx={{
        variant: 'styles.navlink',
        p: 2,
      }}
    >
      Blog
    </NavLink>
    <NavLink
      to="/about"
      sx={{
        variant: 'styles.navlink',
        p: 2,
      }}
    >
      About
    </NavLink>
    <NavLink
      to="/contact"
      sx={{
        variant: 'styles.navlink',
        p: 2,
      }}
    >
      About
    </NavLink>
  </header>
);

export default Header;
