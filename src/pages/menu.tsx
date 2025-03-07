import React from 'react';
import { Link } from 'react-router-dom';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Cơm Gà Phú Yên',
    description: 'Cơm gà truyền thống với nước mắm đặc biệt',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1617622141573-2f54dc392cdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Cơm'
  },
  {
    id: 2,
    name: 'Gà Luộc',
    description: 'Gà ta tươi luộc kèm rau răm',
    price: 120000,
    image: 'https://images.unsplash.com/photo-1580959375944-abd7e991f971?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Món Chính'
  },
  {
    id: 3,
    name: 'Cháo Lòng',
    description: 'Cháo lòng nóng hổi đậm đà',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Cháo'
  },
  // Thêm các món ăn khác tại đây
];

const categories = Array.from(new Set(menuItems.map(item => item.category)));

export function Menu() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Thực Đơn</h1>
      
      {categories.map(category => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-orange-600">{category}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {menuItems
              .filter(item => item.category === category)
              .map(item => (
                <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold text-xl mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-orange-600 font-semibold">
                        {item.price.toLocaleString('vi-VN')}đ
                      </p>
                      <Link
                        to={`/order?item=${item.id}`}
                        className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors"
                      >
                        Đặt món
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}