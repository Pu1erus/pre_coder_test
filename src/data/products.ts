import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: '埃塞俄比亚 耶加雪菲',
    origin: '埃塞俄比亚',
    category: '单品咖啡',
    price: 128,
    description: '来自埃塞俄比亚耶加雪菲产区的精品咖啡豆，海拔1800-2200米种植。采用水洗处理法，保留了咖啡豆最纯净的风味表达。每一口都能感受到热带水果的甜美与花香的优雅。',
    flavor: '柑橘、茉莉花、蜂蜜',
    roast: '浅度烘焙',
    weight: '227g',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop',
    badge: '人气之选'
  },
  {
    id: 2,
    name: '哥伦比亚 薇拉庄园',
    origin: '哥伦比亚',
    category: '单品咖啡',
    price: 98,
    description: '产自哥伦比亚薇拉地区的精选阿拉比卡豆，由当地小农户精心种植。中度烘焙带来均衡的口感，焦糖般的甜感与坚果香气完美融合。',
    flavor: '焦糖、坚果、巧克力',
    roast: '中度烘焙',
    weight: '227g',
    image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=400&h=400&fit=crop',
    badge: ''
  },
  {
    id: 3,
    name: '意式浓缩拼配',
    origin: '多产区拼配',
    category: '拼配咖啡',
    price: 88,
    description: '由巴西、哥伦比亚和印尼三款优质咖啡豆精心拼配而成，专为意式浓缩设计。浓郁的crema，醇厚的口感，是制作拿铁和卡布奇诺的理想选择。',
    flavor: '黑巧克力、烤杏仁、焦糖',
    roast: '中深度烘焙',
    weight: '454g',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=400&h=400&fit=crop',
    badge: '经典推荐'
  },
  {
    id: 4,
    name: '肯尼亚 AA 涅里',
    origin: '肯尼亚',
    category: '单品咖啡',
    price: 158,
    description: '肯尼亚最高等级AA级的精品咖啡豆，来自涅里产区。独特的SL28和SL34品种，经水洗处理后呈现出令人惊艳的黑醋栗酸质和番茄般的复杂度。',
    flavor: '黑醋栗、番茄、黑巧克力',
    roast: '浅度烘焙',
    weight: '227g',
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=400&h=400&fit=crop',
    badge: '限量供应'
  },
  {
    id: 5,
    name: '晨间唤醒拼配',
    origin: '多产区拼配',
    category: '拼配咖啡',
    price: 78,
    description: '专为早晨设计的中度烘焙拼配，选用巴西和危地马拉的优质豆。口感柔和顺滑，带有温和的甜味和坚果香气，是开启美好一天的完美伴侣。',
    flavor: '榛果、牛奶巧克力、太妃糖',
    roast: '中度烘焙',
    weight: '454g',
    image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=400&h=400&fit=crop',
    badge: ''
  },
  {
    id: 6,
    name: '巴拿马 翡翠庄园 瑰夏',
    origin: '巴拿马',
    category: '单品咖啡',
    price: 388,
    description: '咖啡界的"黄金标准"，来自巴拿马翡翠庄园的传奇瑰夏品种。独特的花香与热带水果风味，口感如丝绸般顺滑，余韵悠长。每一杯都是味蕾的奢华之旅。',
    flavor: '佛手柑、百香果、玫瑰',
    roast: '极浅烘焙',
    weight: '100g',
    image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400&h=400&fit=crop',
    badge: '顶级臻选'
  }
];

export const categories = ['全部', '单品咖啡', '拼配咖啡'];
