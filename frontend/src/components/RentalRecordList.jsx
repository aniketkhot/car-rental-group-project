import React, { useEffect, useState } from "react";
import axios from "axios";

const formatDate = (dateStr) => {
  if (!dateStr || dateStr === "Pending") return "Pending";
  const options = { day: "numeric", month: "short", year: "numeric" };
  return new Date(dateStr).toLocaleDateString("en-GB", options);
};

function RentalRecordList() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRentalRecords = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/rental-records");
        setRecords(res.data);
      } catch (err) {
        console.error("Failed to fetch rental records:", err);
      }
    };
    fetchRentalRecords();
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-['Roboto_Slab'] bg-[#FBF8EF]">
      <h2 className="text-2xl font-bold my-6 px-8">Rental Records</h2>

      <div className="shadow-[0_0_10px_10px_rgba(0,0,0,0.25)] rounded p-6 mx-8 bg-white">
        <table className="w-full table-auto">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2">Car name</th>
              <th className="p-2">Customer name</th>
              <th className="p-2">Lease date</th>
              <th className="p-2">Return date</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                <td className="p-2">{record.carName}</td>
                <td className="p-2">{record.customerName}</td>
                <td className="p-2">{formatDate(record.leaseDate)}</td>
                <td className="p-2">{formatDate(record.returnDate)}</td>
                <td className="p-2">{record.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="bg-[#78B3CE] text-black font-semibold text-center py-4 mt-auto">
        <div className="flex justify-between px-12">
          <span>Support</span>
          <span>Terms Of Privacy Policy</span>
        </div>
      </footer>
    </div>
  );
}

export default RentalRecordList;


