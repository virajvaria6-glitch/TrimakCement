import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import DealerNavigation from './DealerNavigation';
import DealerDashboard from './DealerDashboard';
import ViewBills from './ViewBills';
import AccountStatement from './AccountStatement';
import PlaceOrder from './PlaceOrder';
import PaymentUpdate from './PaymentUpdate';
import ReportIssue from './ReportIssue';
import ContactOffice from './ContactOffice';

export type DealerPage = 'dashboard' | 'bills' | 'statement' | 'order' | 'payment' | 'issue' | 'contact';

export default function DealerPortal() {
  const [currentPage, setCurrentPage] = useState<DealerPage>('dashboard');
  const { currentUser } = useAuth();
  const { t } = useLanguage();

  const renderPage = () => {
    switch (currentPage) {
      case 'bills':
        return <ViewBills />;
      case 'statement':
        return <AccountStatement />;
      case 'order':
        return <PlaceOrder />;
      case 'payment':
        return <PaymentUpdate />;
      case 'issue':
        return <ReportIssue />;
      case 'contact':
        return <ContactOffice />;
      default:
        return <DealerDashboard onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-4">
      <div className="bg-[#FFE500] p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-gray-900">
              {t('welcome')}, {currentUser?.name}
            </h1>
            <p className="text-gray-700 text-sm">{t('brand.name')}</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        {renderPage()}
      </div>

      <DealerNavigation currentPage={currentPage} onNavigate={setCurrentPage} />
    </div>
  );
}
