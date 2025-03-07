import { Clock, MapPin, Phone } from 'lucide-react';

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://down-zl-vn.img.susercontent.com/vn-11134513-7r98o-lstxr2o15sihdd@resize_ss640x400!@crop_w640_h400_cT')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Hiền Cơm Gà Phú Yên</h1>
            <p className="text-xl mb-8">Hương vị đậm đà của Phú Yên giữa lòng Sài Gòn</p>
            <button className="bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors">
              Đặt món ngay
            </button>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md">
            <Clock className="text-orange-600" size={24} />
            <div>
              <h3 className="font-semibold">Giờ mở cửa</h3>
              <p className="text-gray-600">7:00 - 14:00</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md">
            <Phone className="text-orange-600" size={24} />
            <div>
              <h3 className="font-semibold">Liên hệ</h3>
              <p className="text-gray-600">0907377822 - 0932614016</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md">
            <MapPin className="text-orange-600" size={24} />
            <div>
              <h3 className="font-semibold">356 Trường Sa, Phường 2, Quận Phú Nhuận</h3>
              <p className="text-gray-600">TP. Hồ Chí Minh</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Dishes */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Món Ăn Đặc Trưng</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://mms.img.susercontent.com/vn-11134517-7r98o-lqvuiccn7v6h08@resize_ss400x400!@crop_w400_h400_cT" 
              alt="Gà Xé" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-2">Cơm Gà Xé</h3>
              <p className="text-gray-600 mb-4">Cơm cùng với ức gà được xé nhỏ</p>
              <p className="text-orange-600 font-semibold">43.000đ</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://mms.img.susercontent.com/vn-11134517-7r98o-lqvule2mkqf87f@resize_ss400x400!@crop_w400_h400_cT" 
              alt="Đùi Gà" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-2">Cơm Đùi Gà</h3>
              <p className="text-gray-600 mb-4">Cơm cùng 1 phần đùi chất lượng</p>
              <p className="text-orange-600 font-semibold">53.000đ</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://mms.img.susercontent.com/vn-11134517-7r98o-lqyuzxewie9w4c@resize_ss400x400!@crop_w400_h400_cT" 
              alt="Xé Lòng Trứng" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-2">Cơm Gà Xé Lòng Trứng</h3>
              <p className="text-gray-600 mb-4">Cháo lòng nóng hổi đậm đà</p>
              <p className="text-orange-600 font-semibold">53.000đ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}