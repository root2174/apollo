import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
  max-width: 1120px;
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
