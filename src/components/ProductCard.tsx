import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetail: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart, onViewDetail }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-amber-100 overflow-hidden transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div
        className="relative h-48 sm:h-56 overflow-hidden cursor-pointer"
        onClick={() => onViewDetail(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-amber-700/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
            {product.badge}
          </span>
        )}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="px-3 py-1.5 bg-white/90 text-amber-800 text-xs font-medium rounded-full backdrop-blur-sm">
            查看详情
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-amber-900 text-sm sm:text-base leading-tight">
            {product.name}
          </h3>
          <span className="text-lg sm:text-xl font-bold text-amber-700 whitespace-nowrap">
            ¥{product.price}
          </span>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
            {product.roast}
          </span>
          <span className="text-xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
            {product.weight}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-amber-700/70 mb-4 line-clamp-2">
          {product.flavor}
        </p>

        <button
          onClick={() => onAddToCart(product)}
          className="w-full py-2.5 bg-amber-700 hover:bg-amber-800 text-white text-sm font-medium rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          加入购物车
        </button>
      </div>
    </div>
  );
}
