 "use client"
// import { useState } from 'react';

// const CVGenerator = () => {
//   const [description, setDescription] = useState(""); // Textarea value for job description
//   const [cvPointers, setCvPointers] = useState([]); // Store parsed API response
//   const [error, setError] = useState(false); // For error state

//   // Handle Generate CV action
//   const handleGenerateCvPointers = async () => {
//     if (!description || description.length > 400) {
//       setError(true); // Error if description is invalid
//       return;
//     }

//     const data = { description };

//     try {
//       const response = await fetch("https://chatbotcv-t5h0c8cj.b4a.run/generate_cv", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to generate CV pointers");
//       }

//       const result = await response.text(); // Get the raw text response

//       // Parse the text response into structured data
//       const parsedPointers = result
//         .split("\n\n") // Split the response by double newlines
//         .filter((block) => block.trim() !== "") // Clean empty blocks
//         .map((block) => {
//           const lines = block.split("\n").filter((line) => line.trim() !== ""); // Split by newlines
//           return {
//             companyName: lines[0]?.replace("Company name: ", "").trim(), // Extract company name
//             pointers: lines.slice(1).map((line) => line.replace(/^(\d+\.\s)/, "").trim()), // Extract list of pointers
//           };
//         });

//       setCvPointers(parsedPointers); // Update the state with parsed data
//       setError(false); // Reset error state
//     } catch (error) {
//       console.error("Error:", error);
//       setError(true); // Set error if API call fails
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6">
//       <textarea
//         className="w-full h-24 p-3 rounded-lg bg-[#4F4B68] text-white focus:outline-none font-bold mt-4"
//         placeholder="Paste the Job Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       ></textarea>
//       <p className="text-right">Word Limit: 400</p>
//       {error && <p className="text-red-500 text-sm mt-2">Please ensure the description is under 400 characters.</p>}
//       <div className="flex items-center justify-end space-x-4">
//         <button
//           className="bg-[#4F4B68] hover:bg-[#4F4B68] text-white font-bold py-2 px-4 rounded-full mt-4 w-[20%]"
//           onClick={handleGenerateCvPointers}
//         >
//           Generate CV
//         </button>
//       </div>
//       <div className="mt-6">
//         {cvPointers.length > 0 ? (
//           cvPointers.map((company, index) => (
//             <div key={index} className="mb-6">
//               <h3 className="font-semibold text-lg">Company Name: {company.companyName}</h3>
//               <ul className="list-disc pl-6 mt-2">
//                 {company.pointers.map((pointer, i) => (
//                   <li key={i}>{pointer}</li>
//                 ))}
//               </ul>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-400">No CV pointers generated yet. Enter a description and click "Generate CV."</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CVGenerator;
import React, { useState } from "react";
import axios from "axios";

const Page = () => {
  const [fromDate, setFromDate] = useState(""); // State for "From" input
  const [toDate, setToDate] = useState(""); // State for "To" input
  const [journalEntries, setJournalEntries] = useState([]); // API response data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(false); // Error state

  // const handleAppraisal = async () => {
  //   setLoading(true);
  //   setError(false);

  //   try {
  //     const response = await axios.post(
  //       "https://chatbotcv-t5h0c8cj.b4a.run/generate_appraisal_report",
  //       {
  //         from_date: fromDate,
  //         to_date: toDate,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     // Update journal entries state with API response
  //     setJournalEntries(response.data || []); // Handle empty response
  //   } catch (err) {
  //     console.error("API Error:", err);
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const [startDate, setStartDate] = useState(""); // State for "From" input
  const [endDate, setEndDate] = useState(""); // State for "To" input

  // Initialize with hardcoded dummy data
  const [appraisalData, setAppraisalData] = useState([
    {
      month: "January",
      year: 2024,
      details: ["Completed 5 projects", "Achieved 20% revenue growth"],
    },
    {
      month: "February",
      year: 2024,
      details: ["Introduced new workflow", "Increased team efficiency by 10%"],
    },
  ]);

  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [hasError, setHasError] = useState(false); // Error state

  const handleAppraisal = async () => {
    setIsLoading(true);
    setHasError(false);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/generate_appraisal_report",
        {
          from_date: startDate,
          to_date: endDate,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Update state with API response
      setAppraisalData(response.data || []);
    } catch (err) {
      console.error("API Error:", err);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="p-6 bg-[#131120] min-h-screen text-white">
      {/* Date Range Input Section */}
      <div className="flex items-center justify-between space-x-2 mb-6">
        <div className="flex flex-col">
          <span>From</span>
          <input
            type="text"
            placeholder="From: YY-MM-DD"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="bg-[#4F4B68] text-white rounded-lg py-3 px-4 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <span>To</span>
          <input
            type="text"
            placeholder="To: YY-MM-DD"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="bg-[#4F4B68] text-white rounded-lg py-3 px-4 focus:outline-none"
          />
        </div>
      </div>

      {/* Generate Button */}
      <button
        onClick={handleAppraisal}
        className="bg-[#4F4B68] hover:bg-[#6B6584] text-white font-bold py-2 px-4 rounded-full mb-6"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Report"}
      </button>

      {/* Error Message */}
      {error && (
        <div className="text-red-500 font-semibold mb-4">
          Failed to fetch data. Please try again.
        </div>
      )}

      {/* Journal Entries Section */}
      <div className="space-y-6">
        {journalEntries.length > 0 ? (
          journalEntries.map((entry, index) => (
            <div
              key={index}
              className="bg-[#4F4B68] p-4 rounded-lg shadow-lg mb-4"
            >
              <div className="text-center font-semibold text-lg">
                {entry.month} / {entry.year}
              </div>
              <ul className="list-disc pl-6">
                {entry.details.map((detail, idx) => (
                  <li key={idx} className="text-sm">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <div className="text-gray-400">No data available. Please generate a report.</div>
        )}
      </div>
    </div>
  );
};

export default Page;
