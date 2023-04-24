import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

  useEffect(() => {
    async function logout() {
      await fetch('/api/logout', { method: 'POST' });
      navigate.push('/login');
    }
    logout();
  }, [navigate]);

  return (
    <div>
      <h1>Logging out...</h1>
    </div>
  );
}

export default Logout;
