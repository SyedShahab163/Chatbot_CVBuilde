import Header from './Components/Header/page';
import Footer from './Components/Footer/page';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#131120]">
      <Header />
      
      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-b from-[#131120] to-[#000080]">
        {/* Your main content goes here */}
      </main>

      <Footer />
    </div>
  );
}
