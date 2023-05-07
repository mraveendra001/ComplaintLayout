import { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import filterIcon from './images/filter_icon3.png';
import clearIcon from './images/clear_icon.png';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import 'react-date-range/dist/styles.css'; // Import the styles
import 'react-date-range/dist/theme/default.css';

const ComplaintContainer = () => {
  const [complaints, setComplaints] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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

    fetch("http://live.jfsl.in/QCMAAPI/api/API/QCMACounterfeitEscalationSystemReport", requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setComplaints(data);
      })
      .catch(error => console.log('error', error))
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
   // setCurrentPage(1);
  };
  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };
  const handleFilterByDateRange = () => {
    setShowDatePicker(true);
  };

  const handleFromDateChange = (date) => {
    setStartDate(date);
  };

  const handleToDateChange = (date) => {
    setEndDate(date);
  };

  const handleClearFilter = () => {
    setStartDate(null);
    setEndDate(null);
    setShowDatePicker(false);
    setSearchQuery("");
  };

  const downloadImage = (url, filename) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.click();
        URL.revokeObjectURL(url);
      })
      .catch((error) => console.log('Error downloading image:', error));
  };

  const filteredComplaints = complaints && complaints.QCMACounterfeitEscalationSystemDetailsList
  ? complaints.QCMACounterfeitEscalationSystemDetailsList.filter(
      (complaint) =>
        (complaint.ID && complaint.ID.toString().toLowerCase().includes(searchQuery.toLowerCase())) ||
        (complaint.Result && complaint.Result.toString().toLowerCase().includes(searchQuery.toLowerCase())) ||
        (complaint.ProductName && complaint.ProductName.toString().toLowerCase().includes(searchQuery.toLowerCase())) ||
        (complaint.Brand && complaint.Brand.toString().toLowerCase().includes(searchQuery.toLowerCase())) ||
        (complaint.Brand && complaint.RetailerName.toString().toLowerCase().includes(searchQuery.toLowerCase())) ||
        (complaint.CreatedDate && complaint.CreatedDate.toString().toLowerCase().includes(searchQuery.toLowerCase())) ||
        (complaint.FrontProductImageFileName && complaint.FrontProductImageFileName.toString().toLowerCase().includes(searchQuery.toLowerCase())) ||
        (complaint.BackProductImageFileName && complaint.BackProductImageFileName.toString().toLowerCase().includes(searchQuery.toLowerCase())) ||
        (complaint.OtherProductImageFileName && complaint.OtherProductImageFileName.toString().toLowerCase().includes(searchQuery.toLowerCase())) ||
        (complaint.InvoiceMemoImageFileName && complaint.InvoiceMemoImageFileName.toString().toLowerCase().includes(searchQuery.toLowerCase()))
        )
  : [];

