// "use client";
// import { useState } from 'react';
// import Header from '../Components/Header/page';
// import Link from 'next/link';
// const page = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Ensure email and password are provided
//     if (!formData.email || !formData.password) {
//       setError('Please provide both email and password');
//       return;
//     }

//     try {
//       const response = await fetch('https://chatbotcv-t5h0c8cj.b4a.run/login', {  // API URL provided
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: formData.email,
//           password: formData.password,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Login failed. Please check your credentials.');
//       }

//       const data = await response.json();

//       // You can save user data or handle it as needed here (e.g., set it in a state)
//       setSuccess(true);
//       setFormData({
//         email: '',
//         password: '',
//       });
//       setError(null);

//       // Optionally, you can redirect or save the data locally, like in localStorage or Context
//       // Example: localStorage.setItem('user', JSON.stringify(data)); // Save user info

//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-800 to-black">
//     <header className="relative w-full h-[120px] bg-custom-linear text-white py-20">
//       <div className="container mx-auto flex flex-col  absolute top-1 mt-4">
//         <h1 className="text-2xl font-bold">Skill Sketch</h1>
//         <p className="text-gray-300 text-sm mt-1">"Unlocking skills, one project at a time"</p>
//       </div>
//       <nav className="container mx-auto mt-6 flex justify-end space-x-8 pr-8 text-white absolute top-0">
//         <Link href="/" className="hover:text-gray-300">Home</Link>
//         <Link href="/login" className="hover:text-gray-300">Login</Link>
//         <Link href="/signup" className="hover:text-gray-300">Signup</Link>
//       </nav>

//       {/* Full-width Thinner Black Curved Line */}
//       <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
//         <svg
//           className="relative block w-full h-4" // Height adjusted to make the line thinner
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1440 120" // ViewBox adjusted for full-width curvature
//           preserveAspectRatio="none"
//         >
//           <path
//             fill="black"
//             d="M0,48L40,64C80,80,160,112,240,128C320,144,400,144,480,128C560,112,640,80,720,64C800,48,880,48,960,64C1040,80,1120,112,1200,128C1280,144,1360,144,1400,128L1440,112V0H1400C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
//           ></path>
//         </svg>
//       </div>
//     </header>
     
//       <form
//         onSubmit={handleSubmit}
//         className="p-6 rounded-lg shadow-md" // Reduced padding for smaller size
//         style={{
//           background: 'linear-gradient(180deg, #131120 20%, #000080 100%)', // Custom purple background
//           width: '400px', // Reduced width to make the form smaller
//           height: '350px', // Reduced height for the form
//         }}
//       >
//         <h2 className="text-xl font-bold mb-4 text-white">Login</h2> {/* Reduced heading size */}

//         {error && <p className="text-red-500">{error}</p>}
//         {success && <p className="text-green-500">Logged in successfully!</p>}

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
//           <label htmlFor="password" className="block text-sm font-medium text-white">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full p-2 border rounded mt-1"
//             placeholder="Enter your password"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
//         >
//           Login
//         </button>
//       </form>
//       <footer className="w-full bg-gradient-to-b from-[#000080] text-white py-6">
//       <div className="container mx-auto px-8">
//         {/* Line with Diamond Ends */}
//         <div className="relative flex items-center justify-center">
//           {/* Left Diamond */}
//           <div className="absolute left-0 w-3 h-3 bg-white rotate-45 transform"></div>
          
//           {/* Line */}
//           <div className="h-[4px] bg-white w-full mx-4"></div>
          
//           {/* Right Diamond */}
//           <div className="absolute right-0 w-3 h-3 bg-white rotate-45 transform"></div>
//         </div>

//         {/* Quick Links and Copyright */}
//         <div className="mt-4 flex flex-col md:flex-row md:justify-between items-center text-xs text-gray-300">
//           <div className="flex space-x-6">
//             <Link href="/" className="hover:text-white">Home</Link>
//             <Link href="/login" className="hover:text-white">Login</Link>
//             <Link href="/signup" className="hover:text-white">Signup</Link>
//             <Link href="/contact" className="hover:text-white">Contact</Link>
//           </div>
//           <p className="mt-2 md:mt-0 text-gray-500">© 2023 Skill Sketch</p>
//         </div>
//       </div>
//     </footer>
//     </div>
//   );
// }

// export default page;
"use client";
import { useState } from 'react';
import Header from '../Components/Header/page';
import Link from 'next/link';

const Page = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure email and password are provided
    if (!formData.email || !formData.password) {
      setError('Please provide both email and password');
      return;
    }

    try {
      const response = await fetch('https://chatbotcv-t5h0c8cj.b4a.run/login', {  // API URL provided
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        throw new Error('Login failed. Please check your credentials.');
      }

      const data = await response.json();

      // You can save user data or handle it as needed here (e.g., set it in a state)
      setSuccess(true);
      setFormData({
        email: '',
        password: '',
      });
      setError(null);

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#504686] via-] to-[#000000] text-white font-sans">
      {/* Header Section */}
      {/* Header */}
      <header className="relative p-6 bg-gradient-to-b from-[#504686] to-[#131120] shadow-lg rounded-b-xl">
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-black rounded-t-full"></div>
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-semibold">Skill Sketch</h1>
              <p className="text-sm">"Unlocking skills, one project at a time"</p>
            </div>
            <nav className="space-x-8">
              <a href="#home" className="hover:text-gray-300">Home</a>
              <a href="#login" className="hover:text-gray-300">Login</a>
              <a href="#signup" className="hover:text-gray-300">Signup</a>
    
            </nav>
          
          </div >
          {/* <div className="absolute bottom-0 left-0 w-full h-[3px] bg-black rounded-t-full"></div> */}
          {/* Thin Black Curved Line Below Header */}
        </header>

      {/* Form Section */}
      <div className="flex flex-1 items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="p-6 rounded-lg shadow-md"
          style={{
            background: 'linear-gradient(180deg, #131120 20%, #000080 100%)', // Custom purple background
            width: '400px', // Reduced width to make the form smaller
            height: '350px', // Reduced height for the form
          }}
        >
          <h2 className="text-xl font-bold mb-4 text-white">Login</h2> {/* Reduced heading size */}

          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">Logged in successfully!</p>}

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
            <label htmlFor="password" className="block text-sm font-medium text-white">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
          >
            Login
          </button>
        </form>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-gradient-to-b from-[#000080] text-white py-6 mt-auto">
        <div className="container mx-auto px-8">
          <div className="relative flex items-center justify-center">
            <div className="absolute left-0 w-3 h-3 bg-white rotate-45 transform"></div>
            <div className="h-[4px] bg-white w-full mx-4"></div>
            <div className="absolute right-0 w-3 h-3 bg-white rotate-45 transform"></div>
          </div>

          <div className="mt-4 flex flex-col md:flex-row md:justify-between items-center text-xs text-gray-300">
            <div className="flex space-x-6">
              <Link href="/" className="hover:text-white">Home</Link>
              <Link href="/login" className="hover:text-white">Login</Link>
              <Link href="/signup" className="hover:text-white">Signup</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </div>
            <p className="mt-2 md:mt-0 text-gray-500">© 2023 Skill Sketch</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
