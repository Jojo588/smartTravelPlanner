import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "../components/ui/Sheet";
import {
  FaBars,
  FaHome,
  FaCogs,
  FaPlane,
  FaInfoCircle,
  FaEnvelope,
  FaUserShield,
  FaFileContract,
} from "react-icons/fa";

const SubMenu = ({ handleLogOut, submenuOpen, setSubMenuOpen, activeNav }) => {
 useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 765) {
      setSubMenuOpen(false);
    }
  };

  window.addEventListener("resize", handleResize);
  handleResize(); // run on mount

  return () => window.removeEventListener("resize", handleResize);
}, [setSubMenuOpen]);

  return (
    <Sheet open={submenuOpen} onOpenChange={setSubMenuOpen}>
      <SheetTrigger asChild className="duration-300 p-1 md:hidden">
        <Button variant="ghost" size="icon">
          <FaBars className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="bg-white p-6 text-gray-800 flex flex-col justify-between"
      >
        <SheetTitle className="visually-hidden">Main Menu</SheetTitle>
         <SheetDescription className="visually-hidden">
           Select a page to visit or manage your account.
          </SheetDescription>
        <nav className="space-y-5 mt-4 overflow-y-auto max-h-[calc(100vh-100px)] hide-scrollbar">
          {[
            { to: "/home", label: "Home", icon: <FaHome />, key: "home" },
            {
              to: "/how-it-works",
              label: "How It Works",
              icon: <FaCogs />,
              key: "how-it-works",
            },
            {
              to: "/plan-trip-page",
              label: "Start Planning",
              icon: <FaPlane />,
              key: "plan-trip-page",
            },
            {
              to: "/about",
              label: "About",
              icon: <FaInfoCircle />,
              key: "about",
            },
            {
              to: "/contact",
              label: "Contact",
              icon: <FaEnvelope />,
              key: "contact",
            },
            {
              to: "/privacy",
              label: "Privacy Policy",
              icon: <FaUserShield />,
              key: "privacy",
            },
            {
              to: "/terms",
              label: "Terms of Service",
              icon: <FaFileContract />,
              key: "terms",
            },
          ].map(({ to, label, icon, key }) => (
            <Link
              key={key}
              to={to}
              onClick={() => setSubMenuOpen(false)}
              className={`flex items-center gap-3 text-base px-2 py-2 rounded-md transition-colors duration-200 ${
                key === activeNav
                  ? "text-blue-600 font-semibold bg-blue-50"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-100 font-medium"
              }`}
            >
              <span className="text-lg">{icon}</span>
              <span>{label}</span>
            </Link>
          ))}
        </nav>

        <div className="flex justify-center mt-8">
          <button
            onClick={handleLogOut}
            className="flex items-center gap-2 text-red-500 hover:text-red-700 font-medium transition-colors duration-200 text-base"
          >
            <LogOut className="w-5 h-5" />
            <span>Log Out</span>
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SubMenu;
