import React from 'react';
import { ShoppingBag, TrendingUp, TrendingDown } from 'lucide-react';

const Selling = () => {
  const salesData = [
    { id: 1, product: 'Web Development Course', quantity: 50, revenue: 2500, trend: 'up' },
    { id: 2, product: 'UI/UX Design Templates', quantity: 75, revenue: 1500, trend: 'down' },
    { id: 3, product: 'JavaScript E-book', quantity: 100, revenue: 1000, trend: 'up' },
  ];

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Sales Dashboard</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Overview of your recent sales and revenue.</p>
      </div>
      <div className="border-t border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trend</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {salesData.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <ShoppingBag className="h-6 w-6 text-indigo-600" />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{item.product}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{item.quantity}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">${item.revenue}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.trend === 'up' ? (
                    <TrendingUp className="h-5 w-5 text-green-500" />
                  ) : (
                    <TrendingDown className="h-5 w-5 text-red-500" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Selling;