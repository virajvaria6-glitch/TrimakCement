import { useLanguage } from '../../contexts/LanguageContext';
import { UserCircle, Shield, UserPlus } from 'lucide-react';
import Logo from '../Logo';

interface LoginSelectionProps {
  onDealerLogin: () => void;
  onAdminLogin: () => void;
  onDealerRegister: () => void;
}

export default function LoginSelection({ onDealerLogin, onAdminLogin, onDealerRegister }: LoginSelectionProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#FFE500] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Logo size="lg" showTagline />
        
        <div className="mt-8 space-y-4">
          <h2 className="text-center text-gray-800 text-xl mb-6">
            {t('welcome')} {t('brand.name')}
          </h2>
          
          <button
            onClick={onDealerLogin}
            className="w-full bg-white rounded-lg shadow-lg p-6 flex items-center gap-4 hover:shadow-xl transition-shadow"
          >
            <div className="bg-[#3B4998] rounded-full p-4">
              <UserCircle className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-gray-900">{t('dealer.login')}</h3>
            </div>
          </button>

          <button
            onClick={onAdminLogin}
            className="w-full bg-white rounded-lg shadow-lg p-6 flex items-center gap-4 hover:shadow-xl transition-shadow"
          >
            <div className="bg-[#3B4998] rounded-full p-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-gray-900">{t('admin.login')}</h3>
            </div>
          </button>

          <button
            onClick={onDealerRegister}
            className="w-full bg-[#3B4998] text-white rounded-lg shadow-lg p-6 flex items-center gap-4 hover:bg-[#2d3870] transition-colors"
          >
            <div className="bg-[#FBBF24] rounded-full p-4">
              <UserPlus className="w-8 h-8 text-[#3B4998]" />
            </div>
            <div className="flex-1 text-left">
              <h3>{t('dealer.register')}</h3>
            </div>
          </button>
        </div>

        <div className="mt-8 text-center text-gray-700 text-sm">
          <p>{t('company.name')}</p>
        </div>
      </div>
    </div>
  );
}
