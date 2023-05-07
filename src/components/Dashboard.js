import Head from "./Head";
import Sidenav from "./Sidenav";
import Footer from "./Footer";


const Dashboard = () => {
   
    
    // const username = sessionStorage.getItem('DisplayName');
    // const roleName = sessionStorage.getItem('roleName');
    
   
    return (
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
}

export default Dashboard;