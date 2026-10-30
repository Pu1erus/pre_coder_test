import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

interface CheckoutProps {
  onClose: () => void;
}

export default function Checkout({ onClose }: CheckoutProps) {
  const { items, totalPrice, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      clearCart();
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <div className="relative bg-white rounded-3xl shadow-2xl max-w-sm w-full p-8 text-center animate-in">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-xl font-bold text-amber-900 mb-2">下单成功！</h2>
          <p className="text-amber-700 text-sm mb-6">
            感谢您的购买！您的精品咖啡正在路上，预计3-5个工作日送达。
          </p>
          <p className="text-xs text-amber-500 mb-6">
            订单号：#{Math.random().toString(36).substr(2, 9).toUpperCase()}
          </p>
          <button
            onClick={onClose}
            className="w-full py-3 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-xl transition-colors"
          >
            继续购物
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-in">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-amber-100 p-5 flex items-center justify-between rounded-t-3xl z-10">
          <h2 className="text-lg font-bold text-amber-900">确认订单</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 hover:bg-amber-50 rounded-full flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 sm:p-6">
          {/* Order Items */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-amber-900 mb-3">订单商品</h3>
            <div className="space-y-2">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center justify-between py-2 border-b border-amber-50 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium text-amber-900">{item.product.name}</p>
                      <p className="text-xs text-amber-500">×{item.quantity}</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-amber-800">
                    ¥{item.product.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Info */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-amber-900 mb-3">收货信息</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="收货人姓名"
                required
                className="w-full px-4 py-2.5 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-900 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
              <input
                type="tel"
                placeholder="手机号码"
                required
                className="w-full px-4 py-2.5 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-900 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
              <textarea
                placeholder="收货地址"
                required
                rows={2}
                className="w-full px-4 py-2.5 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-900 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300 resize-none"
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-amber-900 mb-3">支付方式</h3>
            <div className="grid grid-cols-2 gap-2">
              <label className="flex items-center gap-2 p-3 bg-amber-50 border border-amber-200 rounded-xl cursor-pointer hover:bg-amber-100 transition-colors">
                <input type="radio" name="payment" defaultChecked className="accent-amber-700" />
                <span className="text-sm text-amber-900">微信支付</span>
              </label>
              <label className="flex items-center gap-2 p-3 bg-amber-50 border border-amber-200 rounded-xl cursor-pointer hover:bg-amber-100 transition-colors">
                <input type="radio" name="payment" className="accent-amber-700" />
                <span className="text-sm text-amber-900">支付宝</span>
              </label>
            </div>
          </div>

          {/* Total */}
          <div className="flex items-center justify-between py-4 border-t border-amber-100 mb-4">
            <span className="text-amber-700">应付总额</span>
            <span className="text-2xl font-bold text-amber-900">¥{totalPrice}</span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 bg-amber-700 hover:bg-amber-800 disabled:bg-amber-400 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>提交中...</span>
              </>
            ) : (
              <span>确认支付 ¥{totalPrice}</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
