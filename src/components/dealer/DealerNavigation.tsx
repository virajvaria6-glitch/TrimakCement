import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import { 
  LayoutDashboard, 
  FileText, 
  Receipt, 
  ShoppingCart, 
  CreditCard, 
  AlertCircle, 
  Phone,
  LogOut
} from 'lucide-react';
import { DealerPage } from './DealerPortal';

interface DealerNavigationProps {
  currentPage: DealerPage;
  onNavigate: (page: DealerPage) => void;
}

export default function DealerNavigation({ currentPage, onNavigate }: DealerNavigationProps) {
  const { t } = useLanguage();
  const { logout } = useAuth();

  const navItems = [
    { id: 'dashboard' as DealerPage, label: t('dashboard'), icon: LayoutDashboard },
    { id: 'bills' as DealerPage, label: t('bills'), icon: FileText },
    { id: 'statement' as DealerPage, label: t('account.statement'), icon: Receipt },
    { id: 'order' as DealerPage, label: t('place.order'), icon: ShoppingCart },
    { id: 'payment' as DealerPage, label: t('payment.update'), icon: CreditCard },
    { id: 'issue' as DealerPage, label: t('report.issue'), icon: AlertCircle },
    { id: 'contact' as DealerPage, label: t('contact.office'), icon: Phone },
  ];

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
        <div className="grid grid-cols-4 gap-1 p-2">
          {navItems.slice(0, 4).map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-[#FBBF24] text-gray-900'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-4 gap-1 p-2 border-t border-gray-100">
          {navItems.slice(4).map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-[#FBBF24] text-gray-900'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}
          <button
            onClick={logout}
            className="flex flex-col items-center gap-1 p-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-xs">{t('logout')}</span>
          </button>
        </div>
      </div>

      {/* Desktop Side Navigation */}
      <div className="hidden md:block fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-gray-200 shadow-lg z-40 pt-20">
        <div className="p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-[#FBBF24] text-gray-900'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
          <button
            onClick={logout}
            className="w-full flex items-center gap-3 p-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors mt-4"
          >
            <LogOut className="w-5 h-5" />
            <span>{t('logout')}</span>
          </button>
        </div>
      </div>

      {/* Spacer for desktop */}
      <div className="hidden md:block w-64"></div>
    </>
  );
}
