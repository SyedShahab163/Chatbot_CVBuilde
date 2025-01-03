 "use client";
 import { useState } from "react";
 import { useRef } from 'react';
 import Link from 'next/link';
 import axios from "axios";
 import apiUrls from "../globalapis/page"
 export default function DetailPage() {
  const [selectedType, setSelectedType] = useState(""); // To store selected type
  const [description, setDescription] = useState(""); // To cv generatestore description
  const [loading, setLoading] = useState(false);
  const [cv_description, set_cv_description] = useState(""); // To cv generatestore description
  const [cv_error, set_Cv_Error] = useState(false);


  const [apiResponse, setApiResponse] = useState(""); // To store API response
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [apiData, setApiData] = useState([]);

  const [date,  setdate] = useState([]);
  const [keyword,  setkeyword] = useState([]);
  const [company_name,  setcompany_name] = useState([]);
  const [detailDescription, setDetailDescription] = useState('');

  // const [Description, setDescription] = useState('');
  const [cvPointers, setCvPointers] = useState([]);
  const [report, setreport] = useState([]);
  const [errors, setErrors] = useState(false);
  const [name ,setname] = useState()

  const [bulkData, setBulkData] = useState([]); // Initialize state with the API data
  const cvRef = useRef(null);
  const viewJourRef = useRef(null);
    
  const handleSubmit = async () => {
    setLoading(true);
    if (!selectedType || !description) {
      alert("Please select a type and add a description!");
      return;
    }

    try {
      // const response = await fetch("https://chatbotcv-t5h0c8cj.b4a.run/entry_to_gpt", {
      const response = await fetch(apiUrls.entry_to_gpt, {   
  
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ entry_type: selectedType, description }),
      });

     if (response.ok) {
        const data_gpt = await response.json();
        console.log("---data_gpt---------------------", data_gpt);
        console.log("---data_gpt.date---------------------", data_gpt.date);
        console.log("---data_gpt.company_name---------------------", data_gpt.company_name);
        // setApiResponse(`Success: ${JSON.stringify(data_gpt)}`);

        // Update state variables with the data from the API response
        setdate(data_gpt.date || '');
        setcompany_name(data_gpt.company_name || '');
        setkeyword(data_gpt.keywords || '');
        setDetailDescription(data_gpt.detail_description || '');
        // setDetailDescription(data_gpt.detail_description || '');
      } else {
        setApiResponse(`Error: Failed to submit. Status: `);
        //${response.status}
      }
    } catch (error) {
      setLoading(false);
      setApiResponse(`Error: `);
     // ${error.message}
    }
  };

  // ---------------Handle pdf file----------------------------
  const handleFileSelect = (e) => {
    console.log("----e.target---------------",e.target);

    // const files = e.target.files;
    const file = e.target.files[0];
    console.log("----file---------------",file);

      if (file) {
        setSelectedFile(file); //selectedFile
        setFileName(file.name);
        console.log("-----file name has been set");
      }
    
  };

  // Function to handle file submission and API call
  const handleSubmits = async () => {
    if (!selectedFile) {
      alert('Please select a file before submitting');
      return;
    }

    const formData = new FormData();
    formData.append('files', selectedFile);
    console.log("-------formData-----------------------",formData)

    // try {
      // const response = await fetch('https://chatbotcv-t5h0c8cj.b4a.run/upload_pdf', { //
        const response = await fetch(apiUrls.upload_pdf, {   
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload file');
      }

      const data = await response.json(); // API response
      console.log("----upload api response------------------------------",data)
      // setApiData(data); 
      setBulkData(data);
      // alert('File uploaded successfully');
    // } catch (error) {
    // //   console.error('Error:', error);
    //   alert('Error uploading file');
    // }
  };
  
  const handleFileSelectAndSubmit = (e) => {
    handleFileSelect(e);
    // handleSubmit();
  };

  // useEffect(() => {
  //   // This effect will run whenever fileName changes
  //   console.log("FileName updated:", fileName);
  // }, [fileName]);

  const [keywords, setKeywords] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  // State for journal entries
  const [journalEntries, setJournalEntries] = useState([]);

  const [error, setError] = useState(false);
  const [journalEntrie, setJournalEntrie] = useState([]);
  // Dummy Data (for fallback in case of API error)
  const dummyData = [
    {
      date: "2024-01-01",
      company_name: "Company 1",
      keywords: "Test Keyword 1",
      detail_description: "This is a dummy description for testing purposes.",
    },
    {
      date: "2025-01-01",
      company_name: "Dummy Company 2",
      keywords: "Test Keyword 2",
      detail_description: "Another dummy description for testing.",
    },
  ];

  // Function to handle API request
  const fetchJournalEntrieshandle = async () => {
    setLoading(true);
    setError(false);

    try {
      // API call
      const response = await axios.get(apiUrls.view_journal, {
        params: {
          keywords,
          from_date: fromDate,
          to_date: toDate,
        },
      });
// console.log(view_journal,"------==============view_journal====")
      // Update journal entries state
      setJournalEntries(response.data || []);
    } catch (err) {
      // console.error("API Error:", err);

      // Use dummy data as fallback
      setError(true);
      // setJournalEntries(dummyData);
    } finally {
      setLoading(false);
    }


  // -----------------------------------------------------------------RECORD entry  

  };
    const handleRecordClick = async () => {
    const data = {
      date: date,
      company_name: company_name,
      keyword: keyword,
      detail_description: detailDescription,
    };
    console.log("-------entry record-----------------data---------------------------",data)

    try {
      const response = await fetch(apiUrls.record_entry, {
        // const response = await fetch('http://127.0.0.1:8000/record_entry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to record entry');
      }

      const result = await response.json();
      console.log("-------entry record-------------api----result---------------------------",result)
      //console.log('Success:', result);
      // Optionally, show a success message or handle the response
    } catch (error) {
      //console.error('Error:', error);
      // Optionally, show an error message
    }
  };

  
  const empty_data = [
    {
      date: "",
      company_name: "",
      keywords: "",
      detail_description: "",
    },]

  // const [bulkData, setBulkData] = useState(empty_data); // Initialize state with the API data
  console.log("+++++++++++------bulkData-----------------------",bulkData )
  console.log("------apiData------0---------------",apiData)

  if (!bulkData){
    setApiData(empty_data); // Dynamically render based on API response

    console.log("------apiData---------------------",apiData)
    setBulkData(apiData)
  }
const handleInputChange = (index, field, value) => {
  // Update the specific field for the record at index
  const updatedBulkData = [...bulkData];
  updatedBulkData[index][field] = value;
  setBulkData(updatedBulkData);
};

// -----------------------------------------------------------bulk record-------------------------------
const BulkRecordhandle = async (index) => {
  const b_data = {
    date: bulkData[index].date,
    company_name: bulkData[index].company_name,
    keyword: bulkData[index].keywords,
    detail_description: bulkData[index].detail_description,
  };
  
  console.log('----BulkRecordhandle-----------DATA--------------------', b_data);
  
  // Post the data to the server
  try {
    // const response = await fetch('https://chatbotcv-t5h0c8cj.b4a.run/record_entry', {
    const response = await fetch(apiUrls.record_entry, {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(b_data),
    });

    if (!response.ok) {
      throw new Error('Failed to record entry');
    }

    const result = await response.json();
    console.log('Response from server:', result);
  } catch (error) {
    console.error('Error:--------------', error);
  }
};
  const handleGenerateCvPointers = async () => {

    const datas = [
      {
        companyName:"ABC",
       work: "A paragraph is a series of sentences that are organized and coherent,",
       
      work:"are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs."
       },

       {
        companyName:"XYZ",
       work: "A paragraph is a series of sentences that are organized and coherent,",
       
      work:"are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs."
       }
    ]
    console.log("----datas--------------------",datas)


      if (!cv_description || cv_description.length > 400) {
        set_Cv_Error(true);
        return;
      }

      const data = { cv_description };

    // try {
      // const response = await fetch("https://chatbotcv-t5h0c8cj.b4a.run/generate_cv", {
      const response = await fetch(apiUrls.generate_cv, {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // if (!response.ok) {
      //   throw new Error("Failed to generate CV pointers");
      // }

      if (!response.ok) {
        throw new Error("Failed to generate CV pointers");
      }
      
      console.log("----response--------------------",response)

      const result = await response.json();
      // const result = await datas;
      console.log("----result-  await-------------------",result)

      // Parse the response into a structured format
      // const parsedPointers = result
      //   .split("\n\n") 
      //   .filter((block) => block.trim() !== "") // Remove empty blocks
      //   .map((block) => {
      //     const lines = block.split("\n").filter((line) => line.trim() !== ""); // Split by newlines and clean up
      //     return {
      //       companyName: lines[0]?.replace("Company name: ", "").trim(), // Extract company name
      //       pointers: lines.slice(1).map((line) => line.replace(/^(\d+\.\s)/, "").trim()), // Extract pointers
      //     };
      //   });

      const parsedPointers = result.map((block) => {
        const lines = block.work.split(".").filter((line) => line.trim() !== ""); // Split by periods and clean up
        return {
          companyName: block.companyName.trim(), // Extract company name
          pointers: lines.map((line) => line.trim()), // Extract pointers
        };
      });


      console.log("----parsedPointers--------------------",parsedPointers)

      setCvPointers(parsedPointers); 
      // setCvPointers(datas); 
      // setError(false); // Reset error state
    // } 
    // catch (error) {
    //   // console.error("Error:", error);
    //   // setError(true); // Show error if API fails
    // }
  };
  const [startDate, setStartDate] = useState(""); // State for "From" input
  const [endDate, setEndDate] = useState(""); // State for "To" input

  // // Initialize with hardcoded numerical data
  // const [appraisalData, setAppraisalData] = useState([
  //   {
  //     month: 1, // January
  //     year: 2024,
      
  //   },
  //   // {
  //   //   month: 2, // February
  //   //   year: 2024,
  //   //    // Numerical details
  //   // },
  // ]);

  // const [isLoading, setIsLoading] = useState(false); // Loading state
  // const [hasError, setHasError] = useState(false); // Error state

  // const handleAppraisal = async () => {
  //   setIsLoading(true);
  //   setHasError(false);

  //   try {
  //     const response = await axios.post(
  //       "https://chatbotcv-t5h0c8cj.b4a.run/generate_appraisal_report",
  //       {
  //         from_date: startDate,
  //         to_date: endDate,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     // Update state with API response
  //     setAppraisalData(response.data || []);
  //   } catch (err) {
  //     // console.error("API Error:", err);
  //     setHasError(true);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  const [showData, setShowData] = useState(false);

  // const dummyDatas = [
  //   {
  //     month: 1,
  //     year: 2024,
  //   },
  //   {
  //     month: 2,
  //     year: 2024,
  //   },
  // ];

  const handleAppraisal = () => {
    setShowData(prevState => !prevState); // Toggle data visibility on button click
  };


  //-------------------------------scroll BTNs----------------------------------

  const handleGenerateCVClick = () => {
    if (cvRef.current) {
      cvRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewJournal = () => {
    if (viewJourRef.current) {
      viewJourRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

    
  // const handleAppraisal = () => {
  //   setShowData(prevState => !prevState); // Toggle data visibility on button click
  // };


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
    <div className="min-h-screen item-center bg-gradient-to-b from-[#131120] to-[#000080] text-white p-4">
      <div className="w-full max-w-8xl mx-auto bg-gradient-to-b from-[#504686] to-[#131120] text-white rounded-lg p-8 shadow-full mt-4">
        {/* Header Section */}
        <div className="relative mb-8">
          
            <div className="text-left">
              <Link href="/">
            <h1 className="text-3xl font-inika">Skill Sketch</h1>
            </Link>
            <p className="text-sm italic mt-1 text-3xl font-inika">"Sketching skills, one project at a time"</p>
          </div>

          {/* Navigation Links */}
          <nav className="absolute top-4 right-4 flex gap-6 text-sm text-xl font-inika">
            <a href="#" className="hover:underline">{name}</a>
            <a href="/" className="hover:underline">Logout</a>
            <a href="#" className="hover:underline">Create New Entry</a>
            <a className="hover:underline" onClick={handleGenerateCVClick} >View Journal</a>
            <a className="hover:underline" onClick={handleViewJournal} >Generate CV</a>
          </nav>
        {/* </div> */}
        
          {/* Curved Line */}
          <div className="relative mt-6  ">
            <div className="h-[2px] bg-black w-[85%] mx-auto rounded-full"></div>
            {/* <div className="absolute top-[-2px] h-[1px] w-[60%] left-[20%] bg-black rotate-[1deg]"></div> */}
          </div>
        </div>

        {/* Create New Entry Section */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-4">Create New Entry</h2>

          {/* Buttons */}
          <div className="flex gap-2 mb-4">
            <button
              className={`py-2 px-4 rounded-lg ${
                selectedType === "Professional" ? "bg-[#4F4B68]" : "bg-[#4F4B68]0"
              }`}
              onClick={() => setSelectedType("Professional")}
            >
              Professional
            </button>
            <div className="p-2 ph-2">|</div>
            <button
              className={`py-2 px-4 rounded-lg ${
                selectedType === "Educational" ? "bg-[#4F4B68]" : "bg-[#4F4B68]0"
              }`}
              onClick={() => setSelectedType("Educational")}
            >
              Educational
            </button>
          </div>

          {/* Input Field */}
         <textarea
            placeholder="Write about your work / Project / Duration"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-[#4F4B68] text-white p-3 rounded-lg outline-none"
          ></textarea> 

          {/* Submit Button */}
          <div className="flex justify-end mt-4">
            <button onClick={handleSubmit} className=" bg-[#4F4B68] px-6 py-2 rounded-lg">
              Submit
            </button>
          </div>

          {/* API Response */}
     
      </div >
        </div>

        {/* Additional Inputs */} 
        {/* -------------------------------GPT-ENTITY-------------------------------------------------------------------------------------------- */}

   <div className=" relative mt-6 item-center justify-center text-center mb-4 p-4">
  {/* Inputs */}
  <div className="flex gap-30 mb-4 p-6">
    <input
      type="date"
      value={date}
      onChange={(e) => setdate(e.target.value)}
      placeholder="Date"
      className="w-1/5 bg-[#4F4B68] text-white p-3 rounded-lg outline-none"
    />
    <input
      type="text"
      placeholder="Company Name"
      value={ company_name}
      onChange={(e) => setcompany_name(e.target.value)}
      className="w-1/3 bg-[#4F4B68] text-white p-3 rounded-lg outline-none"
    />
    <input
      type="text"
      placeholder="Keyword"
      value={keyword}
      onChange={(e) => setkeyword(e.target.value)}
      className="w-1/2 bg-[#4F4B68] text-white p-3 rounded-lg outline-none"
    />
  </div>

  {/* Detail Description */}
  <div className="w-full flex justify-center mb-4">
    <textarea
      rows="3"
      placeholder="Detail Description"
      className="w-[98%] bg-[#4F4B68] text-white p-3 rounded-lg outline-none"
      value={detailDescription}
      onChange={(e) => setDetailDescription(e.target.value)}
    ></textarea>
  </div>

  {/* Additional Textarea */}
  
  {/* Buttons */}
  <div className="flex justify-end mt-6 space-x-4 p-4">
    <button className="px-6 py-2 bg-[#4F4B68] text-white rounded-lg hover:bg-opacity-70 ">
      Edit
    </button>
    <button
      className="px-6 py-2 bg-[#4F4B68] text-white rounded-lg hover:bg-opacity-80"
      onClick={handleRecordClick}
    >
      Record
    </button>
  </div>
</div>

<div className=" item-center justify-center border-white border-b w-2/1"></div>

    {/* -------------------------------Bulk Entry-------------------------------------------------------------------------------------------- */}

      {/* <div className="container mx-auto p-6 w-full"> */}
        {/* Header Section */}
        <div className="w-[99%] max-w-8xl mx-auto  text-white rounded-lg p-8 shadow-full mt-4 p-4">
          <h1 className="  justify-center items-center text-2xl text-center mt-2 font-bold py-2 bg-[#4F4B68]  rounded-full inline-block w-[12%]">
                  Bulk Entry
          </h1>
        {/* </div> */}

        {/* Upload Section */}
        <div className="justify-center items-center">
     <div className="flex  justify-between text-center  p-4  mb-6 mt-4">
          <button className="px-4 py-2">
            Upload Old CV
          </button>
          <input  type="file" accept=".pdf"  className="hidden"  id="file-upload" onChange={handleFileSelect}/>
          
          <label
            htmlFor="file-upload" 
            className="px-4 py-2 b   bg-[#4F4B68]  hover:bg-[#4F4B68]  cursor-pointer" > Select PDF File </label>
         
          {/* <button onClick={handleFileSelect} className="px-4 py-2  bg-[#4F4B68]  hover:bg-[#4F4B68] ">
            Upload
          </button> */}

          <span className=" ">{fileName || 'File Name.pdf'}</span>

          {/* <input type="file" onChange={handleFileSelectAndSubmit} /> */}
          <button  
           onClick={handleSubmits}
          //  onClick={handleFileSelect}
          className="px-4 py-2  bg-[#4F4B68]  hover:bg-[#4F4B68] ">
            Submit
          </button>
        </div> 

        {/* Render Dynamic Forms Based on API Data */}
        {/* -------------------------------upload api data show------------------------------------------------------------------------------------------ */}


        <div>
    {bulkData.length > 0 && (
      <div>
        {bulkData.map((entry, index) => (
          <div key={index} className="p-4 rounded-lg mb-6"> 
            {/* Date & Company Row */}
            <div className="flex items-center justify-between mb-4">
              <input
                type="date"
                value={entry.date}
                onChange={(e) => handleInputChange(index, 'date', e.target.value)}
                // className="text-white w-1/3 px-3 py-2 bg-[#4F4B68] border border-gray-700 rounded-lg text-gray-300 focus:outline-none"
                className="text-gray-300 w-1/6 px-2 py-2 bg-[#4F4B68] border border-gray-700 rounded-lg text-gray-300 focus:outline-none"
              />
              <input
                type="text"
                value={entry.company_name}
                onChange={(e) => handleInputChange(index, 'company_name', e.target.value)}
                placeholder="Company Name"
                // className="w-1/4 px-3 py-2 bg-[#4F4B68] border border-gray-700 rounded-lg text-gray-300 focus:outline-none -ml-25"
                // className="w-1/4 px-2 py-1 bg-[#4F4B68] border border-gray-700 rounded-lg text-gray-300 focus:outline-none"
                className="w-1/3 bg-[#4F4B68] text-gray-300 p-3 rounded-lg outline-none -ml-11"
              />
              <input
                type="text"
                value={entry.keywords}
                onChange={(e) => handleInputChange(index, 'keywords', e.target.value)}
                placeholder="Keyword"
                // className="w-1/3 px-3 py-2 bg-[#4F4B68] border border-gray-700 rounded-lg text-gray-300 focus:outline-none"
                className="w-1/3 bg-[#4F4B68] text-gray-300 p-3 rounded-lg outline-none"

              />
            </div>

            {/* Detail Description */}
            <div className="mb-4">
              <textarea
                rows="3"
                value={entry.detail_description}
                onChange={(e) => handleInputChange(index, 'detail_description', e.target.value)}
                placeholder="Detail Description"
                className="w-full px-3 py-2 bg-[#4F4B68] border border-gray-700 rounded-lg text-gray-300 focus:outline-none"
              ></textarea>
            </div>

            {/* Edit and Record Buttons */}
            <div className="flex items-center justify-end space-x-4">
              <button className="px-6 py-2 bg-[#4F4B68] rounded-lg hover:bg-[#4F4B68]">
                Edit
              </button>
              <button
                className="px-6 py-2 bg-[#4F4B68] rounded-lg hover:bg-[#4F4B68]"
                onClick={() => BulkRecordhandle(index)} // Pass the index of the row to be recorded
              >
                Record
              </button>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
      </div>
      
      </div>
      <div className=" item-left text-left w-full p-8 rounded-lg shadow-lg" ref={viewJourRef}>  
        <button
          onClick={fetchJournalEntrieshandle}
          className="text-xl text-center font-bold py-2  bg-[#4F4B68] rounded-full inline-block w-[12%]"
        >
          View Journal
        </button>

        {/* Search Section */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full mt-4">
          <input
            type="text"
            placeholder="Keywords"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className=" bg-[#4F4B68] text-white rounded-lg py-3 px-4 focus:outline-none w-full"
          />
          <input
            type="date"
            placeholder="From: YY-MM-DD"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className=" bg-[#4F4B68] text-white rounded-lg py-3 px-4 focus:outline-none w-full"
          />
          <input
            type="date"
            placeholder="To: YY-MM-DD"
            value={toDate}
       onChange={(e) => setToDate(e.target.value)}
            className=" bg-[#4F4B68] text-white rounded-lg py-3 px-4 focus:outline-none w-full"
          />
          <button
            onClick={fetchJournalEntrieshandle}
            className=" bg-[#4F4B68] hover: bg-[#4F4B68] text-white font-bold py-3 px-6 rounded w-full"
          >
            Search
          </button>
        </div>

        {/* Loading/Error States */}
        {loading && <div className="text-white text-center mt-4">Loading...</div>}
        {error && (
          <div className="text-red-500 text-center mt-4">
            plz your data is not working plz check.
          </div>
        )}

        {/* Journal Entries */}
        <div className="space-y-6 w-full mt-6 ">
          {journalEntries.map((entry, index) => (
    
    <div 
    key={index}
    className=" relative mt-6 item-center justify-center text-center mb-4 p-4">
  {/* Inputs */}
  <div className="flex gap-30 mb-4 p-6">
    <input
      type="text"
      defaultValue={entry.date}
      onChange={(e) => setdate(e.target.value)}
      placeholder="Date"
      className="w-1/5 bg-[#4F4B68] text-white p-3 rounded-lg outline-none"
    />
    <input
      type="text"
      placeholder="Company Name"
      defaultValue={entry.company_name}
      onChange={(e) => setcompany_name(e.target.value)}
      className="w-1/3 bg-[#4F4B68] text-white p-3 rounded-lg outline-none"
    />
    <input
      type="text"
      placeholder="Keyword"
      defaultValue={entry.keyword}
      onChange={(e) => setkeyword(e.target.value)}
      className="w-1/2 bg-[#4F4B68] text-white p-3 rounded-lg outline-none"
    />
  </div>

  {/* Detail Description */}
  <div className="w-full flex justify-center mb-4">
    <textarea
      rows="3"
      placeholder="Detail Description"
      className="w-[98%] bg-[#4F4B68] text-white p-3 rounded-lg outline-none"
      defaultValue={entry.detail_description}
     
    ></textarea>
  </div>

  {/* Additional Textarea */}
  
  {/* Buttons */}
</div>
          ))}
        </div>
      </div>

      <div className="w-full p-6 rounded-lg shadow-lg" ref={cvRef}> 
      <h1 className="  justify-left items-left text-xl text-center mt-2 font-bold py-2 bg-[#4F4B68]  rounded-full inline-block w-[12%]">
      Generate CV 
          </h1>    
     
  <textarea
    className="w-full h-24 p-3 rounded-lg bg-[#4F4B68]  text-white focus:outline-none font-bold mt-4"
    placeholder="Paste the Job Description"
    value={cv_description}
    onChange={(e) => set_cv_description(e.target.value)}
  ></textarea>
  <p className="text-right">Word Limit: 400</p>
  {/* {error && <p className="text-red-500 text-sm mt-2">Please ensure the description is under 400 characters.</p>} */}
  <div className="flex items-center justify-end space-x-4">

    {/* Loading/Error States */}
    {loading && <div className="text-white text-center mt-4">Loading...</div>}
        {error && (
          <div className="text-red-500 text-center mt-4">
            Error fetching data...
          </div>
        )}


    <button
      className="bg-[#4F4B68] hover:bg-[#4F4B68] text-white font-bold py-2 px-4 rounded-full mt-4 w-[20%]"
      onClick={handleGenerateCvPointers}
    >
      Generate CV.
    </button>
 
    </div>
  <div className="mt-6 bg-[#4F4B68]">
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
    ) 
    : (
      <p className="text-gray-400"></p>
    )
    }
   
   
       
    </div>
{/* </div> */}
      <button className=" bg-[#4F4B68] hover:bg-[#4F4B68] text-white font-bold py-2 px-4 rounded-full mt-6 w-[18%]">
        Generate Appraisal Report
      </button>
    <div className="flex flex-col space-y-6">
      {/* Input Section */}
      <div className="flex items-center justify-between space-x-2 mb-6 flex-row mt-6">
        <span>From</span>
        <div className="flex flex-col">
          <input
            type="date"
            placeholder="From: MM-YY"
            className="bg-[#4F4B68] text-white rounded-lg py-3 px-4 focus:outline-none"
          />
        </div>
        <span>To</span>
        <div className="flex flex-col">
          <input
            type="date"
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
      <div className="mt-6 bg-[#4F4B68] p-4 rounded-lg text-white relative">
      <h1 className="font-bold p-2"> Generate Appraisal Report</h1>
        {copyText.length > 0 ? (
          copyText.map((entry, index) => (
            <div key={index} className="mb-6 mt-2">
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
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-lg shadow-lg mt-4">
            Copy successfully!
          </div>
        )}
      </div>

      <div className="flex items-center justify-end space-x-4">
        <button
          onClick={handleCopyText}
          className="bg-[#4F4B68] hover:bg-[#4F4B68] text-white font-bold py-2 px-4 rounded-full mt-4 w-[20%]"
        >
          Copy Text
        </button>
      </div>
    </div>
    </div>

      <footer className="w-full">
        <div className="container mx-auto px-8 w-full">
          <div className="relative flex items-center justify-center w-full">
            <div className="absolute left-0 w-3 h-3 bg-white rotate-45 transform"></div>
            <div className="h-[4px] bg-white w-full mx-4 w-full"></div>
            <div className="absolute right-0 w-3 h-3 bg-white rotate-45 transform"></div>
          </div>
          <div className="mt-4 flex flex-col md:flex-row md:justify-between items-center text-xs text-gray-300">
            <div className="flex space-x-6">
                         <span className="z-10 text-xs text-gray-300 px-2">Quick Links :</span>
              <Link href="/Home" className="hover:text-white">Home</Link>
              <Link href="/login" className="hover:text-white">Login</Link>
              <Link href="/Signup" className="hover:text-white">Signup</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </div>
            <p className="mt-2 md:mt-0 text-gray-500">© 2023 Skill Sketch</p>
          </div>
        </div>
      </footer>
    </div>
    
  );
 

}
