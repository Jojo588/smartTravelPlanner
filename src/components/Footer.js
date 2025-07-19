import { Navigation } from "lucide-react";
import { Link } from "react-router-dom";

function Footer({activeNav}) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Navigation className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Wander Wise</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your travel assistant for personalized trip planning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className={`block text-gray-400 hover:text-white transition-colors text-sm ${activeNav==='home'?'text-white font-semibold':''}`}>
                Home
              </Link>
              <Link to="/how-it-works" className={`block text-gray-400 hover:text-white transition-colors text-sm ${activeNav==='how-it-works'?'text-white font-semibold':''}`}>
                How It Works
              </Link>
              <Link to="/about" className={`block text-gray-400 hover:text-white transition-colors text-sm ${activeNav==='about'?'text-white font-semibold':''}`}>
                About
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <div className="space-y-2">
              <Link to="/contact" className={`block text-gray-400 hover:text-white transition-colors text-sm ${activeNav==='contact'?'text-white font-semibold':''}`}>
                Contact Us
              </Link>
              <Link to="/terms" className={`block text-gray-400 hover:text-white transition-colors text-sm ${activeNav==='terms'?'text-white font-semibold':''}`}>
                Terms of Service
              </Link>
              <Link to="/privacy" className={`block text-gray-400 hover:text-white transition-colors text-sm ${activeNav==='privacy'?'text-white font-semibold':''}`}>
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>support@wanderwise.com</p>
              <p>233-800-WANDER-1</p>
              <p>Fijai, Ghana</p>
            </div>
          </div>
        </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Wander Wise. All rights reserved.
            </p>
          </div>
      </div>
    </footer>
  );
}
export default Footer;