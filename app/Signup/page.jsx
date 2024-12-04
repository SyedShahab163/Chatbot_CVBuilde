 "use client";
 import { useState } from "react";

import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import Footer from "../Footers/page";


export default function SignupPage() {0
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("https://chatbotcv-t5h0c8cj.b4a.run/signup", user, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',  // Adjust based on backend settings
                    'Access-Control-Request-Method': "post"
                }
            }
            );
            console.log("Signup success", response.data);
            router.push("/login");
            
        } catch (error) {
            console.log("Signup failed", error.message);
            
            toast.error(error.message);
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);


   
    return (
            <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#131120] to-[#000080] text-white font-sans">
                    <header className="relative p-6 bg-gradient-to-b from-[#504686] to-[#131120] text-white shadow-lg rounded-b-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-inika">Skill Sketch</h1>
            <p className="text-xs">Unlocking skills, one project at a time</p>
          </div>
          <nav className="space-x-8">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/login" className="hover:text-gray-300">Login</Link>
          
          </nav>
        </div>
        {/* Curved Line */}
       
      </header>
              <div className="flex flex-1 items-center justify-center">
              
                <form
                  onSubmit={onSignup}
                  className="w-full max-w-md p-8 rounded-lg shadow-md bg-[#000080]"
                >
                  <h2 className="text-2xl font-bold mb-4 text-white">Signup</h2>
        
          
        
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-white">
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={user.email}
                      onChange={(e) => setUser({...user, email: e.target.value})}
                      className="w-full p-2 border rounded mt-1 text-black"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
        
                  <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-white">
                      Username:
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={user.username}
                       onChange={(e) => setUser({...user, username: e.target.value})}
                      className="w-full p-2 border rounded mt-1 text-black"
                      placeholder="Choose a username"
                      required
                    />
                  </div>
        
                  <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-white">
                      Password:
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={user.password}
                      onChange={(e) => setUser({...user, password: e.target.value})}
                      className="w-full p-2 border rounded mt-1 text-black"
                      placeholder="Create a password"
                      required
                    />
                  </div>
        
                  <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">
                      Confirm Password:
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={user.confirmPassword}
                      onChange={(e) => setUser({...user, ConfirmPassword: e.target.value})}
                      className="w-full p-2 border rounded mt-1 text-black"
                      placeholder="Re-enter your password"
                      required
                    />
                  </div>
        
                   {/* <button
                    type="onSignup"
                    className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
                   >
                    <Link href={"/login"}/>
                    Sign Up
                  </button>  */}
                   <button
             onClick={onSignup}
           className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">{buttonDisabled ? "No signup" : "Signup"}</button>
             <Link href="/login">Visit login page</Link>
                </form>
              </div>
              <div><Footer/></div>
            </div>
          );
   
        
}