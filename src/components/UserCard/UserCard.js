import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../common/Button';
import femaleImg from '../../assets/female.png';
import maleImg from '../../assets/male.png';

const UserCard = ({ name, age, city, state, gender, remove }) => {
  const UserLayout = styled.li`
    display: flex;
    align-items: center;
    background-color: lightgrey;
    max-width: 350px;
    justify-content: space-evenly;
    border-radius: 8px;
  `;

  const UserImg = styled.img`
    padding: 10px;
    width: 40%;
  `;

  const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const RemoveButton = styled(Button)`
    width: 90px;
    height: 40px;
    line-height: 25px;
    margin-top: 3px;
    background: #c57;
  `;

  const AddButton = styled(RemoveButton)`
    background: #ae5;
  `;

  const button = remove ? (
    <RemoveButton>Remove</RemoveButton>
  ) : (
    <AddButton>Add</AddButton>
  );

  let userImg = null;

  if (gender === 'male') {
    userImg = <UserImg src={maleImg} alt="User" />;
  } else {
    userImg = <UserImg src={femaleImg} alt="User" />;
  }

  return (
    <UserLayout>
      {userImg}
      <UserInfo>
        <strong>{name}</strong>
        <strong>{age} years</strong>
        <strong>
          {city}, {state}
        </strong>
        {button}
      </UserInfo>
    </UserLayout>
  );
};

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  remove: PropTypes.bool.isRequired,
  gender: PropTypes.string.isRequired,
};

export default UserCard;
