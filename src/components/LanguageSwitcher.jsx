import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Location } from '@reach/router';

import { Globe } from './Icons';
import Link from './Link';
import locales from '../locales';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: transparent;
  box-shadow: none;

  svg {
    font-size: 22px;
    margin-left: 60px;
  }
`;
const toPage = pathname => pathname.split(/\/[a-z]{2}\//).pop();

const LanguageSwitcher = ({ intl: { locale } }) => (
  <Location>
    {({ location: { pathname } }) => (
      <Nav>
        <span>
          <Globe />
        </span>
        {Object.keys(locales).map(key => (
          <Link
            key={locales[key].locale}
            ml={3}
            color={key === locale ? 'red' : 'white'}
            to={
              locales[key].default
                ? `/${toPage(pathname)}`
                : `/${locales[key].path}/${toPage(pathname)}`
            }
          >
            {locales[key].localeShort}
          </Link>
        ))}
      </Nav>
    )}
  </Location>
);

LanguageSwitcher.propTypes = {
  intl: PropTypes.shape({
    locale: PropTypes.string,
  }).isRequired,
};

export default injectIntl(LanguageSwitcher);
