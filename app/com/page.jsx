"use client"
import { useState } from "react";

const AppraisalComponent = () => {
  const [report, setReport] = useState([]);

  const GenerateAppraisalPointer = async () => {
    const reportData = [
      { month: "01", year: "2024", work1: "Completed project A", work2: "Led team meeting" },
      { month: "02", year: "2024", work2: "Started a new role",work1: "Developed feature B"  },
  
    ];

    try {
      setReport(reportData); // Set the hardcoded data to state
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <button
        onClick={GenerateAppraisalPointer}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Generate Report
      </button>

      <div className="mt-6 bg-[#4F4B68] p-4 rounded-lg text-white">
        {report.length > 0 ? (
          report.map((entry, index) => (
            <div key={index} className="mb-6">
              <h3 className="font-semibold text-lg">
                {entry.month}/{entry.year}
              </h3>
              <ul className="list-disc pl-6 mt-2">
                {Object.keys(entry)
                  .filter((key) => key.startsWith("work")) // Only include "work"-prefixed keys
                  .map((key, i) => (
                    <li key={i}>{entry[key]}</li>
                  ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-gray-400">
            No CV pointers generated yet. Enter a description and click "Generate CV."
          </p>
        )}
      </div>
    </div>
  );
};

export default AppraisalComponent;
