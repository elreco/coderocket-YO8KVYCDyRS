import { Link } from 'react-router-dom';
import NpmLogo from './NpmLogo';
import GitHubLogo from './GitHubLogo';

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="mb-4">
              <NpmLogo />
            </div>
            <div className="mb-4">
              <GitHubLogo />
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-700 hover:text-black">Help</Link></li>
              <li><Link to="/advisories" className="text-gray-700 hover:text-black">Advisories</Link></li>
              <li><Link to="/status" className="text-gray-700 hover:text-black">Status</Link></li>
              <li><Link to="/contact" className="text-gray-700 hover:text-black">Contact npm</Link></li>
            </ul>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-700 hover:text-black">About</Link></li>
                <li><Link to="/blog" className="text-gray-700 hover:text-black">Blog</Link></li>
                <li><Link to="/press" className="text-gray-700 hover:text-black">Press</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-bold mb-4">Terms & Policies</h3>
              <ul className="space-y-2">
                <li><Link to="/policies" className="text-gray-700 hover:text-black">Policies</Link></li>
                <li><Link to="/terms" className="text-gray-700 hover:text-black">Terms of Use</Link></li>
                <li><Link to="/conduct" className="text-gray-700 hover:text-black">Code of Conduct</Link></li>
                <li><Link to="/privacy" className="text-gray-700 hover:text-black">Privacy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;