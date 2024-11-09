"use client"; // Add this line at the top of the file
 import Link from 'next/link';
 import { useState } from 'react';
import React from 'react'
const page = () => {
  const [showPopup, setShowPopup] = useState(false);

   const togglePopup = () => {
     setShowPopup(!showPopup);
   };
  return (
    <nav className="bg-gradient-to-r from-purple-800 to-black text-white">
          <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-start md:items-center">
            
             {/* Left Side - Logo */}
             <div className="text-2xl font-bold">
               <Link href="/" className="hover:text-gray-300">
                 Skill Sketch
               </Link>
               <p className="text-xs font-basic mt-1">
                 "sketching skills, one project at a time"
               </p>
             </div>
    
             {/* Right Side - Links */}
             <div className="flex space-x-4 mt-4 md:mt-0">
               <Link href="/Home" className="hover:text-gray-300">
                 Home
               </Link>
               <button onClick={togglePopup} className="hover:text-gray-300">
                 Login
               </button>
               <Link href="/Sab" className="hover:text-gray-300">
                 Signup
               </Link>
             </div>
           </div>
    
           {/* Login Popup */}
           {showPopup && (
             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
               <div className="bg-[#504686] text-white w-11/12 md:w-1/3 p-8 rounded-lg">
                 <button onClick={togglePopup} className="text-white text-lg font-bold float-right">✕</button>
                 <h2 className="text-xl font-semibold mb-4">Login</h2>
                 <form>
                   <div className="mb-4">
                     <label htmlFor="email" className="block text-sm font-medium">Email:</label>
                     <input
                       type="email"
                       id="email"
                       className="w-full mt-1 p-2 rounded text-black"
                       placeholder="Enter your email"
                       required
                     />
                   </div>
                   <div className="mb-4">
                     <label htmlFor="password" className="block text-sm font-medium">Password:</label>
                     <input
                     type="password"
                       id="password"
                       className="w-full mt-1 p-2 rounded text-black"
                       placeholder="Enter your password"
                       required
                     />
                   </div>
                   <button
                     type="submit"
                     className="w-full py-2 bg-white text-purple-800 font-bold rounded hover:bg-gray-200"
                   >
                     Login
                   </button>
                 </form>
               </div>
             </div>
           )}
         </nav>
  )
}

export default page
