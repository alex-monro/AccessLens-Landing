import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Image src="/next.svg" alt="logo" width={100} height={24} />
        <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
