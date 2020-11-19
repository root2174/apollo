import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import ProfileContainer from '../../components/containers/ProfileContainer';
import UserCard from '../../components/UserCard/UserCard';
// eslint-disable-next-line no-unused-vars
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
  const [user, setUser] = useState('');
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem('user')));
  }, []);

  useEffect(() => {
    const data = {
      friendsIds: user.friends,
    };
    api.post('/user/friends', data).then((res) => setFriends(res.data));
  }, [user]);

  const friendsCards = friends.map((friend) => {
    return (
      <UserCard
        key={friend.id}
        name={friend.name}
        age={friend.dob}
        city={friend.city}
        state={friend.state}
        gender={friend.gender}
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

      <Friends>{friendsCards}</Friends>
    </ProfileContainer>
  );
};

export default MyFriends;
