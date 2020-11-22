/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactFlow from 'react-flow-renderer';
import Header from '../../components/Header/Header';
import ProfileContainer from '../../components/containers/ProfileContainer';
import {
  nCommonFriends,
  nCommonInterests,
  commonCity,
  commonState,
  commonSum,
  rFriends,
  recommendations,
} from '../../utils/functions';
// import UserCard from '../../components/UserCard/UserCard';
import api from '../../services/api';

// const Friends = styled.ul`
//   margin-top: 30px;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   grid-gap: 24px;
//   list-style: none;
// `;

const H1 = styled.h1`
  margin-top: 30px;
`;

const DiscoverFriends = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // SETTING CURRENT USER
    const userSessionStorage = JSON.parse(sessionStorage.getItem('user'));
    setCurrentUser({
      ...userSessionStorage,
      friends: JSON.parse(userSessionStorage.friends),
    });

    // CALLING API TO GET ALL USERS
    api.get('/user').then((user) => {
      setUsers(user.data);
    });
  }, []);

  const elements = [];

  // CHECK IS THE USERS AND CURRENT USER HAS ALREADY BEEN DEFINED
  if (users.length !== 0 && currentUser) {
    // BUILDING UI:
    // SETTING NODES
    users.map((user) => {
      const node = {
        id: JSON.stringify(user.id),
        data: { label: user.name },
        position: {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        },
      };
      return elements.push(node);
    });

    // SETTING EDGES
    users.map((user) => {
      return Object.values(user.friends).map((friend) => {
        console.log(friend);
        const edge = {
          id: `e${user.id}-${friend}`,
          source: user.id,
          target: friend,
          animated: true,
        };
        return elements.push(edge);
      });
    });
    console.log(users);
    console.log(`current user: ${currentUser.id}`);
    console.log(
      `Possuem amigos em comum? R:${nCommonFriends(users[0], users[1])}`
    );
    console.log(
      `Possuem interesses em comum? R:${nCommonInterests(users[0], users[1])}`
    );
    console.log(
      `Possuem cidades em comum? R:${commonCity(users[0], users[1])}`
    );
    console.log(
      `Possuem estados em comum? R:${commonState(users[0], users[1])}`
    );
    console.log(`n de coisas em comum? R:${commonSum(users[0], users[1])}`);
    console.log(`São amigos? R:${rFriends(users[0], users[1])}`);
    console.log(`Recomendações R:${recommendations(currentUser, users)}`);
  }

  return (
    <>
      <ProfileContainer>
        <Header redirectTo="/my-friends" linkMessage="My Friends" />

        <H1>Your friends</H1>
        <div style={{ height: 768, background: '#fff' }}>
          <ReactFlow elements={elements} />
        </div>
      </ProfileContainer>
    </>
  );
};

export default DiscoverFriends;
