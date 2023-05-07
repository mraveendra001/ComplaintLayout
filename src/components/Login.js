import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const [role,setRole]=useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "UserName": username,
      "Password": password,
      
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    function fetchData(callback) {
      fetch("https://live.jfsl.in/QCMAAPI/api/API/QCMAUserLogin", requestOptions)
        .then(response => response.json()) // Use response.json() instead of response.text()
        .then(data => {
          callback(data); // Pass the entire parsed JSON data to the callback function
        })
        .catch(error => console.log('error', error));
    }
    
    fetchData((responseData) => {
  const qcmaUserLoginDetailsList = responseData.QCMAUserLoginDetailsList; // extract the QCMAUserLoginDetailsList array
  if (qcmaUserLoginDetailsList && qcmaUserLoginDetailsList.length > 0) { // check if the array exists and has at least one item
    const roleName = qcmaUserLoginDetailsList[0].RoleName; // extract the value of the RoleName property from the first item in the array
   
    const DisplayName = qcmaUserLoginDetailsList[0].DisplayName;
    const Email = qcmaUserLoginDetailsList[0].Email;
    //alert(DisplayName);
 sessionStorage.setItem('username',username);
   sessionStorage.setItem('userrole',roleName);
   sessionStorage.setItem('useremail',Email);
   sessionStorage.setItem('displayname',DisplayName)
   navigate('/Dashboard', { state: { username, roleName } });
   
  } else {
    setError("Invalid username or password");
  }
});
 
 
 };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
       <img
          className="w-72 h-20 absolute top-0 left-0 m-6"
          alt="jyothylabs logo"
          src="https://www.jyothylabs.com/wp-content/themes/twentynineteen-child/images/logo.png"
        />
      <h1 className="text-3xl font-bold mb-8">Login</h1>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          {error}
        </div>
      )}

      {/* <div className="border border-slate-300 p-10">  */}

      <form className="w-full max-w-sm" onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            className="h-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className="h-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      </form>
      {/* </div> */}
  
      <Footer/>
    </div>
    
  );
};

export default Login;