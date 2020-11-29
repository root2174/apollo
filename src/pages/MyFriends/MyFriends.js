/* eslint-disable no-debugger */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import ProfileContainer from '../../components/containers/ProfileContainer';
import UserCard from '../../components/UserCard/UserCard';
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

const MyFriends = () => {
  const [user, setUser] = useState(null);
  const [friends, setFriends] = useState([]);
  const [userIsSet, setUserIsSet] = useState(false);

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem('user')));
    setUserIsSet(true);
  }, []);

  if (user && userIsSet) {
    const data = {
      friendsIds: user.friends,
    };
    api.post('/user/friends', data).then((res) => {
      setFriends(res.data);
      setUserIsSet(false);
    });
  }

  const handleRemoveFriend = async (id) => {
    const userFriends = JSON.parse(user.friends);
    const friendIndex = userFriends.findIndex((friend) => {
      return friend.id === id;
    });
    userFriends.splice(friendIndex, 1);
    const updatedUser = {
      ...user,
      friends: JSON.stringify(userFriends),
    };
    sessionStorage.setItem('user', JSON.stringify(updatedUser));
    setUser(updatedUser);
    await api.put(`/user/${updatedUser.id}`, updatedUser);
    const req = {
      friendsIds: JSON.stringify(userFriends),
    };
    const res = await api.post('/user/friends', req);
    setFriends(res.data);
  };

  const friendsCards = friends.map((friend) => {
    return (
      <UserCard
        key={friend.id}
        name={friend.name}
        age={friend.dob}
        city={friend.city}
        state={friend.state}
        gender={friend.gender}
        onClick={() => handleRemoveFriend(friend.id)}
        remove
      />
    );
  });

  return (
    <ProfileContainer>
      <Header
        redirectTo="/discover-friends"
        linkMessage="Discover New Friends"
      />

      <H1>Your friends</H1>

      {friendsCards.length === 0 ? (
        <p style={{ textAlign: 'center' }}>
          Go to discover friends and start adding new friends!
        </p>
      ) : (
        <Friends>{friendsCards}</Friends>
      )}
    </ProfileContainer>
  );
};

export default MyFriends;
