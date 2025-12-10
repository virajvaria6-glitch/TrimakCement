import DealerLayout from './DealerLayout';
import { useAuth } from '../../App';
import { t } from '../../utils/translations';
import { 
  AlertTriangle, 
  DollarSign, 
  Calendar, 
  Package,
  FileText,
  Receipt,
  ShoppingCart,
  CreditCard,
  AlertCircle,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DealerDashboard() {
  const { language } = useAuth();

  // Mock data
  const pendingAmount = 125000;
  const lastPayment = 50000;
  const monthlyBags = 450;

  const quickActions = [
    { path: '/dealer/bills', icon: FileText, label: t('bills', language), color: 'bg-blue-500' },
    { path: '/dealer/statement', icon: Receipt, label: t('accountStatement', language), color: 'bg-green-500' },
    { path: '/dealer/place-order', icon: ShoppingCart, label: t('placeOrder', language), color: 'bg-yellow-500' },
    { path: '/dealer/payment-update', icon: CreditCard, label: t('paymentUpdate', language), color: 'bg-purple-500' },
    { path: '/dealer/report-issue', icon: AlertCircle, label: t('reportIssue', language), color: 'bg-red-500' },
    { path: '/dealer/contact', icon: Phone, label: t('contactOffice', language), color: 'bg-indigo-500' },
  ];

  return (
    <DealerLayout>
      <div className="space-y-6">
        {/* Alert Banner */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg shadow-md">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-yellow-600 flex-shrink-0" size={24} />
            <div>
              <p className="text-yellow-800">
                {t('pendingAlert', language)} <span className="font-bold">₹{pendingAmount.toLocaleString('en-IN')}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-4">
              <div className="bg-red-100 p-3 rounded-lg">
                <DollarSign className="text-red-600" size={28} />
              </div>
              <div>
                <p className="text-sm text-gray-600">{t('outstandingAmount', language)}</p>
                <p className="text-2xl text-blue-900">₹{pendingAmount.toLocaleString('en-IN')}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Calendar className="text-green-600" size={28} />
              </div>
              <div>
                <p className="text-sm text-gray-600">{t('lastPayment', language)}</p>
                <p className="text-2xl text-blue-900">₹{lastPayment.toLocaleString('en-IN')}</p>
                <p className="text-xs text-gray-500">Dec 5, 2025</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Package className="text-blue-600" size={28} />
              </div>
              <div>
                <p className="text-sm text-gray-600">{t('monthlyBags', language)}</p>
                <p className="text-2xl text-blue-900">{monthlyBags}</p>
                <p className="text-xs text-gray-500">This month</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-xl text-blue-900 mb-4">
            {language === 'en' && 'Quick Actions'}
            {language === 'hi' && 'त्वरित कार्रवाई'}
            {language === 'gu' && 'ઝડપી ક્રિયાઓ'}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.path}
                  to={action.path}
                  className="bg-white hover:shadow-lg transition-shadow rounded-xl p-6 flex items-center gap-4"
                >
                  <div className={`${action.color} p-3 rounded-lg text-white`}>
                    <Icon size={28} />
                  </div>
                  <span className="text-gray-800">{action.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl text-blue-900 mb-4">
            {language === 'en' && 'Recent Activity'}
            {language === 'hi' && 'हाल की गतिविधि'}
            {language === 'gu' && 'તાજેતરની પ્રવૃત્તિ'}
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded">
                  <CreditCard className="text-green-600" size={18} />
                </div>
                <div>
                  <p className="text-sm">Payment Received</p>
                  <p className="text-xs text-gray-500">Dec 5, 2025</p>
                </div>
              </div>
              <p className="text-green-600">+ ₹50,000</p>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded">
                  <ShoppingCart className="text-blue-600" size={18} />
                </div>
                <div>
                  <p className="text-sm">Order Delivered</p>
                  <p className="text-xs text-gray-500">Dec 3, 2025</p>
                </div>
              </div>
              <p className="text-gray-600">150 bags</p>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-100 p-2 rounded">
                  <FileText className="text-yellow-600" size={18} />
                </div>
                <div>
                  <p className="text-sm">New Invoice</p>
                  <p className="text-xs text-gray-500">Dec 1, 2025</p>
                </div>
              </div>
              <p className="text-gray-600">INV-2025-456</p>
            </div>
          </div>
        </div>
      </div>
    </DealerLayout>
  );
}
