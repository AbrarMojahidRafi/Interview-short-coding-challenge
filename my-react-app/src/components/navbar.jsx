import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react"; // hamburger, close এবং dropdown icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const productsDropdownRef = useRef(null);
  const resourcesDropdownRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target)) {
        setIsProductsOpen(false);
      }
      if (resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(event.target)) {
        setIsResourcesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-purple-700 text-white">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo and Desktop Menu Container */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-md" />
            <span className="font-semibold text-lg">Untitled UI</span>
          </div>

          {/* Desktop Menu - Now on the left side next to logo */}
          <ul className="hidden md:flex items-center gap-6">
            <li>
              <a href="#" className="hover:text-gray-200 transition">Home</a>
            </li>
            
            {/* Products with Dropdown */}
            <li className="relative" ref={productsDropdownRef}>
              <button 
                className="flex items-center gap-1 hover:text-gray-200 transition"
                onClick={() => setIsProductsOpen(!isProductsOpen)}
              >
                Products
                <ChevronDown size={16} className={`transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg py-2 z-10">
                  <a href="#" className="block px-4 py-2 hover:bg-purple-100 transition">Product 1</a>
                  <a href="#" className="block px-4 py-2 hover:bg-purple-100 transition">Product 2</a>
                </div>
              )}
            </li>
            
            {/* Resources with Dropdown */}
            <li className="relative" ref={resourcesDropdownRef}>
              <button 
                className="flex items-center gap-1 hover:text-gray-200 transition"
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              >
                Resources
                <ChevronDown size={16} className={`transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isResourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg py-2 z-10">
                  <a href="#" className="block px-4 py-2 hover:bg-purple-100 transition">Resource 1</a>
                  <a href="#" className="block px-4 py-2 hover:bg-purple-100 transition">Resource 2</a>
                </div>
              )}
            </li>
            
            <li>
              <a href="#" className="hover:text-gray-200 transition">Pricing</a>
            </li>
          </ul>
        </div>

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
            
            {/* Mobile Products Dropdown */}
            <li>
              <button 
                className="flex items-center justify-between w-full hover:text-gray-200 transition"
                onClick={() => setIsProductsOpen(!isProductsOpen)}
              >
                Products
                <ChevronDown size={16} className={`transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Mobile Dropdown Items */}
              {isProductsOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <a href="#" className="block hover:text-gray-200 transition">Product 1</a>
                  <a href="#" className="block hover:text-gray-200 transition">Product 2</a>
                </div>
              )}
            </li>
            
            {/* Mobile Resources Dropdown */}
            <li>
              <button 
                className="flex items-center justify-between w-full hover:text-gray-200 transition"
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              >
                Resources
                <ChevronDown size={16} className={`transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Mobile Dropdown Items */}
              {isResourcesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <a href="#" className="block hover:text-gray-200 transition">Resource 1</a>
                  <a href="#" className="block hover:text-gray-200 transition">Resource 2</a>
                </div>
              )}
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