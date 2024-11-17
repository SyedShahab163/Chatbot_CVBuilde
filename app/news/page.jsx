// pages/index.js
export default function Home() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#504686] via-[#131120] to-[#131120] text-white font-sans">
        
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
          
          <br/>
          <section className="mt-32">
          <p className="leading-relaxed">
            Welcome to Skill Sketch, your personalized platform for transforming everyday projects into powerful career assets.
            Whether you’re working toward earning professional points, overcoming a challenging task, or expanding your skillset, Skill Sketch helps you track, manage, and showcase your achievements.
            Start sketching your skills today and turn your projects into a powerful career tool!
          </p>
        </section>
        </header>
  
        {/* Hero Section */}
       
  
        {/* How It Works */}
        <section className="py-10 bg-[#272135] rounded-lg max-w-5xl mx-auto mt-8 shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
          <div className="flex justify-around space-x-4">
            {[
              { step: 'Step 1', title: 'Input Your Project Details' },
              { step: 'Step 2', title: 'Connect to Professional Features' },
              { step: 'Step 3', title: 'Build Your Career Journal' },
              { step: 'Step 4', title: 'Generate Tailored CVs' },
            ].map((item, index) => (
              <div key={index} className="w-1/4 px-4 space-y-2">
                <div className="h-24 w-24 mx-auto bg-[#504686] border-4 border-black rounded-full flex items-center justify-center text-center text-white font-bold text-lg">
                  {/* Circle Icon Placeholder */}
                  {index + 1}
                </div>
                <p className="font-semibold mt-2">{item.step}</p>
                <p className="text-sm">{item.title}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* Features Section */}
        <section className="py-10 bg-[#1B1233] rounded-lg max-w-5xl mx-auto mt-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">Features</h2>
          <div className="flex flex-col md:flex-row justify-around text-left space-y-6 md:space-y-0 md:space-x-10 px-8">
            <div className="md:w-1/2 space-y-4">
              <div>
                <p className="font-semibold">Effortless Documentation</p>
                <p className="text-sm">Streamline the process of recording your work experiences and accomplishments.</p>
              </div>
              <div>
                <p className="font-semibold">Comprehensive Journal Management</p>
                <p className="text-sm">Easily track, store, and manage your career progress in one organized space.</p>
              </div>
            </div>
            <div className="md:w-1/2 space-y-4">
              <div>
                <p className="font-semibold">AI-Powered Writing</p>
                <p className="text-sm">Use cutting-edge AI tools for professional journal entries that make the right impact.</p>
              </div>
              <div>
                <p className="font-semibold">Custom CV Generator</p>
                <p className="text-sm">Generate CVs tailored to any job application, ready for professional presentations.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="py-6 bg-gradient-to-t from-[#504686] to-[#131120] text-center mt-10 rounded-t-lg">
          <div className="max-w-4xl mx-auto flex justify-center space-x-6 mb-4">
            <a href="#quick-links" className="hover:text-gray-300">Quick Links</a>
            <a href="#home" className="hover:text-gray-300">Home</a>
            <a href="#login" className="hover:text-gray-300">Login</a>
            <a href="#signup" className="hover:text-gray-300">Signup</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </div>
          <p className="text-xs">Copyright &copy; 2024 Skill Sketch</p>
        </footer>
      </div>
    );
  }
  