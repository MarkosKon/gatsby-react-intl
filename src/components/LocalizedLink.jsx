import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import Link from './Link';

import locales from '../locales';

const LocalizedLink = ({ to, intl: { locale }, ...props }) => {
  const path = locales[locale].default ? to : `/${locale}${to}`;

  return <Link {...props} to={path} />;
};

LocalizedLink.propTypes = {
  to: PropTypes.string.isRequired,
  intl: PropTypes.shape({
    locale: PropTypes.string,
  }).isRequired,
};

export default injectIntl(LocalizedLink);
