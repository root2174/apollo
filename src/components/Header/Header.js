/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainHeader = styled.header``;

const Navbar = styled.nav`
  background-color: #333;
  color: #fff;
  overflow: auto;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  float: left;
  padding: 10px;
  margin-left: 20px;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  &:nth-child(2) {
    margin-left: 100px;
  }
`;

const ListItem = styled.li`
  margin-left: 20px;

  a {
    color: #fff;
    display: block;
    height: 100%;
    padding: 27px;
  }

  a:hover {
    background-color: #444;
    color: #f7c08a;
  }
`;

const Header = () => {
  return (
    <MainHeader>
      <Navbar>
        <Logo>APOLLO</Logo>
        <List>
          <ListItem>
            <Link to="/my-friends">My Friends</Link>
          </ListItem>
          <ListItem>
            <Link to="/discover-friends">Discover Friends</Link>
          </ListItem>
        </List>
      </Navbar>
    </MainHeader>
  );
};

export default Header;
