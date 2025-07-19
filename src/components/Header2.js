import React, { useState } from "react";
import { Button } from "../components/ui/Button";
import { Navigation } from "lucide-react";
import { Link } from "react-router-dom";
import SubMenu from "../components/SubMenu";


function Header2({ handleLogOut, activeNav }) {
  const [submenuOpen, setSubMenuOpen] = useState(false);

  return (
    <>
      <header className="relative z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Navigation className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Wander Wise
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/home"
              className={`${
                activeNav === "home"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600 font-medium"
              } transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/how-it-works"
              className={`${
                activeNav === "how-it-works"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600 font-medium"
              } transition-colors`}
            >
              How It Works
            </Link>
            <Link
              to="/about"
              className={`${
                activeNav === "about"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600 font-medium"
              } transition-colors`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`${
                activeNav === "contact"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600 font-medium"
              } transition-colors`}
            >
              Contact
            </Link>
          </nav>
          {/* Mobile Button */}
          <SubMenu
          submenuOpen={submenuOpen}
          setSubMenuOpen={setSubMenuOpen}
          handleLogOut={handleLogOut}
          activeNav={activeNav}
          />
          {/* Log Out (Desktop) */}
          <Button
            variant="outline"
            className="hidden md:block bg-white text-blue-600 border-blue-600 hover:bg-blue-50"
            onClick={handleLogOut}
          >
            Log out
          </Button>
        </div>
      </header>
    </>
  );
}

export default Header2;
