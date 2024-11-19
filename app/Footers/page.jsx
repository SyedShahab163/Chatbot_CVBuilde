import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#000080] text-white py-6">
      <div className="container mx-auto px-8">
        {/* Line with Diamond Ends */}
        <div className="relative flex items-center justify-center">
          {/* Left Diamond */}
          <div className="absolute left-0 w-3 h-3 bg-white rotate-45 transform"></div>
          
          {/* Line */}
          <div className="h-[4px] bg-white w-full mx-4"></div>
          
          {/* Right Diamond */}
          <div className="absolute right-0 w-3 h-3 bg-white rotate-45 transform"></div>
        </div>

        {/* Quick Links and Copyright */}
        <div className="mt-4 flex flex-col md:flex-row md:justify-between items-center text-xs text-gray-300">
          <div className="flex space-x-6">
          <span className="z-10 text-xs text-gray-300 px-2">Quick Links :</span>

            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/login" className="hover:text-white">Login</Link>
            <Link href="/signup" className="hover:text-white">Signup</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
          <p className="mt-2 md:mt-0 text-gray-500">© 2023 Skill Sketch</p>
        </div>
      </div>
    </footer>
  );
}