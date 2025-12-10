import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../App';
import LanguageToggle from '../LanguageToggle';
import { t } from '../../utils/translations';
import { 
  LayoutDashboard, 
  Users, 
  UserPlus, 
  ShoppingCart, 
  CreditCard, 
  MapPin,
  FileText,
  Settings,
  LogOut
} from 'lucide-react';
import { ReactNode } from 'react';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { logout, language } = useAuth();
  const location = useLocation();

  const navItems = [
    { path: '/admin/dashboard', icon: LayoutDashboard, label: t('dashboard', language) },
    { path: '/admin/dealers', icon: Users, label: t('dealerList', language) },
    { path: '/admin/registrations', icon: UserPlus, label: t('newRegistrations', language) },
    { path: '/admin/orders', icon: ShoppingCart, label: t('ordersManagement', language) },
    { path: '/admin/payments', icon: CreditCard, label: t('paymentsReview', language) },
    { path: '/admin/field-staff', icon: MapPin, label: t('fieldStaff', language) },
    { path: '/admin/reports', icon: FileText, label: t('reports', language) },
    { path: '/admin/settings', icon: Settings, label: t('settings', language) },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <div className="bg-yellow-500 text-blue-900 p-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl">Trimak Cement - Admin Portal</h1>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <button
              onClick={logout}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <LogOut size={18} />
              <span className="hidden md:inline">{t('logout', language)}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Side Navigation (Desktop) */}
      <div className="hidden md:block fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-200 shadow-lg overflow-y-auto">
        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-yellow-500 text-blue-900' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
        
        {/* Tagline at bottom of sidebar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-yellow-50">
          <p className="text-xs text-blue-900 text-center italic">
            Building Future Restoring Past
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:ml-64 p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </div>

      {/* Bottom Navigation (Mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="grid grid-cols-4 gap-1 p-2">
          {navItems.slice(0, 4).map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                  isActive ? 'bg-yellow-500 text-blue-900' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon size={20} />
                <span className="text-xs text-center">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile bottom padding */}
      <div className="md:hidden h-20" />
    </div>
  );
}
