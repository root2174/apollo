/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactFlow from 'react-flow-renderer';
import Header from '../../components/Header/Header';
import UserCard from '../../components/UserCard/UserCard';
import ProfileContainer from '../../components/containers/ProfileContainer';
import { recommendations } from '../../utils/functions';
// import UserCard from '../../components/UserCard/UserCard';
import api from '../../services/api';

const Friends = styled.ul`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;
`;

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

  const handleAddFriend = async (id) => {
    const currentUserFriends = currentUser.friends;
    currentUserFriends.push(id);
    const updatedCurrentUser = {
      ...currentUser,
      friends: currentUserFriends,
    };
    setCurrentUser(updatedCurrentUser);
    const sessionUser = {
      ...currentUser,
      friends: JSON.stringify(currentUser.friends),
    };
    sessionStorage.setItem('user', JSON.stringify(sessionUser));
    await api.put(`/user/${sessionUser.id}`, sessionUser);
  };

  const elements = [];

  // CHECK IS THE USERS AND CURRENT USER HAS ALREADY BEEN DEFINED
  if (users.length !== 0 && currentUser) {
    // BUILDING UI:
    // SETTING NODES
    users.forEach((user) => {
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
    users.forEach((user) => {
      console.log(elements);
      return Object.values(user.friends).map((friend) => {
        const edge = {
          id: `e${user.id}-${friend}`,
          source: JSON.stringify(user.id),
          target: JSON.stringify(friend),
          animated: false,
          arrowHeadType: 'arrow',
        };
        return elements.push(edge);
      });
    });
  }

  let layout = null;
  if (currentUser) {
    if (currentUser.friends.length === 0) {
      const updatedUsers = users.filter((value) => value.id !== currentUser.id);
      layout = updatedUsers.map((recommendation) => {
        return (
          <UserCard
            key={recommendation.id}
            name={recommendation.name}
            age={recommendation.dob}
            city={recommendation.city}
            state={recommendation.state}
            gender={recommendation.gender}
            remove={false}
            onClick={() => handleAddFriend(recommendation.id)}
          />
        );
      });
    } else {
      const friendsRecommendations = recommendations(currentUser, users);
      layout = friendsRecommendations.map((recommendation) => {
        return (
          <UserCard
            key={recommendation.id}
            name={recommendation.name}
            age={recommendation.dob}
            city={recommendation.city}
            state={recommendation.state}
            gender={recommendation.gender}
            remove={false}
            onClick={() => handleAddFriend(recommendation.id)}
          />
        );
      });
    }
  }

  return (
    <>
      <ProfileContainer>
        <Header redirectTo="/my-friends" linkMessage="My Friends" />

        <H1>Your friends</H1>
        <div style={{ height: 768, background: '#fff' }}>
          <ReactFlow elements={elements} />
        </div>
        <Friends>{layout}</Friends>
      </ProfileContainer>
    </>
  );
};

export default DiscoverFriends;
