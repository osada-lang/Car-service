import React from 'react';
import type { Vehicle } from '../data/mockData';
import { ChevronLeft, TrendingUp, Info, ArrowUpRight } from 'lucide-react';

interface TradeInViewProps {
  vehicle: Vehicle;
  onBack: () => void;
}

const TradeInView: React.FC<TradeInViewProps> = ({ vehicle, onBack }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-20">
      <header className="bg-white px-6 py-4 flex items-center gap-4 border-b sticky top-0 z-10">
        <button onClick={onBack} className="p-2 -ml-2 text-gray-600 active:bg-gray-100 rounded-full">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className="font-bold text-lg flex-grow">下取り価格査定</h2>
      </header>

      <main className="px-6 py-8 space-y-6">
        <div className="bg-black text-white p-8 rounded-[40px] shadow-xl text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent opacity-20 blur-3xl rounded-full"></div>
          
          <p className="text-gray-400 font-bold text-sm uppercase tracking-[0.2em] mb-2">Estimated Value</p>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-4xl font-light">¥</span>
            <span className="text-6xl font-black">{vehicle.baseMarketValue.toLocaleString()}</span>
          </div>
          <div className="inline-flex items-center bg-accent/20 text-accent px-3 py-1 rounded-full gap-1 border border-accent/30">
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs font-black uppercase">前回比 +¥50,000</span>
          </div>
          <p className="text-[10px] text-gray-500 mt-6 font-medium">※この価格はカルテの走行距離、年式に基づく概算です。</p>
        </div>

        <section className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <Info className="text-accent w-5 h-5" />
            <h4 className="font-bold">査定のポイント</h4>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 bg-green-50 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <ArrowUpRight className="w-3 h-3" />
              </div>
              <div>
                <p className="font-bold text-sm">メンテナンス状態が良好です</p>
                <p className="text-xs text-gray-500 leading-relaxed">全ての法定点検を正規ディーラーで実施されているため、プラス査定の対象となります。</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 bg-green-50 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <ArrowUpRight className="w-3 h-3" />
              </div>
              <div>
                <p className="font-bold text-sm">人気グレード「Cパッケージ」</p>
                <p className="text-xs text-gray-500 leading-relaxed">中古車市場での需要が非常に高く、買取価格が安定しています。</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-3xl shadow-sm space-y-4">
          <h4 className="font-bold">乗り換えをご検討ですか？</h4>
          <p className="text-sm text-gray-500 leading-relaxed">
            現在の高価買取価格を元手に、新車へのスムーズな乗り換えプランを作成いたします。
          </p>
          <button className="w-full bg-accent text-white py-4 rounded-xl font-black active:scale-[0.98] transition-all shadow-lg shadow-accent/20">
            担当者に相談する
          </button>
        </section>
      </main>
    </div>
  );
};

export default TradeInView;
