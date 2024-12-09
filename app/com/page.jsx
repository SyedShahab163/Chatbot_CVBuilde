"use client"
import { useState } from "react";

const AppraisalReport = () => {
  const [copyText, setCopyText] = useState([]); // State for report data
  const [copySuccess, setCopySuccess] = useState(false); // State to manage success message

  const GenerateAppraisalPointer = async () => {
    const reportData = [
      { month: "01", year: "2024", work1: "Completed project A", work2: "Led team meeting" },
      { month: "02", year: "2024", work1: "Developed feature B", work2: "Started a new role" },
    ];

    try {
      setCopyText(reportData); // Update report data
    } catch (error) {
      console.error("Error generating report:", error);
    }
  };

  const handleCopyText = () => {
    if (copyText.length > 0) {
      const textToCopy = copyText
        .map(
          (entry) =>
            `${entry.month}/${entry.year}\n` +
            Object.keys(entry)
              .filter((key) => key.startsWith("work"))
              .map((key) => `- ${entry[key]}`)
              .join("\n")
        )
        .join("\n\n");

      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          setCopySuccess(true); // Show success message
          setTimeout(() => setCopySuccess(false), 2000); // Hide message after 2 seconds
        })
        .catch((err) => {
          console.error("Failed to copy text:", err); // Handle copy error
        });
    }
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
          onClick={GenerateAppraisalPointer}
          className="bg-[#4F4B68] hover:bg-[#6B6584] text-white font-bold py-3 px-6 rounded-lg"
        >
          Generate Report
        </button>
      </div>

      {/* Report Section */}
      <div className="mt-6 bg-[#4F4B68] p-4 rounded-lg text-white relative">
        {copyText.length > 0 ? (
          copyText.map((entry, index) => (
            <div key={index} className="mb-6">
              <h3 className="font-semibold text-lg">
                {entry.month}/{entry.year}
              </h3>
              <ul className="list-disc pl-6 mt-2">
                {Object.keys(entry)
                  .filter((key) => key.startsWith("work"))
                  .map((key, i) => (
                    <li key={i}>{entry[key]}</li>
                  ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No report generated yet.</p>
        )}

        {/* Success Message */}
        {copySuccess && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-sm font-bold py-2 px-4 rounded-lg shadow-lg mt-4">
            Copy successfully!
          </div>
        )}
      </div>

      {/* Copy Button */}
      <div className="flex items-center justify-end space-x-4">
        <button
          onClick={handleCopyText}
          className="bg-[#4F4B68] hover:bg-[#4F4B68] text-white font-bold py-2 px-4 rounded-full mt-4 w-[20%]"
        >
          Copy Text
        </button>
      </div>
    </div>
  );
};

export default AppraisalReport;
