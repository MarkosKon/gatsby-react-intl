import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { Box, Heading, Text } from '../components/Primitives';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';

const IndexPage = ({ pageContext: { locale } }) => (
  <Layout locale={locale}>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Box height="calc(100vh - 100px)" pt={5}>
      <Heading as="h1" variant="h1">
        <FormattedMessage id="heading" />
      </Heading>
      <Text as="p" variant="wide">
        <FormattedMessage id="tagline" />
      </Text>
    </Box>
  </Layout>
);

IndexPage.propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string,
  }).isRequired,
};

export default IndexPage;
