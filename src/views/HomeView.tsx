import React from 'react';
import type { Vehicle } from '../data/mockData';
import { AlertTriangle, Bell, Camera, PhoneCall, Plus, ChevronRight } from 'lucide-react';

interface HomeViewProps {
  vehicles: Vehicle[];
  onSelectVehicle: (vehicle: Vehicle) => void;
  onEmergency: () => void;
  onCheckIn: () => void;
}

const HomeView: React.FC<HomeViewProps> = ({ vehicles, onSelectVehicle, onEmergency, onCheckIn }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white px-6 py-4 flex items-center justify-between border-b sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span className="text-accent text-xs font-bold">DX</span>
          </div>
          <span className="font-bold text-lg">車屋のカルテ</span>
        </div>
        <button className="relative p-2 text-gray-600">
          <Bell className="w-6 h-6" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8 space-y-8">
        {/* Welcome Section */}
        <section>
          <h2 className="text-2xl font-bold">こんにちは、⚪︎⚪︎様</h2>
          <p className="text-gray-500 text-sm">現在 2台の愛車が登録されています</p>
        </section>

        {/* Global Actions */}
        <section className="grid grid-cols-2 gap-4">
          <button 
            onClick={onEmergency}
            className="flex flex-col items-center justify-center p-6 bg-white border border-red-100 rounded-2xl shadow-sm active:bg-red-50 transition-colors"
          >
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-3">
              <PhoneCall className="text-red-600 w-6 h-6" />
            </div>
            <span className="font-bold text-red-600">緊急連絡</span>
          </button>
          <button 
            onClick={onCheckIn}
            className="flex flex-col items-center justify-center p-6 bg-white border border-accent/20 rounded-2xl shadow-sm active:bg-accent/5 transition-colors"
          >
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-3">
              <Camera className="text-accent w-6 h-6" />
            </div>
            <span className="font-bold text-accent">チェックイン</span>
          </button>
        </section>

        {/* Vehicle List */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg text-gray-800">登録済みの愛車</h3>
            <button className="text-sm text-accent font-medium flex items-center gap-1">
              <Plus className="w-4 h-4" /> 車両を追加
            </button>
          </div>
          
          <div className="space-y-4">
            {vehicles.map((vehicle) => (
              <button 
                key={vehicle.id}
                onClick={() => onSelectVehicle(vehicle)}
                className="w-full bg-white p-4 rounded-2xl shadow-sm border border-transparent hover:border-gray-200 active:scale-[0.98] transition-all text-left flex items-center gap-4 relative overflow-hidden"
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                  <img src={vehicle.imageUrl} alt={vehicle.modelName} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-gray-400 uppercase">{vehicle.maker}</span>
                    {vehicle.warnings.some(w => w.severity === 'high') && (
                      <span className="bg-red-100 text-red-600 text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" /> 要対応
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-xl">{vehicle.modelName}</h4>
                  <p className="text-sm text-gray-500 font-medium">{vehicle.licensePlate}</p>
                </div>
                <ChevronRight className="text-gray-300 w-6 h-6" />

                {/* Warning Indicator */}
                {vehicle.warnings.length > 0 && (
                  <div className="absolute top-0 right-0 p-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomeView;
