import React, { useState } from 'react';
import Navbar from './components/Navbar';
import UserGrid from './components/UserGrid';
import Loader from './components/Loader';
import styled from 'styled-components';

const AppContainer = styled.div`
  text-align: center;
`;

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContainer>
      <Navbar onFetchUsers={fetchUsers} />
      {loading ? <Loader /> : <UserGrid users={users} />}
    </AppContainer>
  );
}

export default App;
