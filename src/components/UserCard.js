import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  text-align: center;
  width: 200px;
`;

const UserImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const UserName = styled.h2`
  font-size: 1.2rem;
  margin: 10px 0;
`;

const UserEmail = styled.p`
  color: #666;
`;

const UserCard = ({ user }) => {
  return (
    <Card>
      <UserImage src={user.avatar} alt={user.first_name} />
      <UserName>{user.first_name} {user.last_name}</UserName>
      <UserEmail>{user.email}</UserEmail>
    </Card>
  );
};

export default UserCard;
