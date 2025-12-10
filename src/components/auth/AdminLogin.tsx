import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../App';
import BrandHeader from '../BrandHeader';
import LanguageToggle from '../LanguageToggle';
import { t } from '../../utils/translations';
import { ShieldCheck } from 'lucide-react';

export default function AdminLogin() {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const { login, language } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication
    if (adminId && password.length >= 8) {
      login('admin');
      navigate('/admin/dashboard');
    } else {
      alert('Please enter valid credentials. Password must be at least 8 characters.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 flex flex-col items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <LanguageToggle />
      </div>
      
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
        <BrandHeader />
        
        <h2 className="mt-8 text-center text-blue-900">
          {t('adminLogin', language)}
        </h2>
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label className="block text-sm mb-2 text-gray-700">
              {t('adminId', language)}
            </label>
            <input
              type="text"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm mb-2 text-gray-700">
              {t('password', language)}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              minLength={8}
              required
            />
          </div>
          
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-900 hover:underline"
            >
              {t('forgotPassword', language)}
            </Link>
          </div>
          
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-blue-900 py-3 rounded-lg transition-colors"
          >
            <ShieldCheck size={20} />
            {t('login', language)}
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="text-sm text-gray-600 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
