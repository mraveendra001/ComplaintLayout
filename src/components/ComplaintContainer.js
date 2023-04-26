import { useEffect, useState } from "react";


const ComplaintContainer = () => {

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

      })
      .catch(error => console.log('error', error))
  }, []);

  return (
    <div className="flex flex-wrap">
      {complaints.QCMAComplainReportDetailsList &&
        <>
          
          <tbody className="text-gray-600 text-sm font-light">
  {complaints.QCMAComplainReportDetailsList.map((complaint, index) => (
    <>
      {index === 0 && (
        <tr key="header" className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
          <th className="py-3 px-4 text-left">ID</th>
          <th className="py-3 px-4 text-left">Results</th>
          <th className="py-3 px-4 text-left">FileNames</th>
          <th className="py-3 px-4 text-left">ComplainDate</th>
          <th className="py-3 px-4 text-left">Product</th>
          <th className="py-3 px-4 text-left">Remarks</th>
          <th className="py-3 px-4 text-left">Email</th>
          <th className="py-3 px-4 text-left">Pincode</th>
        </tr>
      )}
      <tr key={complaint.ID} className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-4">{complaint.ID}</td>
        <td className="py-3 px-4">{complaint.Result}</td>
        <td className="py-3 px-4">{complaint.FileNames}</td>
        <td className="py-3 px-4">{complaint.ComplainDate}</td>
        <td className="py-3 px-4">{complaint.Product}</td>
        <td className="py-3 px-4">{complaint.Remarks}</td>
        <td className="py-3 px-4">{complaint.Email}</td>
        <td className="py-3 px-4">{complaint.Pincode}</td>
      </tr>
    </>
  ))}
</tbody>

        </>
      }
    </div>
  );
};

export default ComplaintContainer;
