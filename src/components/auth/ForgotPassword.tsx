import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../App';
import BrandHeader from '../BrandHeader';
import LanguageToggle from '../LanguageToggle';
import { t } from '../../utils/translations';
import { KeyRound } from 'lucide-react';

type Step = 'select' | 'otp' | 'newPassword' | 'success';
type Method = 'phone' | 'email';

export default function ForgotPassword() {
  const [step, setStep] = useState<Step>('select');
  const [method, setMethod] = useState<Method>('phone');
  const [contact, setContact] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { language } = useAuth();
  const navigate = useNavigate();

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock OTP sending
    alert(`OTP sent to ${method === 'phone' ? 'phone' : 'email'}: ${contact}`);
    setStep('otp');
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 6) {
      setStep('newPassword');
    } else {
      alert('Please enter a valid 6-digit OTP');
    }
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (newPassword.length < 8) {
      alert('Password must be at least 8 characters!');
      return;
    }
    setStep('success');
  };

  if (step === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 flex flex-col items-center justify-center p-4">
        <div className="absolute top-4 right-4">
          <LanguageToggle />
        </div>
        
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <KeyRound className="text-green-600" size={32} />
          </div>
          
          <h2 className="text-blue-900 mb-4">
            {t('passwordResetSuccess', language)}
          </h2>
          
          <p className="text-gray-600 mb-8">
            {language === 'en' && 'Your password has been successfully reset.'}
            {language === 'hi' && 'आपका पासवर्ड सफलतापूर्वक रीसेट कर दिया गया है।'}
            {language === 'gu' && 'તમારો પાસવર્ડ સફળતાપૂર્વક રીસેટ કરવામાં આવ્યો છે.'}
          </p>
          
          <Link
            to="/"
            className="inline-block bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg transition-colors"
          >
            {t('login', language)}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 flex flex-col items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <LanguageToggle />
      </div>
      
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
        <BrandHeader />
        
        <h2 className="mt-8 text-center text-blue-900">
          {t('resetPassword', language)}
        </h2>
        
        {step === 'select' && (
          <form onSubmit={handleSendOtp} className="mt-8 space-y-6">
            <div>
              <label className="block text-sm mb-3 text-gray-700">
                {language === 'en' && 'Select recovery method:'}
                {language === 'hi' && 'पुनर्प्राप्ति विधि चुनें:'}
                {language === 'gu' && 'પુનઃપ્રાપ્તિ પદ્ધતિ પસંદ કરો:'}
              </label>
              
              <div className="space-y-3">
                <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="method"
                    value="phone"
                    checked={method === 'phone'}
                    onChange={(e) => setMethod(e.target.value as Method)}
                    className="mr-3"
                  />
                  <span>
                    {language === 'en' && 'Registered Mobile Number'}
                    {language === 'hi' && 'पंजीकृत मोबाइल नंबर'}
                    {language === 'gu' && 'નોંધાયેલ મોબાઇલ નંબર'}
                  </span>
                </label>
                
                <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="method"
                    value="email"
                    checked={method === 'email'}
                    onChange={(e) => setMethod(e.target.value as Method)}
                    className="mr-3"
                  />
                  <span>
                    {language === 'en' && 'Registered Email'}
                    {language === 'hi' && 'पंजीकृत ईमेल'}
                    {language === 'gu' && 'નોંધાયેલ ઈમેલ'}
                  </span>
                </label>
              </div>
            </div>
            
            <div>
              <label className="block text-sm mb-2 text-gray-700">
                {method === 'phone' ? t('phoneNumber', language) : t('email', language)}
              </label>
              <input
                type={method === 'phone' ? 'tel' : 'email'}
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg transition-colors"
            >
              {t('sendOtp', language)}
            </button>
          </form>
        )}
        
        {step === 'otp' && (
          <form onSubmit={handleVerifyOtp} className="mt-8 space-y-6">
            <div className="text-center">
              <p className="text-gray-700 mb-4">
                {language === 'en' && `OTP sent to your ${method === 'phone' ? 'phone' : 'email'}.`}
                {language === 'hi' && `आपके ${method === 'phone' ? 'फोन' : 'ईमेल'} पर OTP भेजा गया है।`}
                {language === 'gu' && `તમારા ${method === 'phone' ? 'ફોન' : 'ઈમેલ'} પર OTP મોકલવામાં આવ્યો છે.`}
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
        
        {step === 'newPassword' && (
          <form onSubmit={handleResetPassword} className="mt-8 space-y-6">
            <div>
              <label className="block text-sm mb-2 text-gray-700">
                {t('newPassword', language)}
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                minLength={8}
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg transition-colors"
            >
              {t('resetPassword', language)}
            </button>
          </form>
        )}
        
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
