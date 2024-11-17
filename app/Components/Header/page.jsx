// import Link from 'next/link';

// export default function Header() {
//   return (
//     <header className="w-full bg-gradient-to-b from-[#504686] to-[#131120] text-white py-20  ">
//       <div className="container mx-auto flex flex-col items-left absolute top-0 mt-4">
//         <h1 className="text-2xl font-bold">Skill Sketch</h1>
//         <p className="text-gray-300 text-sm mt-1">"Unlocking skills, one project at a time"</p>
//       </div>
//       <nav className="container mx-auto mt-4 flex justify-end space-x-8 pr-8 text-white absolute top-0">
//         <Link href="/" className="hover:text-gray-300">Home</Link>
//         <Link href="/login" className="hover:text-gray-300">Login</Link>
//         <Link href="/signup" className="hover:text-gray-300">Signup</Link>
//       </nav>
//     </header>
//   );
// }
import Link from 'next/link';

export default function Header() {
  return (
    <header className="relative w-full h-[120px] bg-custom-linear text-white py-20">
      <div className="container mx-auto flex flex-col  absolute top-1 mt-4">
        <h1 className="text-2xl font-bold">Skill Sketch</h1>
        <p className="text-gray-300 text-sm mt-1">"Unlocking skills, one project at a time"</p>
      </div>
      <nav className="container mx-auto mt-6 flex justify-end space-x-8 pr-8 text-white absolute top-0">
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <Link href="/login" className="hover:text-gray-300">Login</Link>
        <Link href="/signup" className="hover:text-gray-300">Signup</Link>
      </nav>

      {/* Full-width Thinner Black Curved Line */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        {/* <svg
          className="relative block w-full h-4" // Height adjusted to make the line thinner
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120" // ViewBox adjusted for full-width curvature
          preserveAspectRatio="none"
        >
          <path
            fill="black"
            d="M0,48L40,64C80,80,160,112,240,128C320,144,400,144,480,128C560,112,640,80,720,64C800,48,880,48,960,64C1040,80,1120,112,1200,128C1280,144,1360,144,1400,128L1440,112V0H1400C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg> */}
      
      <div
  className="absolute w-[1366.71px] h-[37.2px] left-[31.57px] top-[176.25px] bg-[#FBFAFF] border-4 border-black"
>
</div>



      </div>
    </header>
  );
}


