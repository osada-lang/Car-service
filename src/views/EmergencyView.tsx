import React from 'react';
import { ChevronLeft, Phone, MessageCircle, AlertCircle, ShieldCheck, MapPin } from 'lucide-react';

interface EmergencyViewProps {
  onBack: () => void;
}

const EmergencyView: React.FC<EmergencyViewProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col min-h-screen bg-red-50 pb-20">
      <header className="bg-white px-6 py-4 flex items-center gap-4 border-b sticky top-0 z-10">
        <button onClick={onBack} className="p-2 -ml-2 text-gray-600 active:bg-gray-100 rounded-full">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className="font-bold text-lg flex-grow">緊急連絡</h2>
      </header>

      <main className="px-6 py-8 space-y-6">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-red-100">
          <div className="flex items-center gap-3 mb-4 text-red-600">
            <AlertCircle className="w-8 h-8" />
            <h3 className="text-xl font-black italic">まずは落ち着いてください</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <p className="text-sm font-bold leading-tight">ハザードを焚き、車両を安全な場所へ移動させてください。</p>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <p className="text-sm font-bold leading-tight">負傷者がいる場合は、速やかに救護してください。</p>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <p className="text-sm font-bold leading-tight">「110番」へ警察に連絡してください。</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <a 
            href="tel:110" 
            className="flex items-center justify-between bg-red-600 text-white p-6 rounded-2xl shadow-lg active:scale-[0.98] transition-all"
          >
            <div className="flex items-center gap-4">
              <Phone className="w-8 h-8" />
              <div className="text-left">
                <p className="text-2xl font-black">110番に通報</p>
                <p className="text-xs opacity-70 font-bold">Police Emergency</p>
              </div>
            </div>
          </a>

          <a 
            href="https://line.me" 
            className="flex items-center justify-between bg-[#06C755] text-white p-6 rounded-2xl shadow-lg active:scale-[0.98] transition-all"
          >
            <div className="flex items-center gap-4">
              <MessageCircle className="w-8 h-8" />
              <div className="text-left">
                <p className="text-2xl font-black">保険屋さんにLINE</p>
                <p className="text-xs opacity-70 font-bold">Contact Insurance via LINE</p>
              </div>
            </div>
          </a>

          <a 
            href="tel:0312345678" 
            className="flex items-center justify-between bg-white border-2 border-gray-200 text-gray-800 p-6 rounded-2xl shadow-sm active:scale-[0.98] transition-all"
          >
            <div className="flex items-center gap-4">
              <Phone className="w-8 h-8 text-accent" />
              <div className="text-left">
                <p className="text-2xl font-black">店舗へ連絡</p>
                <p className="text-xs text-gray-400 font-bold">Call Car Dealer</p>
              </div>
            </div>
          </a>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-blue-500 w-5 h-5" />
            <h4 className="font-bold">契約中の保険内容</h4>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase">保険会社</p>
              <p className="text-sm font-bold">東京海上日動</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase">証券番号</p>
              <p className="text-sm font-bold">1234567890</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-2">
          <div className="flex items-center gap-2">
            <MapPin className="text-gray-400 w-5 h-5" />
            <h4 className="font-bold">現在地の情報</h4>
          </div>
          <p className="text-sm font-medium text-gray-700 bg-gray-50 p-3 rounded-lg">
            東京都千代田区神田駿河台１丁目
          </p>
          <p className="text-[10px] text-gray-400 font-medium">※通報時に場所を伝える際にご活用ください。</p>
        </div>
      </main>
    </div>
  );
};

export default EmergencyView;
