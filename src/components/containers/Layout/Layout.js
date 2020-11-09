import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  margin: auto;
  max-width: 1100px;
  overflow: auto;
  padding: 0 20px;
`;

const Layout = ({ children }) => {
  return (
    <div>
      <Container>{children}</Container>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
