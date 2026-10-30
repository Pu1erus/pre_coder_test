import React from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

export default function ProductDetail({ product, onClose }: ProductDetailProps) {
  const { addToCart, setIsCartOpen } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
    setIsCartOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors"
        >
          <svg className="w-4 h-4 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <div className="relative h-64 sm:h-80">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          {product.badge && (
            <span className="absolute top-4 left-4 px-4 py-1.5 bg-amber-700/90 text-white text-sm font-medium rounded-full backdrop-blur-sm">
              {product.badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-amber-900 mb-1">
                {product.name}
              </h2>
              <p className="text-sm text-amber-600">产地：{product.origin}</p>
            </div>
            <span className="text-2xl sm:text-3xl font-bold text-amber-700">
              ¥{product.price}
            </span>
          </div>

          <p className="text-amber-800/80 text-sm sm:text-base leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Details Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <div className="bg-amber-50 rounded-xl p-3 text-center">
              <p className="text-xs text-amber-600 mb-1">烘焙度</p>
              <p className="text-sm font-medium text-amber-900">{product.roast}</p>
            </div>
            <div className="bg-amber-50 rounded-xl p-3 text-center">
              <p className="text-xs text-amber-600 mb-1">规格</p>
              <p className="text-sm font-medium text-amber-900">{product.weight}</p>
            </div>
            <div className="bg-amber-50 rounded-xl p-3 text-center">
              <p className="text-xs text-amber-600 mb-1">分类</p>
              <p className="text-sm font-medium text-amber-900">{product.category}</p>
            </div>
            <div className="bg-amber-50 rounded-xl p-3 text-center">
              <p className="text-xs text-amber-600 mb-1">产地</p>
              <p className="text-sm font-medium text-amber-900">{product.origin}</p>
            </div>
          </div>

          {/* Flavor Notes */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-amber-900 mb-2">风味描述</h4>
            <div className="flex flex-wrap gap-2">
              {product.flavor.split('、').map((note, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 text-sm rounded-full border border-amber-200"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full py-3.5 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2 text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            加入购物车 · ¥{product.price}
          </button>
        </div>
      </div>
    </div>
  );
}
