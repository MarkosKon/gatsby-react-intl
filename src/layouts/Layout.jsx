import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { Navbar, DesktopListEmpty } from 'already-styled-components';
// import { FormattedMessage, IntlProvider, addLocaleData } from 'react-intl';
import { IntlProvider, addLocaleData } from 'react-intl';

// Locale data
import enData from 'react-intl/locale-data/en';
import elData from 'react-intl/locale-data/el';

// Messages
import en from '../locales/en.json';
import el from '../locales/el.json';

import GlobalStyle from './GlobalStyle';
import theme from './theme';
import { Box } from '../components/Primitives';
import Link from '../components/Link';
import LanguageSwitcher from '../components/LanguageSwitcher';

const messages = { en, el };

addLocaleData([...enData, ...elData]);

const DesktopList = styled(DesktopListEmpty)`
  display: flex;
  align-items: center;
  nav {
    margin-left: auto;
    margin-right: 32px;
  }
`;

const Layout = ({ locale, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <IntlProvider locale={locale} messages={messages[locale]}>
          <>
            <GlobalStyle />
            <Navbar
              bc="rebeccapurple"
              desktopList={props => (
                <DesktopList {...props}>
                  <Link to="/" px={4} style={{ color: 'white', textDecoration: 'none' }}>
                    <h1>{data.site.siteMetadata.title}</h1>
                  </Link>
                  <LanguageSwitcher />
                </DesktopList>
              )}
            >
              <Link to="/">Home</Link>
              <Link to="/page-2">Page 2</Link>
            </Navbar>
            <Box width={[1, '80%']} m="auto" px={[3, 5]}>
              {children}
            </Box>
          </>
        </IntlProvider>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  locale: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
