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
import React, { useState } from 'react';

const App = () => {
  const [showData, setShowData] = useState(false);

  const dummyData = [
    {
      month: 1,
      year: 2024,
    },
    {
      month: 2,
      year: 2024,
    },
  ];

  const handleAppraisal = () => {
    setShowData(prevState => !prevState); // Toggle data visibility on button click
  };

  return (
    <div className="flex flex-col space-y-6">
      {/* Input Section */}
      <div className="flex items-center justify-between space-x-2 mb-6 flex-row mt-6">
        <span>From</span>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="From: MM-YY"
            className="bg-[#4F4B68] text-white rounded-lg py-3 px-4 focus:outline-none"
          />
        </div>
        <span>To</span>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="To: MM-YY"
            className="bg-[#4F4B68] text-white rounded-lg py-3 px-4 focus:outline-none"
          />
        </div>
        <button
          onClick={handleAppraisal}
          className="bg-[#4F4B68] hover:bg-[#6B6584] text-white font-bold py-3 px-6 rounded-lg"
        >
          Generate Report
        </button>
      </div>

      {/* Show/Hide Dummy Data */}
      {showData && (
        <div>
          {dummyData.map((entry, index) => (
            <div key={index}>
              <h4 className="text-xl font-bold">
                {entry.month}/{entry.year}
              </h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;

