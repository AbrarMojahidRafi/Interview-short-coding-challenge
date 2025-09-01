import { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger & close icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-purple-700 text-white">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-md" />
          <span className="font-semibold text-lg">Untitled UI</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <a href="#" className="hover:text-gray-200 transition">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200 transition">Products</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200 transition">Resources</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200 transition">Pricing</a>
          </li>
        </ul>

        {/* Desktop Right side buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="hover:text-gray-200 transition">Log in</a>
          <a
            href="#"
            className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg font-medium transition"
          >
            Sign up
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 bg-purple-600">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#" className="hover:text-gray-200 transition">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 transition">Products</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 transition">Resources</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 transition">Pricing</a>
            </li>
          </ul>

          <div className="flex flex-col gap-3 pt-4 border-t border-purple-400">
            <a href="#" className="hover:text-gray-200 transition">Log in</a>
            <a
              href="#"
              className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg font-medium transition text-center"
            >
              Sign up
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
