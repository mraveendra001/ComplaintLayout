import { useEffect, useState } from "react";
import filterIcon from './images/filter_icon3.png';

const ComplaintContainer = () => {
  const [complaints, setComplaints] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredComplaints = complaints.QCMAComplainReportDetailsList?.filter(
    (complaint) =>
      complaint.ID.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
      complaint.Result.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
      complaint.FileNames.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
      complaint.ComplainDate.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
      complaint.Product.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
      complaint.Remarks.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
      complaint.Email.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
      complaint.Pincode.toString().toLowerCase().includes(searchQuery.toLowerCase())
  );
 //console.log(complaints);
 const filterByDateRange = () => {
  
};
  return (
   
    <div className="flex flex-wrap border border-slate-400 rounded-lg p-4">
<div className="relative mx-auto text-gray-600">
  <button className="bg-slate-300 hover:bg-slate-400 rounded-full px-4 py-2">
    onClick={() => filterByDateRange()}
    <img className="w-7 h-7" src={filterIcon} alt="filter icon" />
  </button>
  <input
    type="search"
    name="search"
    placeholder="Search"
    className="bg-white w-[420px] h-12 px-5 pr-10 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-slate-300 ml-6"
    value={searchQuery}
    onChange={handleSearchInputChange}
  />
  <button type="submit" className="absolute right-0 top-0 mt-3 mr-4 py-2">
    <svg
      className="h-4 w-4 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path
        d="M15.32 13.856a8.22 8.22 0 10-1.473 1.473l4.707 4.707a1 1 0 001.414-1.414l-4.707-4.707zM2 8.219a6.219 6.219 0 1112.438 0A6.219 6.219 0 012 8.219z"
      />
    </svg>
  </button>
</div>



      {filteredComplaints?.length > 0 && (
        <table className="w-full mt-6">
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Results</th>
              <th className="py-3 px-4 text-left">File Names</th>
              <th className="py-3 px-2 text-left">Complain Date</th>
              <th className="py-3 px-4 text-left">Product</th>
              <th className="py-3 px-4 text-left">Remarks</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Pincode</th>
</tr>
</thead>
<tbody className="text-gray-600 text-sm font-light">
{filteredComplaints?.map((complaint) => (
<tr key={complaint.ID}>
<td className="py-3 px-4 text-left whitespace-nowrap">
{complaint.ID}
</td>
<td className="py-3 px-4 text-left">
{complaint.Result}
</td>
<td className="py-3  w-18 text-left">
  <a href={complaint.FileNames} target="_blank" rel="noopener noreferrer">
    {complaint.FileNames}
  </a>
</td>
<td className="py-3 px-0 text-left">
{complaint.ComplainDate}
</td>
<td className="py-3 px-4 text-left">{complaint.Product}</td>
<td className="py-3 px-4 text-left">{complaint.Remarks}</td>
<td className="py-3 px-4 text-left">{complaint.Email}</td>
<td className="py-3 px-4 text-left">{complaint.Pincode}</td>
</tr>
))}
</tbody>
</table>
)}


  {filteredComplaints?.length === 0 && (
    <p className="text-center mt-6">No complaints found.</p>
  )}
</div>
);
};

export default ComplaintContainer;
