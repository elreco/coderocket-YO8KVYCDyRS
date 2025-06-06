import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from './ui/input';
import { Button } from './ui/button';
import NpmLogo from './NpmLogo';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header>
      {/* Top navigation */}
      <div className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 h-1"></div>
      <div className="hidden md:flex items-center justify-end bg-white py-2 px-4 space-x-4 text-sm">
        <Link to="/products/pro" className="text-gray-800 hover:text-black">Pro</Link>
        <Link to="/products/teams" className="text-gray-800 hover:text-black">Teams</Link>
        <Link to="/products" className="text-gray-800 hover:text-black">Pricing</Link>
        <Link to="/documentation" className="text-gray-800 hover:text-black">Documentation</Link>
      </div>

      {/* Main header with search */}
      <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
        <div className="flex items-center">
          <Link to="/" className="mr-4">
            <NpmLogo />
          </Link>
          <div className="relative flex-grow hidden md:block">
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="text"
                placeholder="Search packages"
                className="w-64 lg:w-96 border-gray-300 focus:border-black"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit" 
                className="ml-2 bg-[#231f20] text-white rounded-none px-8 font-bold hover:bg-black"
              >
                Search
              </Button>
            </form>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Link to="/signup">
            <Button variant="outline" className="border-gray-300 hover:border-black">
              Sign Up
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="outline" className="border-gray-300 hover:border-black">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;