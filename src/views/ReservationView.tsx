import React from 'react';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';

interface ReservationViewProps {
  onBack: () => void;
}

const ReservationView: React.FC<ReservationViewProps> = ({ onBack }) => {
  const days = ['日', '月', '火', '水', '木', '金', '土'];
  const dates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d;
  });

  const timeSlots = ['10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-20">
      <header className="bg-white px-6 py-4 flex items-center gap-4 border-b sticky top-0 z-10">
        <button onClick={onBack} className="p-2 -ml-2 text-gray-600 active:bg-gray-100 rounded-full">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className="font-bold text-lg flex-grow">予約カレンダー</h2>
      </header>

      <main className="px-6 py-6 space-y-8">
        <section className="bg-white p-6 rounded-3xl shadow-sm space-y-6 overflow-hidden">
          <div className="flex items-center justify-between">
            <h3 className="font-black text-xl">2026年 5月</h3>
            <div className="flex gap-2">
              <button className="p-2 border border-gray-100 rounded-full active:bg-gray-50"><ChevronLeft className="w-5 h-5" /></button>
              <button className="p-2 border border-gray-100 rounded-full active:bg-gray-50"><ChevronRight className="w-5 h-5" /></button>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide -mx-6 px-6">
            {dates.map((date, i) => (
              <button 
                key={i}
                className={`flex flex-col items-center min-w-[56px] py-3 rounded-2xl transition-all ${
                  i === 2 ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'bg-gray-50 text-gray-400'
                }`}
              >
                <span className="text-[10px] font-bold uppercase mb-1">{days[date.getDay()]}</span>
                <span className="text-lg font-black">{date.getDate()}</span>
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <h4 className="font-bold flex items-center gap-2">
              <Info className="w-4 h-4 text-accent" />
              <span className="text-sm">予約可能な時間帯</span>
            </h4>
            
            <div className="grid grid-cols-2 gap-3">
              {timeSlots.map((time, i) => {
                const isAvailable = i % 3 !== 0;
                return (
                  <button 
                    key={time}
                    disabled={!isAvailable}
                    className={`p-4 rounded-xl border-2 font-bold transition-all ${
                      isAvailable 
                      ? 'border-gray-100 text-black active:border-accent active:bg-accent/5' 
                      : 'border-transparent bg-gray-100 text-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{time}</span>
                      <span className="text-xs uppercase tracking-tighter">{isAvailable ? '◯' : '×'}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-black text-white p-6 rounded-3xl space-y-4">
          <h4 className="font-bold">Web予約特典</h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            アプリからご予約いただくと、当日の手洗い洗車を無料でサービスいたします。
          </p>
          <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            Special Offer
          </div>
        </section>

        <button 
          onClick={() => alert('予約が確定しました（プロトタイプ）')}
          className="w-full bg-accent text-white py-5 rounded-2xl font-black text-lg active:scale-[0.98] transition-all shadow-xl shadow-accent/20"
        >
          この日時で予約する
        </button>
      </main>
    </div>
  );
};

export default ReservationView;
