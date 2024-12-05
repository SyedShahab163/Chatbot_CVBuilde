"use client";
import { useState } from 'react';
import Link from 'next/link';

const Page = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [notsuccess, setnotsuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Please provide both email and password');
      return;
    }
    try {
      const response = await fetch(`https://chatbotcv-t5h0c8cj.b4a.run/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(response.ok,"-----ok-----------------------------------------------",response)
      console.log(response.status,"-----status-----------------------------------------------",response.json())

      if (response.ok) {
        window.location.href = "/Detailpage";
        setSuccess(true);
        

      }else{
        setnotsuccess(true)
      }
      
      setFormData({ email: '', password: '' });
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#131120] to-[#000080] text-white font-sans">
      {/* Header */}
      <header className="relative p-6 bg-gradient-to-b from-[#504686] to-[#131120] text-white shadow-lg rounded-b-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <Link href="/">
            <h1 className="text-3xl font-inika">Skill Sketch</h1>
            </Link>
            <p className="text-xs">"Unlocking skills, one project at a time"</p>
          </div>
          <nav className="space-x-8">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/Signup" className="hover:text-gray-300">Signup</Link>
          </nav>
        </div>
     
      </header>

      {/* Login Form */}
      <div className="flex flex-1 items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="p-6 rounded-lg shadow-md bg-gradient-to-b from-[#131120] to-[#000080] w-full max-w-md"
        >
          <h2 className="text-xl font-bold mb-4">Login</h2>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">Logged in successfully !</p>}
          {notsuccess && <p className="text-red-500"> Invalid credentials !</p>}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1 text-black"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1 text-black"
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

      {/* Footer */}
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
};

export default Page;
