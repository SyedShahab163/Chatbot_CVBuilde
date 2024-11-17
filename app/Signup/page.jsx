// pages/signup.js
"use client";
// import { useState } from 'react';

// export default function Signup() {
//   const [formData, setFormData] = useState({
//     email: '',
//     username: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     try {
//       const response = await fetch('/app/api/route', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: formData.email,
//           username: formData.username,
//           password: formData.password,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to create account.");
//       }

//       setSuccess(true);
//       setFormData({
//         email: '',
//         username: '',
//         password: '',
//         confirmPassword: '',
//       });
//       setError(null);

//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="bg-gradient-to-r from-blue-800 to-black min-h-screen">
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="p-8 rounded-lg shadow-md"
//         style={{
//           backgroundColor: '#504686', // Custom purple background
//           width: '500px',             // Equal width and height for a square shape
//           height: '500px'
//         }}
//       >
//         <h2 className="text-2xl font-bold mb-4 text-white">Signup</h2>

//         {error && <p className="text-red-500">{error}</p>}
//         {success && <p className="text-green-500">Account created successfully!</p>}

//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-medium text-white">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-2 border rounded mt-1"
//             placeholder="Enter your email"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="username" className="block text-sm font-medium text-white">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             className="w-full p-2 border rounded mt-1"
//             placeholder="Choose a username"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="password" className="block text-sm font-medium text-white">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full p-2 border rounded mt-1"
//             placeholder="Create a password"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">Confirm Password:</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             className="w-full p-2 border rounded mt-1"
//             placeholder="Re-enter your password"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800 transition"
//         >
//           Sign Up
//         </button>
//       </form>
//     </div>
//     </div>
//   );
// }
import React from 'react'

const page = () => {
  const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
      });
    
      const [error, setError] = useState(null);
      const [success, setSuccess] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (formData.password !== formData.confirmPassword) {
          setError("Passwords do not match.");
          return;
        }
    
        try {
          const response = await fetch('/app/api/route', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: formData.email,
              username: formData.username,
              password: formData.password,
            }),
          });
    
          if (!response.ok) {
            throw new Error("Failed to create account.");
          }
    
          setSuccess(true);
          setFormData({
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
          });
          setError(null);
    
        } catch (err) {
          setError(err.message);
        }
      };
  return (
    <div className="bg-gradient-to-r from-blue-800 to-black min-h-screen">
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
         <form
           onSubmit={handleSubmit}
           className="p-8 rounded-lg shadow-md"
             style={{
              backgroundColor: '#504686', // Custom purple background
            width: '500px',             // Equal width and height for a square shape
             height: '500px'
           }}
          >
             <h2 className="text-2xl font-bold mb-4 text-white">Signup</h2>
    
             {error && <p className="text-red-500">{error}</p>}
             {success && <p className="text-green-500">Account created successfully!</p>}
    
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-white">Email:</label>
              <input
                 type="email"
                 id="email"
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                className="w-full p-2 border rounded mt-1"
                 placeholder="Enter your email"
                 required
               />
             </div>
    
             <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-white">Username:</label>
               <input
                 type="text"
                id="username"
                name="username"
                 value={formData.username}
                 onChange={handleChange}
                 className="w-full p-2 border rounded mt-1"
                 placeholder="Choose a username"
                 required
               />
             </div>
    
             <div className="mb-4">
               <label htmlFor="password" className="block text-sm font-medium text-white">Password:</label>
               <input
                 type="password"
                 id="password"
                 name="password"
                 value={formData.password}
                 onChange={handleChange}
                 className="w-full p-2 border rounded mt-1"
                 placeholder="Create a password"
                 required
               />
             </div>
    
            <div className="mb-4">
             <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">Confirm Password:</label>
              <input
                 type="password"
                 id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-1"
                 placeholder="Re-enter your password"
                 required
               />
             </div>
    
           <button
              type="submit"
              className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800 transition"
           >
               Sign Up
             </button>
           </form>
         </div>
         </div>
  )
}

export default page
