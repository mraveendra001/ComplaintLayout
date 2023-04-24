import { useEffect,useState,Link } from "react";
import ComplaintDetails from "./ComplaintDetails";

const ComplaintContainer= ()=> {

  const [complaints, setComplaints] = useState([]);

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
    



  useEffect(() => {
    fetch("http://live.jfsl.in/QCMAAPI/api/API/QCMAComplainReport", requestOptions)
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      setComplaints(data);
    
    }
        )
    .catch(error => console.log('error', error))
  }, []);

  if (!complaints) return null;

  return (
    
     <div className="flex flex-wrap">
      {complaints.QCMAComplainReportDetailsList.map((complaint) => (
         <Link key={complaint.ID} to={"/view-complaints=" + complaint.ID}>
          <ComplaintDetails info={complaint} />
         </Link>
       ))}
    </div> 
  
  );
};

export default ComplaintContainer;
