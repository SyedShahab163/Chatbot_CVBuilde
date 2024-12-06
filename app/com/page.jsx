"use client"
import React,{useState} from 'react'
const page = () => {
  const [description, setDescription] = useState(""); // For textarea input
  const [cvPointers, setCvPointers] = useState([]); // To store parsed response data
  const [error, setError] = useState(false); // To handle errors

  const handleGenerateCvPointers = async () => {
    if (!description || description.length > 400) {
      setError(true); // Show error if description is invalid
      return;
    }

    const data = { description };

    try {
      const response = await fetch("https://chatbotcv-t5h0c8cj.b4a.run/generate_cv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to generate CV pointers");
      }

      const result = await response.text(); // Get raw text response

      // Parse the response into a structured format
      const parsedPointers = result
        .split("\n\n") // Split by double newlines to separate companies
        .filter((block) => block.trim() !== "") // Remove empty blocks
        .map((block) => {
          const lines = block.split("\n").filter((line) => line.trim() !== ""); // Split by newlines and clean up
          return {
            companyName: lines[0]?.replace("Company name: ", "").trim(), // Extract company name
            pointers: lines.slice(1).map((line) => line.replace(/^(\d+\.\s)/, "").trim()), // Extract pointers
          };
        });

      setCvPointers(parsedPointers); // Update the state with parsed data
      // setError(false); // Reset error state
    } catch (error) {
      // console.error("Error:", error);
      // setError(true); // Show error if API fails
    }
  };

return (
  <div className="min-h-screen bg-gray-900 text-white p-6">
  <textarea
    className="w-full h-24 p-3 rounded-lg bg-[#4F4B68] text-white focus:outline-none font-bold mt-4"
    placeholder="Paste the Job Description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
  ></textarea>
  <p className="text-right">Word Limit: 400</p>
  {/* {error && <p className="text-red-500 text-sm mt-2">Please ensure the description is under 400 characters.</p>} */}
  <div className="flex items-center justify-end space-x-4">
    <button
      className="bg-[#4F4B68] hover:bg-[#4F4B68] text-white font-bold py-2 px-4 rounded-full mt-4 w-[20%]"
      onClick={handleGenerateCvPointers}
    >
      Generate CV
    </button>
  </div>
  <div className="mt-6">
    {cvPointers.length > 0 ? (
      cvPointers.map((company, index) => (
        <div key={index} className="mb-6">
          <h3 className="font-semibold text-lg">Company Name: {company.companyName}</h3>
          <ul className="list-disc pl-6 mt-2">
            {company.pointers.map((pointer, i) => (
              <li key={i}>{pointer}</li>
            ))}
          </ul>
        </div>
      ))
    ) : (
      <p className="text-gray-400">No CV pointers generated yet. Enter a description and click "Generate CV."</p>
    )}
  </div>
</div>
);
};



export default page
