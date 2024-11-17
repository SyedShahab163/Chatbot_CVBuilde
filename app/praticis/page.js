"use client"
// // // pages/index.js

// export default function SkillSketch() {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-purple-900 to-blue-900 p-8">
//         <div className="w-full max-w-6xl bg-gradient-to-b from-purple-800 to-blue-800 rounded-2xl shadow-xl text-gray-200">
  
//           {/* Header */}
//           <header className="px-8 py-6 border-b border-gray-600 text-center">
//             <h1 className="text-4xl font-bold">Skill Sketch</h1>
//             <p className="italic text-gray-300 mt-2">"Unlocking skills, one project at a time"</p>
//             <div className="flex justify-end mt-4 space-x-6 text-gray-300">
//               <a href="#" className="hover:text-gray-100">Home</a>
//               <a href="#" className="hover:text-gray-100">Login</a>
//               <a href="#" className="hover:text-gray-100">Signup</a>
//             </div>
//           </header>
  
//           {/* Welcome Section */}
//           <section className="p-8 text-center border-b border-gray-600">
//             <p className="text-gray-300 leading-relaxed text-lg">
//               Welcome to Skill Sketch, your personalized platform for transforming everyday projects into powerful career assets.
//               Whether you're working on personal projects, completing a challenging task, or growing your skills, Skill Sketch helps
//               you document your journey with precision and professionalism. By leveraging advanced AI, this platform allows you to
//               turn work experiences into polished journal entries, building a comprehensive record of your achievements. Whether you're
//               a student, freelancer, or professional, take control of your career story with Skill Sketch. Now you can showcase your
//               achievements in all forms from your meticulously maintained journal. Start sketching your skills today, one project at
//               a time!
//             </p>
//           </section>
  
//           {/* How It Works Section */}
//           <section className="p-8 border-b border-gray-600">
//             <h2 className="text-2xl font-bold mb-8 text-left">How It Works</h2>
//             <div className="flex justify-between text-center">
//               {/* Step 1 */}
//               <div className="w-1/4 space-y-4">
//                 <div className="flex items-center justify-center w-32 h-32 mx-auto rounded-full border-4 border-black bg-gradient-to-b from-purple-900 to-purple-800 shadow-lg p-4">
//                   <p className="text-xs text-gray-200 leading-tight">
//                     Easily enter details about your current projects, including title, description, tasks, and outcomes.
//                   </p>
//                 </div>
//                 <p className="font-semibold text-gray-300">Step 1: Input Your Project Details</p>
//               </div>
  
//               {/* Step 2 */}
//               <div className="w-1/4 space-y-4">
//                 <div className="flex items-center justify-center w-32 h-32 mx-auto rounded-full border-4 border-black bg-gradient-to-b from-purple-900 to-purple-800 shadow-lg p-4">
//                   <p className="text-xs text-gray-200 leading-tight">
//                     Leverage the power of AI to convert your input into polished, professional journal entries.
//                   </p>
//                 </div>
//                 <p className="font-semibold text-gray-300">Step 2: Convert to Professional Entries</p>
//               </div>
  
//               {/* Step 3 */}
//               <div className="w-1/4 space-y-4">
//                 <div className="flex items-center justify-center w-32 h-32 mx-auto rounded-full border-4 border-black bg-gradient-to-b from-purple-900 to-purple-800 shadow-lg p-4">
//                   <p className="text-xs text-gray-200 leading-tight">
//                     Maintain a chronological journal of your work experiences, skills, and achievements, accessible anytime.
//                   </p>
//                 </div>
//                 <p className="font-semibold text-gray-300">Step 3: Build Your Career Journal</p>
//               </div>
  
//               {/* Step 4 */}
//               <div className="w-1/4 space-y-4">
//                 <div className="flex items-center justify-center w-32 h-32 mx-auto rounded-full border-4 border-black bg-gradient-to-b from-purple-900 to-purple-800 shadow-lg p-4">
//                   <p className="text-xs text-gray-200 leading-tight">
//                     Create customized CVs based on your journal entries and specific job descriptions, ensuring you always put your
//                     best foot forward.
//                   </p>
//                 </div>
//                 <p className="font-semibold text-gray-300">Step 4: Generate Tailored CVs</p>
//               </div>
//             </div>
//           </section>
  
//           {/* Features Section */}
//           <section className="p-8 border-b border-gray-600">
//             <h2 className="text-2xl font-bold mb-8 text-left">Features</h2>
//             <div className="grid grid-cols-2 gap-8 text-center relative">
//               {/* Vertical and Horizontal Lines */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-px h-full bg-gray-500"></div>
//               </div>
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full h-px bg-gray-500"></div>
//               </div>
//               {/* Feature 1 */}
//               <div>
//                 <h3 className="font-bold text-lg">Effortless Documentation</h3>
//                 <p className="text-gray-300 mt-2">Streamline the process of recording your work experiences and achievements.</p>
//               </div>
//               {/* Feature 2 */}
//               <div>
//                 <h3 className="font-bold text-lg">AI-Powered Writing</h3>
//                 <p className="text-gray-300 mt-2">Use cutting-edge AI to craft professional journal entries from simple inputs.</p>
//               </div>
//               {/* Feature 3 */}
//               <div>
//                 <h3 className="font-bold text-lg">Comprehensive Journal Management</h3>
//                 <p className="text-gray-300 mt-2">Easily track, filter, and manage entries, keeping your career story organized.</p>
//               </div>
//               {/* Feature 4 */}
//               <div>
//                 <h3 className="font-bold text-lg">Custom CV Generator</h3>
//                 <p className="text-gray-300 mt-2">Generate CVs tailored to any job description, ensuring your achievements stand out.</p>
//               </div>
//             </div>
//           </section>
  
//           {/* Footer */}
//           <footer className="p-8 border-t border-gray-600">
//             <div className="flex justify-between text-gray-300">
//               <p>&copy; 2024 Skill Sketch</p>
//               <div className="flex space-x-4">
//                 <a href="#" className="hover:text-gray-100">Quick Links</a>
//                 <a href="#" className="hover:text-gray-100">Home</a>
//                 <a href="#" className="hover:text-gray-100">Login</a>
//                 <a href="#" className="hover:text-gray-100">Signup</a>
//                 <a href="#" className="hover:text-gray-100">Contact</a>
//               </div>
//             </div>
//           </footer>
  
//         </div>
//       </div>
//     );
//   }
  // CurveLine.js
// export default function CurveLine() {
//   return (
//     <div className="flex justify-center items-center h-32 bg-gray-900">
//       <svg
//         width="100%"
//         height="50"
//         viewBox="0 0 500 50"
//         xmlns="http://www.w3.org/2000/svg"
//         className="text-black"
//       >
        {/* <path
          d="M0,50 Q250,-20 500,50"
          fill="none"
          stroke="black"
          strokeWidth="2"
        /> */}
//       </svg>
//     </div>
//   );
// }






// 

 