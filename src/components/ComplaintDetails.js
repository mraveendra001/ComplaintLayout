import React from "react";

const ComplaintDetails = ({ info }) => {
  console.log(info);
  return (
    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
            <th className="py-3 px-4 text-left">ID</th>
            <th className="py-3 px-4 text-left">Results</th>
            <th className="py-3 px-4 text-left">FileNames</th>
            <th className="py-3 px-4 text-left">ComplainDate</th>
            <th className="py-3 px-4 text-left">Product</th>
            <th className="py-3 px-4 text-left">Remarks</th>
            <th className="py-3 px-4 text-left">Email</th>
            <th className="py-3 px-4 text-left">Pincode</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-4">{info.ID}</td>
            <td className="py-3 px-4">{info.Result}</td>
            <td className="py-3 px-4">{info.FileNames}</td>
            <td className="py-3 px-4">{info.ComplainDate}</td>
            <td className="py-3 px-4">{info.Product}</td>
            <td className="py-3 px-4">{info.Remarks}</td>
            <td className="py-3 px-4">{info.Email}</td>
            <td className="py-3 px-4">{info.Pincode}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComplaintDetails;
