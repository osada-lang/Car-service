import React, { useState, useEffect } from 'react';
import { ChevronLeft, Camera, CheckCircle2, Loader2 } from 'lucide-react';

interface CheckInViewProps {
  onBack: () => void;
}

const CheckInView: React.FC<CheckInViewProps> = ({ onBack }) => {
  const [status, setStatus] = useState<'idle' | 'scanning' | 'success'>('idle');

  useEffect(() => {
    if (status === 'scanning') {
      const timer = setTimeout(() => {
        setStatus('success');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Header (Overlaid) */}
      <header className="absolute top-0 left-0 right-0 px-6 py-4 flex items-center gap-4 z-20">
        <button onClick={onBack} className="p-2 -ml-2 text-white bg-black/20 backdrop-blur-lg rounded-full active:bg-white/10">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className="font-bold text-lg text-white flex-grow">店舗チェックイン</h2>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center relative overflow-hidden">
        {status === 'idle' && (
          <div className="text-center space-y-8 px-8">
            <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
              <Camera className="text-accent w-12 h-12" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white">QRコードをスキャン</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                店舗受付に設置されている専用QRコードを読み取ってください。
              </p>
            </div>
            <button 
              onClick={() => setStatus('scanning')}
              className="w-full bg-accent text-white py-4 rounded-xl font-black active:scale-[0.98] transition-all"
            >
              スキャンを開始
            </button>
          </div>
        )}

        {status === 'scanning' && (
          <div className="w-full h-full flex items-center justify-center relative">
            {/* Animated Scanner UI */}
            <div className="w-64 h-64 border-2 border-accent rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-accent/50 animate-scanner-scan"></div>
              <div className="absolute inset-0 bg-accent/5"></div>
            </div>
            
            <div className="absolute bottom-20 left-0 right-0 text-center space-y-4">
              <Loader2 className="w-8 h-8 text-accent animate-spin mx-auto" />
              <p className="text-white font-bold tracking-widest uppercase text-xs">Scanning...</p>
            </div>

            {/* Simulated Camera Feed Background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-900 to-black opacity-50"></div>
          </div>
        )}

        {status === 'success' && (
          <div className="text-center space-y-8 px-8 animate-in fade-in zoom-in duration-500">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-green-500/30">
              <CheckCircle2 className="text-white w-14 h-14" />
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-black text-white">チェックイン完了！</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                スタッフにご来店を通知しました。<br />お席でお待ちください。
              </p>
            </div>
            <button 
              onClick={onBack}
              className="w-full bg-white text-black py-4 rounded-xl font-black active:scale-[0.98] transition-all"
            >
              ホームに戻る
            </button>
          </div>
        )}
      </main>

      {/* Tailwind animations for scanner */}
      <style>{`
        @keyframes scanner-scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .animate-scanner-scan {
          animation: scanner-scan 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CheckInView;
