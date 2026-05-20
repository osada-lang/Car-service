import React from 'react';
import { Car } from 'lucide-react';

interface LoginViewProps {
  onLogin: () => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onLogin }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      <div className="flex flex-col items-center mb-12">
        <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mb-4">
          <Car className="text-accent w-12 h-12" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">デジタル愛車カルテ</h1>
        <p className="text-gray-500 mt-2">あなたの愛車を、もっと身近に。</p>
      </div>

      <div className="w-full max-w-sm space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">メールアドレス</label>
          <input 
            type="email" 
            placeholder="example@car.com" 
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">パスワード</label>
          <input 
            type="password" 
            placeholder="••••••••" 
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
          />
        </div>
        <button 
          onClick={onLogin}
          className="w-full py-4 bg-black text-white font-bold rounded-xl active:scale-95 transition-transform"
        >
          ログイン
        </button>
        <div className="text-center">
          <a href="#" className="text-sm text-gray-500 hover:text-accent">パスワードを忘れた場合</a>
        </div>
      </div>

      <div className="mt-auto pt-12 text-center text-xs text-gray-400">
        &copy; 2026 Car Dealer DX App
      </div>
    </div>
  );
};

export default LoginView;
