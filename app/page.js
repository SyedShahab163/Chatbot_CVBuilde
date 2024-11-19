import Footer from "./Footers/page";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-[#131120] to-[#000080] p-8 space-y-12">
      {/* 1. Header and Welcome Section */}
      <div className="w-full max-w-7xl bg-gradient-to-t from-[#504686] to-[#131120] shadow-2xl rounded-3xl text-gray-200 min-h-[60vh] mt-4">
        <HeaderSection />
      </div>

      {/* 2. How It Works Section */}
      <div className="w-full max-w-7xl bg-[radial-gradient(60%_60%_at_60%_60%,_#8C86EC_1.5%,_#8C86EC_9.86%,_#4F4C86_80.01%)] rounded-2xl shadow-xl text-gray-200 p-8 border border-gray-600 min-h-[60vh]">
        <HowItWorksSection />
      </div>

      {/* 3. Features Section */}
      <div className="w-full max-w-7xl bg-[radial-gradient(60%_60%_at_50%_50%,_#8C86EC_1.5%,_#8C86EC_9.86%,_#4F4C86_80.01%)] rounded-2xl shadow-xl text-gray-200 p-8 border border-gray-600 min-h-[50vh]">
        <FeaturesSection />
      </div>

      {/* 4. Footer */}
      <div className="w-full max-w-7xl bg-gradient-to-b from-[#131120] to-[#000080] rounded-2xl mt-8 text-gray-200 min-h-[26vh]">
        <Footer />
      </div> 
    </div>
  );
}

// Reusable Components
function HeaderSection() {
  return (
    <header className="relative p-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-inika">Skill Sketch</h1>
          <p className="text-xs">"Unlocking skills, one project at a time"</p>
        </div>
        <nav className="space-x-8 mt-4 md:mt-0">
          <a href="/com" className="hover:text-gray-300">Home</a>
          <a href="/login" className="hover:text-gray-300">Login</a>
          <a href="/Signup" className="hover:text-gray-300">Signup</a>
        </nav>
      </div>
      <section className="p-8 text-center border-b border-gray-600">
        <p className="text-gray-300 leading-relaxed text-lg mt-8">
          Welcome to Skill Sketch, your personalized platform for transforming everyday projects into powerful career assets.
          Whether you're working on personal projects, completing a challenging task, or growing your skills, Skill Sketch helps
          you document your journey with precision and professionalism. By leveraging advanced AI, this platform allows you to
          turn work experiences into polished journal entries, building a comprehensive record of your achievements. Whether you're
          a student, freelancer, or professional, take control of your career story with Skill Sketch. Now you can showcase your
          achievements in all forms from your meticulously maintained journal. Start sketching your skills today, one project at
          a time!
        </p>
      </section>
    </header>
  );
}

function HowItWorksSection() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-8 text-left text-black font-inika inline-block border-b-4 border-white pb-1">How It Works</h2>
      <div className="flex flex-wrap justify-between text-center">
        <StepCard
          description="Easily enter details about your current projects, including title, description, tasks, and outcomes."
          stepTitle="Step 1: Input Your Project Details"
        />
        <StepCard
          description="Leverage the power of AI to convert your input into polished, professional journal entries."
          stepTitle="Step 2: Convert to Professional Entries"
        />
        <StepCard
          description="Maintain a chronological journal of your work experiences, skills, and achievements, accessible anytime."
          stepTitle="Step 3: Build Your Career Journal"
        />
        <StepCard
          description="Create customized CVs based on your journal entries and specific job descriptions, ensuring you always put your best foot forward."
          stepTitle="Step 4: Generate Tailored CVs"
        />
      </div>
    </>
  );
}

function FeaturesSection() {
  return (
    <>
  <section className="p-8 border-b border-gray-600">
           <h2 className="text-2xl font-bold mb-8 text-left font-inika text-black inline-block border-b-4 border-white pb-1">Features</h2>
           <div className="grid grid-cols-2 gap-8 text-center relative">
             {/* Vertical and Horizontal Lines */}
             <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-[4px] h-full bg-white"></div>
         </div>

           <div className="absolute inset-0 flex items-center">
          <div className="w-full h-[4px] bg-white"></div>
              </div>
             <div>
               <h3 className="font-bold text-xl text-left">Effortless Documentation</h3>
               <p className="text-white text-left mt-8 text-xs">Streamline the process of recording
                <br/> your work experiences and achievements.</p>
             </div>
             {/* Feature 2 */}
             <div>
              <h3 className="font-bold text-xl">AI-Powered Writing</h3>
               <p className="text-white  mt-8 text-xs">Use cutting-edge AI to craft professional journal <br/>entries from simple inputs.</p>
             </div>
             {/* Feature 3 */}
             <div>
               <h3 className="font-bold text-xl text-left">Comprehensive Journal Management</h3>
               <p className="text-white text-left mt-8 text-xs">Easily track, filter, and manage entries,<br/> keeping your career story organized.</p>
             </div>
             {/* Feature 4 */}
             <div>
               <h3 className="font-bold text-xl">Custom CV Generator</h3>
               <p className="text-white  mt-8 text-xs">Generate CVs tailored to any job description,<br/> ensuring your achievements stand out.</p>
             </div>
           </div>
         </section>
    </>
  );
}

function StepCard({ description, stepTitle }) {
  return (
    <div className="w-full md:w-1/4 space-y-6 mb-8">
      <div className="flex items-center justify-center w-40 h-40 mx-auto rounded-full border-8 border-black shadow-lg p-6 bg-[radial-gradient(60%_60%_at_90%_90%,_#8C86EC_1.5%,_#8C86EC_9.86%,_#4F4C86_80.01%)]">
        <p className="text-xs text-gray-200 leading-tight">{description}</p>
      </div>
      <p className="font-semibold text-gray-300 text-xs">{stepTitle}</p>
    </div>
  );
}


