"use client"
import React, { useState } from "react";
import axios from "axios";

export default function afterlogin
() {
  const [keywords, setKeywords] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [journalEntries, setJournalEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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

  const fetchJournalEntries = async () => {
    setLoading(true);
    setError(false);

    try {
      const response = await axios.post("http://127.0.0.1:8003/view_journal", {
        keywords,
        from_date: fromDate,
        to_date: toDate,
      });

      setJournalEntries(response.data || []);
    } catch (err) {
      console.error("API Error:", err);
      setError(true);
      setJournalEntries(dummyData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-900 flex flex-col items-center py-8">
      {/* View Journal Section */}
      <div className="w-full bg-blue-800 p-8 rounded-lg shadow-lg">
        <button
          onClick={fetchJournalEntries}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded mb-6"
        >
          View Journal
        </button>

        {/* Search Section */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full">
          <input
            type="text"
            placeholder="Keywords"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className="bg-gray-200 text-gray-800 rounded-lg py-3 px-4 focus:outline-none w-full"
          />
          <input
            type="text"
            placeholder="From: DD/MM/YY"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="bg-gray-200 text-gray-800 rounded-lg py-3 px-4 focus:outline-none w-full"
          />
          <input
            type="text"
            placeholder="To: DD/MM/YY"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="bg-gray-200 text-gray-800 rounded-lg py-3 px-4 focus:outline-none w-full"
          />
          <button
            onClick={fetchJournalEntries}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded w-full"
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
        <div className="space-y-6 w-full mt-6">
          {journalEntries.map((entry, index) => (
            <div
              key={index}
              className="bg-blue-700 p-6 rounded-lg shadow-md w-full"
            >
              <div className="flex flex-col md:flex-row md:space-x-4 w-full">
                <span className="text-gray-300 text-sm md:text-base w-full">
                  Date: {entry.date}
                </span>
                <span className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm w-full text-center">
                  {entry.companyName}
                </span>
                <input
                  type="text"
                  value={entry.keyword}
                  readOnly
                  className="bg-gray-200 text-gray-800 rounded-lg py-3 px-4 focus:outline-none w-full"
                />
              </div>
              <div className="text-gray-300 mt-4 w-full">{entry.description}</div>
            </div>
          ))}
        </div>
      </div>
      <footer className="bg-gradient-to-b from-[#000080] to-black py-6">
        <div className="container mx-auto px-8">
          <div className="relative flex items-center justify-center">
            <div className="absolute left-0 w-3 h-3 bg-white rotate-45 transform"></div>
            <div className="h-[4px] bg-white w-full mx-4"></div>
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
