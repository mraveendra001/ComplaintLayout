import Head from "./Head";
import Sidenav from "./Sidenav";
import Footer from "./Footer";
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
   
    const location = useLocation();
    const username = location.state?.username || '';
    const roleName = location.state?.roleName || '';
   
    return (
        <div className="min-h-screen flex flex-col">
            <Head/>
            <h1>Hi, {username}</h1>
            <p>Your role is {roleName}.</p>
            
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
