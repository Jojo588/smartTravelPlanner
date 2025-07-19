import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/Sheet";
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
  return (
    <Sheet open={submenuOpen} onOpenChange={setSubMenuOpen}>
      <SheetTrigger asChild className="duration-300 md:hidden p-1">
        <Button variant="ghost" size="icon">
          <FaBars className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="bg-white p-6 space-y-6 text-white md:hidden"
      >
        <nav className="space-y-6 mt-5">
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
              label: "Start planning",
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
              className={`text-lg transition-colors flex gap-3 ${
                key === activeNav
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600 font-medium"
              }`}
            >
              {icon}
              {label}
            </Link>
          ))}
        </nav>

        <button
          className="w-fit flex gap-2 justify-center items-center text-red-500 hover:text-red-700 font-medium transition-colors text-lg absolute bottom-3 left-1/4 translate-x-1/2"
          onClick={handleLogOut}
        >
          <LogOut className="w-5 h-5" />
          Log out
        </button>
      </SheetContent>
    </Sheet>
  );
};

export default SubMenu;
