 "use client";
 import { useState } from "react";
 import Link from 'next/link';
 import axios from "axios";
 export default function DetailPage() {
  const [selectedType, setSelectedType] = useState(""); // To store selected type
  const [description, setDescription] = useState(""); // To store description

  const [apiResponse, setApiResponse] = useState(""); // To store API response
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [apiData, setApiData] = useState([]);

  const [date,  setdate] = useState([]);
  const [keyword,  setkeyword] = useState([]);
  const [company_name,  setcompany_name] = useState([]);
  const [detailDescription, setDetailDescription] = useState('');

  const [jobDescription, setJobDescription] = useState('');
  const [cvPointers, setCvPointers] = useState([]);
  const [errors, setErrors] = useState(false);
  const [name ,setname] = useState()
  const handleSubmit = async () => {
    if (!selectedType || !description) {
      alert("Please select a type and add a description!");
      return;
    }

    try {
      const response = await fetch("https://chatbotcv-t5h0c8cj.b4a.run/entry_to_gpt", {
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
        setApiResponse(`Success: ${JSON.stringify(data_gpt)}`);

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
        const response = await fetch('http://127.0.0.1:8000/upload_pdf', {   
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload file');
      }

      const data = await response.json(); // API response
      setApiData(data); // Dynamically render based on API response
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Dummy Data (for fallback in case of API error)
  const dummyData = [
    {
      date: "01/12/2024",
      companyName: "Dummy Company 1",
      keyword: "Test Keyword 1",
      description: "This is a dummy description for testing purposes.",
    },
    {
      date: "02/12/2024",
      companyName: "Dummy Company 2",
      keyword: "Test Keyword 2",
      description: "Another dummy description for testing.",
    },
  ];

  // Function to handle API request
  const fetchJournalEntries = async () => {
    setLoading(true);
    setError(false);

    try {
      // API call
      const response = await axios.get("https://chatbotcv-t5h0c8cj.b4a.run/view_journal", {
        params: {
          keywords,
          from_date: fromDate,
          to_date: toDate,
        },
      });

      // Update journal entries state
      setJournalEntries(response.data || []);
    } catch (err) {
      // console.error("API Error:", err);

      // Use dummy data as fallback
      setError(true);
      setJournalEntries(dummyData);
    } finally {
      setLoading(false);
    }
  };
    const handleRecordClick = async () => {
    const data = {
      date: '2024-01-01',
      company_name: 'my_company',
      keyword: 'It_job',
      detail_description: detailDescription,
    };

    try {
      const response = await fetch('https://chatbotcv-t5h0c8cj.b4a.run/record_entry', {
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
      //console.log('Success:', result);
      // Optionally, show a success message or handle the response
    } catch (error) {
      console.error('Error:', error);
      // Optionally, show an error message
    }
  };
  const handleGenerateCvPointers = async () => {
    if (!jobDescription || jobDescription.length > 400) {
      setError(true); // Show error if description is empty or exceeds word limit
      return;
    }
    
    const data = { job_description: jobDescription };

    try {
      const response = await fetch('https://chatbotcv-t5h0c8cj.b4a.run/generate_cv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to generate CV pointers');
      }

      const result = await response.json();
      setCvPointers(result.pointers || []);
      setErrors(false); // Reset error state
    } catch (error) {
      console.error('Error:', error);
      setErrors(true); // Show error if API fails
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
            <a href="#" className="hover:underline">Logout</a>
            <a href="#" className="hover:underline">Create New Entry</a>
            <a href="#" className="hover:underline">View Journal</a>
            <a href="#" className="hover:underline">Generate CV</a>
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
            <button
              className={`py-2 px-4 rounded-lg ${
                selectedType === "Educational" ? "bg-[#4F4B68]" : "bg-[#4F4B68]"
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
      type="text"
      value={date}
      onChange={(e) => setdate(e.target.value)}
      placeholder="Date"
      className="w-1/5 bg-[#4F4B68] text-white p-3 rounded-lg outline-none"
    />
    <input
      type="text"
      placeholder="Company Name"
      value={company_name}
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
          <h1 className="  justify-center items-center text-2xl text-center mt-2 font-bold py-2 bg-[#4F4B68]  rounded-full inline-block w-[10%]">
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
        {apiData.length > 0 && (

        <div>
        {apiData.map((entry, index) => (
          <div key={index} className="p-4 rounded-lg mb-6">
            {/* Date & Company Row */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-white">Date: {entry.date}</span>
              <input
                type="text"
                value={entry.company_name}
                placeholder="Company Name"
                className="w-1/3 px-3 py-2  bg-secondary/50 border border-gray-700 rounded-lg text-gray-300 focus:outline-none"
                readOnly
              />
              <input
                type="text"
                value={entry.keyword}
                placeholder="Keyword"
                className="w-1/3 px-3 py-2  border-gray-700 rounded-lg text-gray-300 focus:outline-none"
                readOnly
              />
            </div>

            {/* Detail Description */}
            <div className="mb-4">
              <textarea
                rows="3"
                placeholder="Detail Description"
                className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 focus:outline-none"
              ></textarea>
            </div>

            {/* Edit and Record Buttons */}
            <div className="flex items-center justify-end space-x-4">
              <button className="px-6 py-2  bg-[#4F4B68] rounded-lg hover: bg-[#4F4B68]">
                Edit
              </button>
              <button className="px-6 py-2  bg-[#4F4B68] rounded-lg hover: bg-[#4F4B68]">
                Record
              </button>
            </div>
          </div>
        ))}        
      </div> )}
      </div>
      
      </div>

      


      <div className=" item-left text-left w-full p-8 rounded-lg shadow-lg"> 
        <button
          onClick={fetchJournalEntries}
          className="text-2xl text-center font-bold py-2  bg-[#4F4B68] rounded-full inline-block w-[15%]"
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
            type="text"
            placeholder="From: DD/MM/YY"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className=" bg-[#4F4B68] text-white rounded-lg py-3 px-4 focus:outline-none w-full"
          />
          <input
            type="text"
            placeholder="To: DD/MM/YY"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className=" bg-[#4F4B68] text-white rounded-lg py-3 px-4 focus:outline-none w-full"
          />
          <button
            onClick={fetchJournalEntries}
            className=" bg-[#4F4B68] hover: bg-[#4F4B68] text-white font-bold py-3 px-6 rounded w-full"
          >
            Search
          </button>
        </div>

        {/* Loading/Error States */}
        {loading && <div className="text-white text-center mt-4">Loading...</div>}
        {error && (
          <div className="text-red-500 text-center mt-4">
            Error fetching data, showing dummy data instead.
          </div>
        )}

        {/* Journal Entries */}
        <div className="space-y-6 w-full mt-6 ">
          {journalEntries.map((entry, index) => (
    //         <div
    //           key={index}
    //           className=" p-6 rounded-lg shadow-md w-full"
    //         >
    //           <div className="flex flex-col md:flex-row md:space-x-4 w-full">
    //             <span className="text-white text-sm md:text-base w-full">
    //               Date: {entry.date}
    //             </span>
    //             <span className="  text-white px-4 py-2 rounded-lg text-sm w-full text-center">
    //               {entry.companyName}
    //             </span>
    //             <input
    //               type="text"
                  
    //               readOnly
    //               className="  text-white rounded-lg py-3 px-4 focus:outline-none w-full"
    //             />
    //                 <input
    //   // type="text"
    //   placeholder="Keyword"
    //   value={entry.keyword}
    //   // onChange={(e) => setkeyword(e.target.value)}
    //   className="w-1/2 bg-[#4F4B68] text-white p-3 rounded-lg outline-none"
    // />
    //           </div>
    //           <div className="text-white mt-4 w-full">{entry.description}</div>
    //         </div>
    <div className=" relative mt-6 item-center justify-center text-center mb-4 p-4">
  {/* Inputs */}
  <div 
   key={index}
  className="flex gap-30 mb-4 p-6">

               {/* className=" p-6 rounded-lg shadow-md w-full"
             ></div> */}
    <input
      type="text"
      value={entry.date}
      onChange={(e) => setdate(e.target.value)}
      placeholder="Date"
      className="w-1/5 bg-[#4F4B68] text-white p-3 rounded-lg outline-none"
    />
    <input
      type="text"
      placeholder="Company Name"
      value={entry.companyName}
      onChange={(e) => setcompany_name(e.target.value)}
      className="w-1/3 bg-[#4F4B68] text-white p-3 rounded-lg outline-none"
    />
    <input
      type="text"
      placeholder="Keyword"
      value={entry.keyword}
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
      value={entry.detailDescription}
     
    ></textarea>
  </div>

  {/* Additional Textarea */}
  
  {/* Buttons */}
</div>
          ))}
        </div>
      </div>

      <div className="w-full p-6 rounded-lg shadow-lg"> 
      <h1 className="  justify-left items-left text-xl text-center mt-2 font-bold py-2 bg-[#4F4B68]  rounded-full inline-block w-[10%]">
      Generate CV 
          </h1>    
      <textarea
      
        className="w-full h-24 p-3 rounded-lg  bg-[#4F4B68] text-white  focus:outline-none font-bold mt-4"
        placeholder="Paste the Job Description"
       
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
      ></textarea>
       <p className="item-right text-right">Word Limit : 400</p>
      {error && <p className="text-red-500 text-sm mt-2">Please ensure the description is under 400 characters.</p>}
      <div className="flex items-center justify-end space-x-4">
      <button
        className=" bg-[#4F4B68] hover:bg-[#4F4B68] text-white font-bold py-2 px-4 rounded-full mt-4 w-[20%] item-end"
        onClick={handleGenerateCvPointers}
      >
        Generate CV
      </button>
            </div>
      <div className="mt-6">
       
        <div className="mt-2 text-white">
          {cvPointers.length === 0 ? (
            <p></p>
          ) : (
            cvPointers.map((pointer, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold">Company name:</h3>
                <ul className="list-disc pl-6">
                  <li>{pointer}</li>
                  {/* Add more pointers if needed */}
                </ul>
              </div>
            ))
          )}
        </div>
      </div>

      <button className=" bg-[#4F4B68] hover:bg-[#4F4B68] text-white font-bold py-2 px-4 rounded-full mt-6 w-[20%]">
        Generate Appraisal Report
      </button>

      <div className="mt-6">
        
        <div className="flex items-center justify-between mt-2">
        <span className="text-white px-2">from</span>
       
          <input
            type="text"
            className="w-1/ bg-[#4F4B68] text-white rounded-lg p-2 focus:outline-none"
               placeholder="To: DD/MM/YY"
          />
          <span className="text-white px-2">to</span>
          <input
            type="text"
            className="w-1/ bg-[#4F4B68] text-white rounded-lg p-2 focus:outline-none"
               placeholder="To: DD/MM/YY"
          />
        </div>

        <div className="mt-4">
          <div className="mb-4 text-white">
            <h3 className="font-semibold">Month / Year</h3>
            <ul className="list-disc pl-6">
              <li>...</li>
              <li>...</li>
            </ul>
          </div>
          <div className="text-white">
            <h3 className="font-semibold">Month / Year</h3>
            <ul className="list-disc pl-6">
              <li>...</li>
              <li>...</li>
            </ul>
          </div>
        </div>
      </div>
      <button className="bg-[#4F4B68] hover:bg-[#4F4B68] text-white font-bold py-2 px-4 rounded mt-4 w-20% text-right item-right">
        Copy Text
      </button>
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


