import Head from "./Head";
import Sidenav from "./Sidenav";
import Footer from "./Footer";
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
   
    const location = useLocation();

    //const { user } = location?.state.responseData;
    //const { username, roleName } = props.location?.state || {};
   // console.log(location?.state);
   const username = location.state?.username || '';
   const roleName = location.state?.roleName || '';
   console.log("location.state: ", location.state);
   console.log(username);
   console.log(roleName);
return (
    <div>
        <Head/>
        <h1>Hi , {username}</h1>
        <p>Your role is {roleName}.</p>
        
        <div>
            <Sidenav/>
        </div>
        <div>
        <Footer/>
        </div>

    </div>
    );
}
export default Dashboard;



// import React, { useState, useEffect } from 'react';

// const Dashboard = ({ location }) => {
//   const [responseData, setResponseData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('https://live.jfsl.in/QCMAAPI/api/API/YourAPIEndpoint');
//       const data = await response.json();
//       setResponseData(data);
//     };
//     fetchData();
//   }, []);

//   const { state } = location;
//   const { username, roleName } = state || {};

//   return (
//     <div>
//       <h1>Welcome, {username}</h1>
//       <h2>Your role is {roleName}</h2>
//       <p>API response data: {JSON.stringify(responseData)}</p>
//     </div>
//   );
// };

// export default Dashboard;
