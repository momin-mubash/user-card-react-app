import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  background-color: #282c34;
  padding: 10px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const Button = styled.button`
  background-color: #61dafb;
  border: none;
  padding: 10px 20px;
  color: #282c34;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #21a1f1;
  }
`;

const Navbar = ({ onFetchUsers }) => {
  return (
    <NavbarContainer>
      <Brand>UserCardApp</Brand>
      <Button onClick={onFetchUsers}>Get Users</Button>
    </NavbarContainer>
  );
};

export default Navbar;
