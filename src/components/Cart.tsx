import React from 'react';
import { useCart } from '../context/CartContext';

interface CartProps {
  onCheckout: () => void;
}

export default function Cart({ onCheckout }: CartProps) {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalPrice } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Cart Panel */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-amber-100">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            <h2 className="text-lg font-bold text-amber-900">购物车</h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="w-8 h-8 hover:bg-amber-50 rounded-full flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <span className="text-5xl mb-4">🛒</span>
              <p className="text-amber-700 font-medium mb-1">购物车是空的</p>
              <p className="text-sm text-amber-500">快去挑选心仪的咖啡吧</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3 p-3 bg-amber-50/50 rounded-xl border border-amber-100"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-amber-900 truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-sm text-amber-700 font-semibold mt-0.5">
                      ¥{item.product.price}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center bg-white border border-amber-200 rounded-lg text-amber-700 hover:bg-amber-100 transition-colors text-sm"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-sm font-medium text-amber-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center bg-white border border-amber-200 rounded-lg text-amber-700 hover:bg-amber-100 transition-colors text-sm"
                        >
                          +
                        </button>
                      </div>
                      {/* Subtotal */}
                      <span className="text-sm font-semibold text-amber-800">
                        ¥{item.product.price * item.quantity}
                      </span>
                    </div>
                  </div>
                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="self-start p-1 text-amber-400 hover:text-red-500 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-amber-100 p-5 bg-amber-50/30">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-amber-700">合计</span>
              <span className="text-2xl font-bold text-amber-900">¥{totalPrice}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full py-3.5 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <span>去结算</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
