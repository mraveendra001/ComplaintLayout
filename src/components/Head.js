import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Head = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handlePreventNavigation = (event) => {
      event.preventDefault();
      event.returnValue = ''; // For older browsers
    };

    // Prevent navigation using browser back and forward buttons
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener('popstate', handlePreventNavigation);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener('popstate', handlePreventNavigation);
    };
  }, []);

  const handleLogout = () => {
    // Clear session storage
    sessionStorage.clear();

    // Redirect to login page
    navigate('/');
  };

  const username = sessionStorage.getItem('displayname');
  const roleName1 = sessionStorage.getItem('userrole');

  return (
    <div>
      <header className="flex justify-between items-center bg-gray-100 p-6">
        <img
          className="w-68 h-16"
          alt="jyothylabs logo"
          src="https://www.jyothylabs.com/wp-content/themes/twentynineteen-child/images/logo.png"
        />
        <nav className="flex items-center">
          <p className="mr-4">Hi, {username}</p>
          <p className="mr-4">Role: {roleName1}</p>
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            onClick={handleLogout}
          >
            Logout
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Head;