console.log(complaints);
const csvData = [
  ["ID", "Product Name", "Brand", "Retailer Name", "Manufacturer Name", "Product Quantity", "Product Area", "Front Image", "Back Image", "Other Image", "InvoiceMemo Image", "Complain Date", "Invoice Reason"],
  ...filteredComplaints.map(complaint => [
    complaint.ID,
    complaint.ProductName,
    complaint.Brand,
    complaint.RetailerName,
    complaint.ManufacturerName,
    complaint.ProdcutQuantity,
    complaint.ProductArea,
    complaint.FrontProductImageFileName,
    complaint.BackProductImageFileName,
    complaint.OtherProductImageFileName,
    complaint.InvoiceMemoImageFileName,
    formatDate(complaint.CreatedDate),
    complaint.InvoiceReson
  ])
];


 


   function formatDate(dateString) {
    const date = new Date(dateString);
    
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = String(date.getFullYear());
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds} ${ampm}`;
    
    return formattedDate;
  }
    

  return (
   
    <div  className="flex flex-wrap border border-slate-950 rounded-lg p-4 max-w-full overflow-x-auto">
<div className="text-gray-600 flex items-center">
<button
          className="bg-slate-300 hover:bg-slate-400 rounded-full px-4 py-2"
          onClick={handleFilterByDateRange}
        >
          <img className="w-7 h-7" src={filterIcon} alt="filter icon" />
        </button>  
         {/* Render the date picker */}
         {showDatePicker && (
          <div className="ml-4">
            <div className="flex">
              <DatePicker
                selected={startDate}
                onChange={handleFromDateChange}
                className="bg-white rounded-full border border-gray-300 px-4 py-2 mr-2"
                placeholderText="From Date"
                dateFormat="dd/MM/yyyy"
              />
              <DatePicker
                selected={endDate}
                onChange={handleToDateChange}
                className="bg-white rounded-full border border-gray-300 px-4 py-2"
                placeholderText="To Date"
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>
        )}
         
         
         <input
  type="search"
  name="search"
  placeholder="Search"
  className="bg-white w-60 sm:w-80 md:w-96 h-12 px-5 pr-10 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-slate-300 ml-6 focus:border-slate-300 border border-gray-300"
  value={searchQuery}
  onChange={handleSearchInputChange}
/>
      <>
  {filteredComplaints.length > 0 && (
          <CSVLink data={csvData} filename="complaints.csv">
            <button className="bg-slate-300 hover:bg-slate-400 rounded-full px-4 py-2 ml-4">
              Extract
            </button>
          </CSVLink>
        )}

        <button
              className="bg-slate-300 hover:bg-slate-400 rounded-full px-4 py-2 ml-4"
              onClick={handleClearFilter}
           
              >
                <img className="w-7 h-7" src={clearIcon} alt="clear icon" />
              </button>
            </>
</div>



{filteredComplaints.length > 0 && (
  
        <table className="w-full mt-6">
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
              <th className="py-3 px-4 text-left" style={{ width: "5%" }}>ID</th>
              
              <th className="py-3 px-4 text-left" style={{ width: "9%" }}>Product Name</th>
              <th className="py-3 px-2 text-left" style={{ width: "5%" }}>Brand</th>
              <th className="py-3 px-2 text-left" style={{ width: "10%" }}>Retailer Name</th>
              <th className="py-3 px-2 text-left" style={{ width: "10%" }}>Manufacturer Name</th>
              <th className="py-3 px-2 text-left" style={{ width: "5%" }}>Product Quantity</th>
              <th className="py-3 px-2 text-left" style={{ width: "8%" }}>Product Area</th>
              <th className="py-3 px-4 text-left" style={{ width: "10%" }}>Front Image</th>
              <th className="py-3 px-4 text-left" style={{ width: "12%" }}>Back  Image</th>
              <th className="py-3 px-4 text-left" style={{ width: "10%" }}>Other Image</th>
              <th className="py-3 px-4 text-left" style={{ width: "10%" }}>InvoiceMemo Image</th>
              <th className="py-3 px-4 text-left" style={{ width: "10%" }}>Complain Date</th>
              <th className="py-3 px-4 text-left" style={{ width: "10%" }}>Invoice Reason</th>
</tr>
</thead>
<tbody className="text-gray-600 text-sm font-light">
{/* {filteredComplaints.slice(startIndex, endIndex).map((complaint) => ( */}
{filteredComplaints.map((complaint) => (
<tr key={complaint.ID}>
<td className="py-3 px-4 text-left whitespace-nowrap">
{complaint.ID}
</td>

<td className="py-3 px-4 text-left">{complaint.ProductName}</td>
<td className="py-3 px-4 text-left">{complaint.Brand}</td>
<td className="py-3 px-4 text-left">{complaint.RetailerName}</td>
<td className="py-3 px-4 text-left">{complaint.ManufacturerName}</td>
<td className="py-3 px-4 text-left">{complaint.ProdcutQuantity}</td>
<td className="py-3 px-4 text-left">{complaint.ProductArea}</td>
<td className="py-3 w-18 text-left">
        <img  className="h-24 w-24" download
        onClick={() => downloadImage(complaint.FrontProductImageFileName, 'image.jpg')} src={complaint.FrontProductImageFileName} alt="Complaint" />
               
</td>
<td className="py-3 w-18 text-left">
        <img  className="h-24 w-24" download
        onClick={() => downloadImage(complaint.BackProductImageFileName, 'image.jpg')} src={complaint.BackProductImageFileName} alt="Complaint" />
               
</td>
<td className="py-3 w-18 text-left">
        <img  className="h-24 w-24" download
        onClick={() => downloadImage(complaint.OtherProductImageFileName, 'image.jpg')} src={complaint.OtherProductImageFileName} alt="Complaint" />
               
</td>
<td className="py-3 w-18 text-left">
        <img  className="h-24 w-24" download
        onClick={() => downloadImage(`http://115.113.224.139/QualityImageFTP/${complaint.InvoiceMemoImageFileName}`, 'image.jpg')}
        src={`http://115.113.224.139/QualityImageFTP/${complaint.InvoiceMemoImageFileName}`}
        alt="Complaint" />
               
</td>

<td className="py-3 px-4 text-left">
  {formatDate(complaint.CreatedDate)}
</td>
<td className="py-3 px-4 text-left">{complaint.InvoiceReson}</td>
</tr>
))}
</tbody>
</table>
 

)}
   {filteredComplaints.length === 0 && (
        <p className="text-center mt-6">No complaints found.</p>
      )}
  


    </div>
  );
};

export default ComplaintContainer;
        