import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../App';
import BrandHeader from '../BrandHeader';
import LanguageToggle from '../LanguageToggle';
import { t } from '../../utils/translations';
import { UserPlus } from 'lucide-react';

export default function DealerRegistration() {
  const [formData, setFormData] = useState({
    dealerName: '',
    shopName: '',
    phone: '',
    email: '',
    address: '',
    gstin: '',
    password: '',
    confirmPassword: ''
  });
  const [showOtpStep, setShowOtpStep] = useState(false);
  const [otp, setOtp] = useState('');
  const { language } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (formData.password.length < 8) {
      alert('Password must be at least 8 characters!');
      return;
    }
    // Mock sending OTP
    setShowOtpStep(true);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 6) {
      alert('Registration successful! Awaiting admin approval.');
      navigate('/dealer/login');
    } else {
      alert('Please enter a valid 6-digit OTP');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 flex flex-col items-center justify-center p-4 py-12">
      <div className="absolute top-4 right-4">
        <LanguageToggle />
      </div>
      
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8">
        <BrandHeader />
        
        <h2 className="mt-8 text-center text-blue-900">
          {t('dealerRegistration', language)}
        </h2>
        
        {!showOtpStep ? (
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  {t('dealerName', language)}
                </label>
                <input
                  type="text"
                  name="dealerName"
                  value={formData.dealerName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  {t('shopName', language)}
                </label>
                <input
                  type="text"
                  name="shopName"
                  value={formData.shopName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  required
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  {t('phoneNumber', language)}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  {t('email', language)}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm mb-2 text-gray-700">
                {t('address', language)}
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                rows={3}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm mb-2 text-gray-700">
                {t('gstin', language)}
              </label>
              <input
                type="text"
                name="gstin"
                value={formData.gstin}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  {t('password', language)}
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  minLength={8}
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Minimum 8 characters</p>
              </div>
              
              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  {t('confirmPassword', language)}
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  minLength={8}
                  required
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg transition-colors mt-6"
            >
              <UserPlus size={20} />
              {t('register', language)}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="mt-8 space-y-6">
            <div className="text-center">
              <p className="text-gray-700 mb-4">
                {language === 'en' && 'OTP sent to your phone and email. Please verify.'}
                {language === 'hi' && 'आपके फोन और ईमेल पर OTP भेजा गया है। कृपया सत्यापित करें।'}
                {language === 'gu' && 'તમારા ફોન અને ઈમેલ પર OTP મોકલવામાં આવ્યો છે. કૃપા કરીને ચકાસો.'}
              </p>
              
              <label className="block text-sm mb-2 text-gray-700">
                {t('enterOtp', language)}
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent text-center text-xl tracking-widest"
                placeholder="000000"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg transition-colors"
            >
              {t('verifyOtp', language)}
            </button>
            
            <button
              type="button"
              onClick={() => alert('OTP resent!')}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg transition-colors"
            >
              {t('resendOtp', language)}
            </button>
          </form>
        )}
        
        <div className="mt-6 text-center">
          <Link
            to="/dealer/login"
            className="text-blue-900 hover:underline"
          >
            Already have an account? {t('login', language)}
          </Link>
        </div>
        
        <div className="mt-4 text-center">
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
