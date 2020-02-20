/** @jsx jsx */
import { jsx } from 'theme-ui';
import Helmet from 'react-helmet';
import Header from './header';
import useSiteMetadata from '../hooks/use-sitemetadata';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // set this to `minHeight: '100vh'` for full viewport height
        minHeight: 256,
      }}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header
        sx={{
          width: '100%',
        }} />
      <main
        sx={{
          width: '100%',
          flex: '1 1 auto',
        }}>
        {children}
      </main>
      <footer
        sx={{
          width: '100%',
        }}>
        Footer
      </footer>
    </div>
  );
};

export default Layout;
