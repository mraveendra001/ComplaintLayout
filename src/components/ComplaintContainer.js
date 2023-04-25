import { useEffect,useState } from "react";
import ComplaintDetails from "./ComplaintDetails";
import { Link } from "react-router-dom";

const ComplaintContainer= ()=> {

  const [complaints, setComplaints] = useState([]);

    
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "UserLoginId": "jll.developer"
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };



    fetch("http://live.jfsl.in/QCMAAPI/api/API/QCMAComplainReport", requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setComplaints(data);
    
    }
        )
    .catch(error => console.log('error', error))
  }, []);

  
  return !complaints ? (
    null
    ) : (
    
         <div className="flex flex-wrap">
          {complaints.QCMAComplainReportDetailsList && complaints.QCMAComplainReportDetailsList.map((complaint) => (
  <Link key={complaint.ID} to={"/view-complaints=" + complaint.ID}>
    <ComplaintDetails info={complaint} />
  </Link>
))}
        </div> 
    
      );
};

export default ComplaintContainer;



