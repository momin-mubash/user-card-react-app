import React from 'react';
import UserCard from './UserCard';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin: 20px;
`;

const UserGrid = ({ users }) => {
  return (
    <GridContainer>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </GridContainer>
  );
};

export default UserGrid;
