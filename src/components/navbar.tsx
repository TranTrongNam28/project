import { Menu, Phone, Clock } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-orange-600  mr-2">Hiền</span>
              <span className="text-2xl font-bold text-gray-700">Cơm Gà Phú Yên</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600">Home</Link>
            <Link to="/menu" className="text-gray-700 hover:text-orange-600">Thực Đơn</Link>
            <Link to="/order" className="text-gray-700 hover:text-orange-600">Đặt Món</Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-600">Giới Thiệu</Link>
            <div className="flex items-center space-x-2 text-orange-600">
              <Phone size={20} />
              <span>0907377822 - 0932614016</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 focus:outline-none"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Trang Chủ</Link>
            <Link to="/menu" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Thực Đơn</Link>
            <Link to="/order" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Đặt Món</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Giới Thiệu</Link>
            <div className="flex items-center space-x-2 px-3 py-2 text-orange-600">
              <Phone size={20} />
              <span>0907377822 - 0932614016</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}