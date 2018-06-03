import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'scss/index.scss';
import 'fontawesome';

const Layout = ({ children, data }) => (
  <div className="container-lg">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div>{children()}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
