import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-slate-50 to-slate-100 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <Link to="/" className="text-xl font-bold text-slate-800 hover:text-blue-600 transition-colors duration-200">
            Sandeep Reddy
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/about"
              className="text-slate-700 hover:text-blue-600 transition-colors duration-200"
            >
              About me
            </Link>
            <Link
              to="/blogs"
              className="text-slate-700 hover:text-blue-600 transition-colors duration-200"
            >
              Blogs
            </Link>
            <Link
              to="/resume"
              className="text-slate-700 hover:text-blue-600 transition-colors duration-200"
            >
              Resume
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link
              to="/about"
              className="block text-slate-700 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About me
            </Link>
            <Link
              to="/blogs"
              className="block text-slate-700 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link
              to="/resume"
              className="block text-slate-700 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;