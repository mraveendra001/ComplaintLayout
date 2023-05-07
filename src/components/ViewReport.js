import React from "react";
import Head from "./Head";
import Footer from "./Footer";
import Sidenav from "./Sidenav";
const ViewReport = () =>{
    
    
    return(
        <div className="min-h-screen flex flex-col">
        <Head/>
        {/* <h1>Hi, {username}</h1>
        <p>Your role is {roleName}.</p> */}
        
        <div className="flex-1 flex">
            <Sidenav className="h-full" />
        </div>

        <div className="mt-auto">
            <Footer/>
        </div>
    </div>
    );
};

export default ViewReport;