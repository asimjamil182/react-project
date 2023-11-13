import React, { useState, useEffect } from 'react';
import axios from 'axios';
import auth from '../api/auth';

function Test() {
  const [token, setToken] = useState(null); // Store the token
  const [data, setData] = useState(null); // Store the response data
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle user login
  const login = async () => {
    try {
      const response = await auth.post('/auth.php', {
        username: username,
        password: password,
      });
      const { token } = response.data;
      setToken(token);
      setUsername(''); // Clear the username input
      setPassword(''); // Clear the password input
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  // Function to make an authenticated request
  const fetchData = async () => {
    try {
      const response = await auth.get('/auth.php', {
        headers: {
          Authorization: `Bearer ${token}`, // Attach the JWT token in the request headers
        },
      });
      setData(response.data);
    } catch (error) {
      console.error('Authenticated request failed:', error);
    }
  };

  useEffect(() => {
    if (token) {
      // Call fetchData when the token is available
      fetchData();
    }
  }, [token]);

  return (
    <div className="App">
      <h1>Authenticated Request Example</h1>
      {token ? (
        <>
          <p>You are logged in!</p>
          <button onClick={fetchData}>Fetch Protected Data</button>
          {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
}

export default Test;
