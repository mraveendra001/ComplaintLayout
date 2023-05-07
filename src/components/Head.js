import React from "react";

const Head = () => {
  
    // const username = sessionStorage.getItem('DisplayName');
    const username=sessionStorage.getItem('displayname')
    const roleName1 = sessionStorage.getItem('userrole');
  return (
    <div>
      <header className="flex justify-between items-center bg-gray-100 p-6">
        <img
          className="w-72 h-20"
          alt="jyothylabs logo"
          src="https://www.jyothylabs.com/wp-content/themes/twentynineteen-child/images/logo.png"
        />
        <nav className="mr-16">
         <h1>Hi, {username}</h1>
            <p>Your role is {roleName1}.</p> 
        </nav>
      </header>
    </div>
  );
};

export default Head;
