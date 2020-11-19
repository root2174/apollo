/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import logo from '../../assets/apollo-logo.svg';

const MainHeader = styled.header`
  display: flex;
  align-items: center;

  a {
    width: 100%;
    height: 60px;
    border: 0;
    border-radius: 8px;
    font-weight: 500;
    margin-top: 16px;
    background: #6c63ff;
    color: #f8f8f8;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(90%);
    }
    width: 260px;
    margin-left: auto;
    margin-top: 0;
  }
`;

const Img = styled.img`
  width: 20%;
`;

const PowerButton = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 4px;
  border: 1px solid #dcdce6;
  background: transparent;
  margin-left: 16px;
  transition: border-color 0.2s;

  &:hover {
    border-color: #999;
  }
`;

const Header = ({ redirectTo, linkMessage }) => {
  const history = useHistory();
  const handleSignOut = () => {
    sessionStorage.clear();
    history.push('/');
  };

  return (
    <MainHeader>
      <Img src={logo} alt="Apollo" />
      <Link to={redirectTo}>{linkMessage}</Link>
      <PowerButton type="button" onClick={handleSignOut}>
        <FiPower size={18} color="#6c63ff" />
      </PowerButton>
    </MainHeader>
  );
};

Header.propTypes = {
  redirectTo: PropTypes.string.isRequired,
  linkMessage: PropTypes.string.isRequired,
};

export default Header;
