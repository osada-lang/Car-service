import React from 'react';
import { mockHistory } from '../data/mockData';
import type { Vehicle } from '../data/mockData';
import { ChevronLeft, Wrench, Calendar, Gauge } from 'lucide-react';

interface HistoryViewProps {
  vehicle: Vehicle;
  onBack: () => void;
}

const HistoryView: React.FC<HistoryViewProps> = ({ vehicle, onBack }) => {
  const history = mockHistory.filter(h => h.vehicleId === vehicle.id);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-20">
      <header className="bg-white px-6 py-4 flex items-center gap-4 border-b sticky top-0 z-10">
        <button onClick={onBack} className="p-2 -ml-2 text-gray-600 active:bg-gray-100 rounded-full">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className="font-bold text-lg flex-grow">整備履歴詳細</h2>
      </header>

      <main className="px-6 py-6 space-y-6">
        <div className="space-y-4">
          {history.map((record) => (
            <div key={record.id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 relative">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
                    <Wrench className="text-gray-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-lg">{record.type === 'oil_change' ? 'オイル交換' : record.type === 'inspection' ? '法定点検' : '整備・修理'}</h4>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{record.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-black text-accent text-lg">¥{record.cost.toLocaleString()}</p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Total Cost</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl space-y-3">
                <p className="text-sm font-medium text-gray-700">{record.description}</p>
                <div className="flex items-center gap-4 pt-3 border-t border-gray-200">
                  <div className="flex items-center gap-1.5">
                    <Gauge className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-xs font-bold text-gray-500">{record.mileage.toLocaleString()} km</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-xs font-bold text-gray-500">2023.12.10</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 bg-accent/5 rounded-3xl border border-accent/10 border-dashed text-center">
          <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1">Upcoming Service</p>
          <p className="text-sm text-gray-600">次回の車検まで、あと25日です。</p>
        </div>
      </main>
    </div>
  );
};

export default HistoryView;
