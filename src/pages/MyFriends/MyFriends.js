import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import ProfileContainer from '../../components/containers/ProfileContainer';
import UserCard from '../../components/UserCard/UserCard';

const MyFriends = () => {
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

  return (
    <ProfileContainer>
      <Header
        redirectTo="/discover-friends"
        redirectMessage="Discover New Friends"
      />

      <H1>Your friends</H1>

      <Friends>
        <UserCard
          name="Lucas Magalhães"
          age="23"
          city="Macapá"
          state="AM"
          gender="male"
          remove
        />
        <UserCard
          name="Lucas Magalhães"
          age="23"
          city="Fortaleza"
          state="CE"
          gender="male"
          remove
        />
        <UserCard
          name="Lucas Magalhães"
          age="23"
          city="Fortaleza"
          state="CE"
          gender="female"
          remove
        />
        <UserCard
          name="Lucas Magalhães"
          age="23"
          city="Fortaleza"
          state="CE"
          gender="male"
          remove
        />
      </Friends>
    </ProfileContainer>
  );
};

export default MyFriends;
