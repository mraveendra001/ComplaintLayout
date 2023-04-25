import Head from "./Head";
import Sidenav from "./Sidenav";
import Footer from "./Footer";
//import ComplaintDetails from "./ComplaintDetails";
// import ComplaintContainer from "./ComplaintContainer";
import User from "./User";
const ViewComplaint = () => {
    
return (
    <div>
        <Head/>
       
        <div className="flex">
            <Sidenav/>
            {/* <ComplaintContainer/> */}
            <User/>
        </div>
        
        <div>
        <Footer/>
        </div>
       
    </div>
    );
}

export default ViewComplaint;
