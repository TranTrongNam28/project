import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

interface OrderForm {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  items: {
    id: number;
    quantity: number;
  }[];
  note: string;
}

export function Order() {
  const [searchParams] = useSearchParams();
  const selectedItemId = searchParams.get('item');
  
  const [form, setForm] = useState<OrderForm>({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    items: selectedItemId ? [{ id: parseInt(selectedItemId), quantity: 1 }] : [],
    note: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý đặt món sau khi kết nối backend
    console.log('Form submitted:', form);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Đặt Món</h1>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Họ và tên
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Số điện thoại
            </label>
            <input
              type="tel"
              id="phone"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Ngày đặt
              </label>
              <input
                type="date"
                id="date"
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                Giờ đặt
              </label>
              <input
                type="time"
                id="time"
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500"
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label htmlFor="note" className="block text-sm font-medium text-gray-700 mb-1">
              Ghi chú
            </label>
            <textarea
              id="note"
              rows={4}
              className="w-full px-4 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500"
              value={form.note}
              onChange={(e) => setForm({ ...form, note: e.target.value })}
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-3 px-6 rounded-md hover:bg-orange-700 transition-colors font-semibold"
            >
              Đặt món và Thanh toán
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}