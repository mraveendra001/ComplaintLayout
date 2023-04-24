import Head from "./Head";
import Sidenav from "./Sidenav";
import Footer from "./Footer";
//import ComplaintDetails from "./ComplaintDetails";
import ComplaintContainer from "./ComplaintContainer";
const ViewComplaint = () => {
    
return (
    <div>
        <Head/>
       
        <div className="flex">
            <Sidenav/>
            <ComplaintContainer/>
        </div>
        
        <div>
        <Footer/>
        </div>
       
    </div>
    );
}

export default ViewComplaint;
