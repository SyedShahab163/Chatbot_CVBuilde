// pages/index.js

export default function Home() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 text-white font-sans">
        <header className="flex justify-between items-center px-8 py-4">
          <h1 className="text-3xl font-bold">Skill Sketch</h1>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Login</a>
            <a href="#" className="hover:underline">Signup</a>
          </div>
        </header>
        
        <main className="text-center px-8 py-12">
          <h2 className="text-2xl font-semibold">“Sketching skills, one project at a time”</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Welcome to Skill Sketch, your personalized platform for transforming everyday projects into powerful career assets. 
            Whether you are working on personal projects, completing a challenging task, or growing your skill set, Skill Sketch 
            helps you showcase your journey with credibility and purpose.
          </p>
        </main>
        
        <section className="py-16 px-8 bg-purple-800 rounded-lg shadow-lg text-center max-w-5xl mx-auto">
          <h3 className="text-xl font-semibold mb-8">How It Works</h3>
          <div className="flex justify-around items-start">
            <div className="max-w-xs text-center space-y-2">
              <div className="bg-purple-700 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <span className="text-2xl font-bold">1</span>
              </div>
              <p className="font-semibold">Step 1: Input Your Project Details</p>
            </div>
            <div className="max-w-xs text-center space-y-2">
              <div className="bg-purple-700 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <span className="text-2xl font-bold">2</span>
              </div>
              <p className="font-semibold">Step 2: Convert to Professional Entries</p>
            </div>
            <div className="max-w-xs text-center space-y-2">
              <div className="bg-purple-700 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <span className="text-2xl font-bold">3</span>
              </div>
              <p className="font-semibold">Step 3: Build Your Career Journal</p>
            </div>
            <div className="max-w-xs text-center space-y-2">
              <div className="bg-purple-700 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <span className="text-2xl font-bold">4</span>
              </div>
              <p className="font-semibold">Step 4: Generate Tailored CVs</p>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-8 text-center max-w-5xl mx-auto">
          <h3 className="text-xl font-semibold mb-8">Features</h3>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold">Effortless Documentation</h4>
              <p>Streamline the process of recording your work experiences and achievements.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold">AI-Powered Writing</h4>
              <p>Use cutting-edge AI to craft professional journal entries from simple notes.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold">Comprehensive Journal Management</h4>
              <p>Easily track, manage, and organize projects as you progress.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold">Custom CV Generator</h4>
              <p>Generate CVs tailored to any job description, leveraging your recorded projects and entries.</p>
            </div>
          </div>
        </section>
  
        <footer className="text-center py-8 text-gray-400">
          <p>Quick Links: <a href="#" className="hover:underline">Home</a> | <a href="#" className="hover:underline">Login</a> | <a href="#" className="hover:underline">Signup</a> | <a href="#" className="hover:underline">Contact</a></p>
          <p className="mt-4">© 2024 Skill Sketch. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  