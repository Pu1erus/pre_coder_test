import React, { useState, useMemo } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { products, categories } from './data/products';
import { Product } from './types';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function AppContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const { addToCart, setIsCartOpen } = useCart();

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.flavor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.origin.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === '全部' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50/30 to-yellow-50/20">
      <Header onSearch={setSearchQuery} searchQuery={searchQuery} />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-900 mb-4 leading-tight">
              每一杯，都是
              <span className="text-amber-700"> 匠心之作</span>
            </h2>
            <p className="text-amber-700/70 text-sm sm:text-base lg:text-lg mb-8">
              精选全球优质产区咖啡豆，从烘焙到杯中，每一步都追求极致。
              <br className="hidden sm:block" />
              让味蕾开启一场跨越山海的旅程。
            </p>
            <div className="flex items-center justify-center gap-6 text-amber-700/60 text-xs sm:text-sm">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                新鲜烘焙
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-amber-500 rounded-full" />
                产地直采
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-rose-500 rounded-full" />
                精品级品质
              </span>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-amber-200/20 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-200/20 rounded-full blur-3xl" />
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? 'bg-amber-700 text-white shadow-md shadow-amber-200'
                  : 'bg-white text-amber-700 border border-amber-200 hover:bg-amber-50'
              }`}
            >
              {category}
            </button>
          ))}
          <span className="ml-auto text-xs text-amber-500 whitespace-nowrap">
            共 {filteredProducts.length} 款
          </span>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onViewDetail={setSelectedProduct}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <span className="text-5xl mb-4 block">🔍</span>
            <p className="text-amber-700 font-medium mb-1">没有找到匹配的咖啡</p>
            <p className="text-sm text-amber-500">试试其他关键词或分类吧</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">☕</span>
                <span className="font-bold text-white text-lg">醇香咖啡</span>
              </div>
              <p className="text-sm text-amber-300/70">
                致力于为每一位咖啡爱好者提供最新鲜、最优质的精品咖啡体验。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">服务保障</h4>
              <ul className="space-y-2 text-sm text-amber-300/70">
                <li>• 48小时内新鲜烘焙发货</li>
                <li>• 不满意全额退款</li>
                <li>• 满199元包邮</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">联系我们</h4>
              <ul className="space-y-2 text-sm text-amber-300/70">
                <li>📧 hello@artisancoffee.com</li>
                <li>📞 400-888-9999</li>
                <li>📍 上海市静安区咖啡街88号</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-amber-800 mt-8 pt-6 text-center text-xs text-amber-400/60">
            © 2024 醇香咖啡 Artisan Coffee. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Modals */}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <Cart onCheckout={() => {
        setIsCartOpen(false);
        setShowCheckout(true);
      }} />

      {showCheckout && (
        <Checkout onClose={() => setShowCheckout(false)} />
      )}
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
