import React from 'react';
import { MapPin } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Về Chúng Tôi</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Nhà hàng Hiền Cơm Gà Phú Yên"
            className="w-full h-96 object-cover"
          />
          
          <div className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Câu Chuyện Của Chúng Tôi</h2>
            <p className="text-gray-600 mb-6">
              Hiền Cơm Gà Phú Yên được thành lập với mong muốn mang hương vị đặc trưng của ẩm thực Phú Yên đến với người dân Sài Gòn. 
              Chúng tôi tự hào về công thức gia truyền và nguyên liệu tươi ngon được tuyển chọn kỹ lưỡng để mang đến những món ăn 
              chất lượng nhất cho thực khách.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Giá Trị Cốt Lõi</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Chất lượng món ăn luôn được đặt lên hàng đầu</li>
              <li>Nguyên liệu tươi sạch, được tuyển chọn kỹ lưỡng</li>
              <li>Phục vụ chu đáo, tận tâm</li>
              <li>Không gian sạch sẽ, thoải mái</li>
            </ul>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Thông Tin Liên Hệ</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-orange-600" size={24} />
                  <span className="text-gray-700">123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh</span>
                </div>
                <p className="text-gray-700">
                  <strong>Điện thoại:</strong> 028.xxxx.xxxx
                </p>
                <p className="text-gray-700">
                  <strong>Giờ mở cửa:</strong> 7:00 - 22:00 (Tất cả các ngày trong tuần)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}