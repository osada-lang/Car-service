import React, { useState } from 'react';
import SplashView from './views/SplashView';
import LoginView from './views/LoginView';
import HomeView from './views/HomeView';
import CarDetailView from './views/CarDetailView';
import TradeInView from './views/TradeInView';
import HistoryView from './views/HistoryView';
import EmergencyView from './views/EmergencyView';
import ReservationView from './views/ReservationView';
import CheckInView from './views/CheckInView';
import { mockVehicles } from './data/mockData';
import type { Vehicle } from './data/mockData';

type View = 'splash' | 'login' | 'home' | 'detail' | 'tradein' | 'history' | 'emergency' | 'reservation' | 'checkin';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('splash');
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const navigateTo = (view: View, vehicle: Vehicle | null = null) => {
    if (vehicle) setSelectedVehicle(vehicle);
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const renderView = () => {
    switch (currentView) {
      case 'splash':
        return <SplashView onComplete={() => navigateTo('login')} />;
      case 'login':
        return <LoginView onLogin={() => navigateTo('home')} />;
      case 'home':
        return <HomeView vehicles={mockVehicles} onSelectVehicle={(v) => navigateTo('detail', v)} onEmergency={() => navigateTo('emergency')} onCheckIn={() => navigateTo('checkin')} />;
      case 'detail':
        return selectedVehicle ? (
          <CarDetailView 
            vehicle={selectedVehicle} 
            onBack={() => navigateTo('home')} 
            onTradeIn={() => navigateTo('tradein')} 
            onHistory={() => navigateTo('history')} 
            onReservation={() => navigateTo('reservation')}
          />
        ) : null;
      case 'tradein':
        return selectedVehicle ? <TradeInView vehicle={selectedVehicle} onBack={() => navigateTo('detail')} /> : null;
      case 'history':
        return selectedVehicle ? <HistoryView vehicle={selectedVehicle} onBack={() => navigateTo('detail')} /> : null;
      case 'emergency':
        return <EmergencyView onBack={() => navigateTo('home')} />;
      case 'reservation':
        return <ReservationView onBack={() => navigateTo('detail')} />;
      case 'checkin':
        return <CheckInView onBack={() => navigateTo('home')} />;
      default:
        return <HomeView vehicles={mockVehicles} onSelectVehicle={(v) => navigateTo('detail', v)} onEmergency={() => navigateTo('emergency')} onCheckIn={() => navigateTo('checkin')} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-accent selection:text-white">
      {renderView()}
    </div>
  );
};

export default App;
