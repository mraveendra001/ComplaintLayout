import { useEffect, useState } from "react";

import filterIcon from './images/filter_icon3.png';
//import { useLocation } from "react-router-dom";
//import ReactPaginate from "react-paginate";

const ComplaintContainer = () => {
  const [complaints, setComplaints] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
 // const location = useLocation();
  //const username = location.state?.username || '';
  //const [currentPage, setCurrentPage] = useState(1);
  //const [rowsPerPage, setRowsPerPage] = useState(10);
  // let ROWS_PER_PAGE = 25;
  

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
        (complaint.CreatedDate && complaint.CreatedDate.toString().toLowerCase().includes(searchQuery.toLowerCase())) ||
        (complaint.FrontProductImageFileName && complaint.FrontProductImageFileName.toString().toLowerCase().includes(searchQuery.toLowerCase())) ||
        (complaint.BackProductImageFileName && complaint.BackProductImageFileName.toString().toLowerCase().includes(searchQuery.toLowerCase())) ||
        (complaint.OtherProductImageFileName && complaint.OtherProductImageFileName.toString().toLowerCase().includes(searchQuery.toLowerCase()))
    )
  : [];

console.log(complaints);

// const startIndex = (currentPage - 1) * rowsPerPage;
//   const endIndex = startIndex + rowsPerPage;

//   const slicedComplaints = filteredComplaints.slice(startIndex, endIndex);

 const filterByDateRange = () => {
    
   }
    

  return (
   
    <div  className="flex flex-wrap border border-slate-950 rounded-lg p-4 max-w-full overflow-x-auto">
<div className="text-gray-600 flex items-center">
  <button className="bg-slate-300 hover:bg-slate-400 rounded-full px-4 py-2">
    <img onClick={() => filterByDateRange()} className="w-7 h-7" src={filterIcon} alt="filter icon" />
  </button>
  <input
    type="search"
    name="search"
    placeholder="Search"
    className="bg-white w-60 sm:w-80 md:w-96 h-12 px-5 pr-10 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-slate-300 ml-6"
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



{filteredComplaints.length > 0 && (
        <table className="w-full mt-6">
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
              <th className="py-3 px-4 text-left" style={{ width: "5%" }}>ID</th>
              <th className="py-3 px-4 text-left" style={{ width: "5%" }}>Results</th>
              <th className="py-3 px-4 text-left" style={{ width: "10%" }}>Product Name</th>
              <th className="py-3 px-2 text-left" style={{ width: "10%" }}>Brand</th>
              <th className="py-3 px-4 text-left" style={{ width: "10%" }}>Front_Product Image</th>
              <th className="py-3 px-4 text-left" style={{ width: "15%" }}>Back_Product Image</th>
              <th className="py-3 px-4 text-left" style={{ width: "10%" }}>Other_Product Image</th>
              <th className="py-3 px-4 text-left" style={{ width: "10%" }}>Complain Date</th>
</tr>
</thead>
<tbody className="text-gray-600 text-sm font-light">
{/* {filteredComplaints.slice(startIndex, endIndex).map((complaint) => ( */}
{filteredComplaints.map((complaint) => (
<tr key={complaint.ID}>
<td className="py-3 px-4 text-left whitespace-nowrap">
{complaint.ID}
</td>
<td className="py-3 px-4 text-left">
{complaint.Result}
</td>
<td className="py-3 px-4 text-left">{complaint.ProductName}</td>
<td className="py-3 px-4 text-left">{complaint.Brand}</td>
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

<td className="py-3 px-4 text-left">{complaint.CreatedDate}</td>

</tr>
))}
</tbody>
</table>
)}
   {filteredComplaints.length === 0 && (
        <p className="text-center mt-6">No complaints found.</p>
      )}
  
  {/* <div className="m-6 px-[200px] pt-6 pb-6">
        <ReactPaginate
          activePage={currentPage}
          itemsCountPerPage={rowsPerPage}
          totalItemsCount={filteredComplaints.length}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
          itemClass="bg-white text-gray-600 hover:text-gray-700 rounded-full px-4 py-2 mx-1 focus:outline-none"
          activeClass="bg-slate-300 text-white"
          prevPageText="Previous"
          nextPageText="Next"
          disabledClass="bg-gray-300"
          pageCount={Math.ceil(filteredComplaints.length / rowsPerPage)}
        />

        {/* <div className="m-4">
          <span className="mr-2">Rows per page:</span>
          <select
            className="border rounded-md px-2 py-1"
            value={rowsPerPage}
            onChange={(event) => {
              setCurrentPage(1);
              setRowsPerPage(Number(event.target.value));
            }}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div> 
      {/* </div> */} 

    </div>
  );
};

export default ComplaintContainer;
        