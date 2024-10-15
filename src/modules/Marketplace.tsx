import React from 'react';
import { Store, Star } from 'lucide-react';

const Marketplace = () => {
  const products = [
    { id: 1, name: 'Advanced React Patterns Course', price: 99.99, rating: 4.8 },
    { id: 2, name: 'Full-Stack Web Development Bundle', price: 199.99, rating: 4.9 },
    { id: 3, name: 'UI/UX Design Masterclass', price: 79.99, rating: 4.7 },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Marketplace</h2>
        <p className="mt-4 text-base text-gray-500">Explore and purchase digital products from our community.</p>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <Store className="w-full h-full object-center object-cover lg:w-full lg:h-full text-indigo-600" />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    {product.rating}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;