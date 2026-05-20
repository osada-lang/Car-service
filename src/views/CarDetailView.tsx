import React from 'react';
import type { Vehicle } from '../data/mockData';
import { ChevronLeft, Calendar, Gauge, History, Search, ArrowRight } from 'lucide-react';

interface CarDetailViewProps {
  vehicle: Vehicle;
  onBack: () => void;
  onTradeIn: () => void;
  onHistory: () => void;
  onReservation: () => void;
}

const CarDetailView: React.FC<CarDetailViewProps> = ({ 
  vehicle, 
  onBack, 
  onTradeIn, 
  onHistory, 
  onReservation 
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white px-6 py-4 flex items-center gap-4 border-b sticky top-0 z-10">
        <button onClick={onBack} className="p-2 -ml-2 text-gray-600 active:bg-gray-100 rounded-full">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className="font-bold text-lg flex-grow">愛車カルテ</h2>
      </header>

      {/* Main Content */}
      <main className="px-6 py-6 space-y-6">
        {/* Vehicle Identity */}
        <section className="bg-white p-6 rounded-3xl shadow-sm space-y-4">
          <div className="w-full aspect-video rounded-2xl overflow-hidden bg-gray-100 mb-4">
            <img src={vehicle.imageUrl} alt={vehicle.modelName} className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="text-xs font-bold text-accent uppercase tracking-wider">{vehicle.maker}</span>
            <h3 className="text-2xl font-black">{vehicle.modelName}</h3>
            <p className="text-gray-500 font-medium">{vehicle.licensePlate}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase">年式</p>
              <p className="font-bold">{vehicle.year}年</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase">グレード</p>
              <p className="font-bold text-sm truncate">{vehicle.grade}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase">走行距離</p>
              <p className="font-bold">{vehicle.currentMileage.toLocaleString()} km</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase">車台番号</p>
              <p className="font-bold text-sm truncate">{vehicle.vin}</p>
            </div>
          </div>
        </section>

        {/* Maintenance Status */}
        <section className="space-y-3">
          <h4 className="font-bold text-gray-800">メンテナンス状況</h4>
          
          <div className="space-y-3">
            <div className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-red-500">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Calendar className="text-red-500 w-5 h-5" />
                  <span className="font-bold">次回の車検日</span>
                </div>
                <span className="text-red-500 font-black text-lg">{new Date(vehicle.inspectionDate).toLocaleDateString()}</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-red-500 h-full w-[85%] rounded-full"></div>
              </div>
              <p className="text-xs text-right mt-1 text-gray-400 font-medium">あと 25日</p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-accent">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Gauge className="text-accent w-5 h-5" />
                  <span className="font-bold">オイル交換推奨</span>
                </div>
                <span className="text-accent font-black text-lg">40,000 km</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-accent h-full w-[60%] rounded-full"></div>
              </div>
              <p className="text-xs text-right mt-1 text-gray-400 font-medium">あと 5,000 km</p>
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <section className="grid grid-cols-1 gap-3">
          <button 
            onClick={onReservation}
            className="w-full flex items-center justify-between bg-black text-white p-5 rounded-2xl active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="font-bold leading-none">点検・整備を予約</p>
                <p className="text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-tighter">Instant Reservation</p>
              </div>
            </div>
            <ArrowRight className="w-6 h-6 text-accent" />
          </button>

          <button 
            onClick={onTradeIn}
            className="w-full flex items-center justify-between bg-white border border-accent/30 p-5 rounded-2xl active:bg-accent/5 active:scale-[0.98] transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                <Search className="text-accent w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="font-bold leading-none text-accent">下取り価格調査</p>
                <p className="text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-tighter">Value Estimation</p>
              </div>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-300" />
          </button>

          <button 
            onClick={onHistory}
            className="w-full flex items-center justify-between bg-white border border-gray-200 p-5 rounded-2xl active:bg-gray-50 active:scale-[0.98] transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <History className="text-gray-600 w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="font-bold leading-none">整備履歴詳細</p>
                <p className="text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-tighter">Maintenance Log</p>
              </div>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-300" />
          </button>
        </section>
      </main>
    </div>
  );
};

// Helper for detail arrow
const ChevronRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
  </svg>
);

export default CarDetailView;
