/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx } from 'theme-ui'

const Header = () => (
  <header
    sx={{
      display: 'flex',
      alignItems: 'center',
      variant: 'styles.header',
    }}>
    <Link to='/'
      sx={{
        variant: 'styles.navlink',
        p: 2,
      }}>
      MWN
  </Link>
    <div sx={{ mx: 'auto' }} />
    <Link to='/blog'
      sx={{
        variant: 'styles.navlink',
        p: 2,
      }}>
      Blog
  </Link>
    <Link to='/about'
      sx={{
        variant: 'styles.navlink',
        p: 2,
      }}>
      About
  </Link>
    <Link to='/contact'
      sx={{
        variant: 'styles.navlink',
        p: 2,
      }}>
      About
  </Link>
  </header>
);

export default Header;
