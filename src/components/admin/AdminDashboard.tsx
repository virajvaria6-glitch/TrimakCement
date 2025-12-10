import AdminLayout from './AdminLayout';
import { useAuth } from '../../App';
import { t } from '../../utils/translations';
import { 
  ShoppingCart, 
  CreditCard, 
  Package, 
  Users as UsersIcon,
  TrendingUp,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

export default function AdminDashboard() {
  const { language } = useAuth();

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl text-blue-900">{t('dashboard', language)}</h1>

        {/* Daily Summary Cards */}
        <div>
          <h2 className="text-xl text-blue-900 mb-4">
            {language === 'en' && 'Daily Summary'}
            {language === 'hi' && 'दैनिक सारांश'}
            {language === 'gu' && 'દૈનિક સારાંશ'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <ShoppingCart className="text-blue-600" size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    {language === 'en' && 'Orders Today'}
                    {language === 'hi' && 'आज के ऑर्डर'}
                    {language === 'gu' && 'આજના ઓર્ડર'}
                  </p>
                  <p className="text-2xl text-blue-900">24</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <CreditCard className="text-green-600" size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    {language === 'en' && 'Payments Received'}
                    {language === 'hi' && 'प्राप्त भुगतान'}
                    {language === 'gu' && 'પ્રાપ્ત ચુકવણી'}
                  </p>
                  <p className="text-2xl text-blue-900">₹2.8L</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <Package className="text-yellow-600" size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    {language === 'en' && 'Bags Ordered'}
                    {language === 'hi' && 'ऑर्डर किए गए बैग'}
                    {language === 'gu' && 'ઓર્ડર કરેલ બેગ્સ'}
                  </p>
                  <p className="text-2xl text-blue-900">3,420</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <UsersIcon className="text-purple-600" size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    {language === 'en' && 'Active Field Staff'}
                    {language === 'hi' && 'सक्रिय फील्ड स्टाफ'}
                    {language === 'gu' && 'સક્રિય ફિલ્ડ સ્ટાફ'}
                  </p>
                  <p className="text-2xl text-blue-900">8/12</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overall Statistics */}
        <div>
          <h2 className="text-xl text-blue-900 mb-4">
            {language === 'en' && 'Overall Statistics'}
            {language === 'hi' && 'समग्र आंकड़े'}
            {language === 'gu' && 'એકંદર આંકડા'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-sm text-gray-600 mb-2">
                {language === 'en' && 'Total Active Dealers'}
                {language === 'hi' && 'कुल सक्रिय डीलर'}
                {language === 'gu' && 'કુલ સક્રિય ડીલર્સ'}
              </p>
              <p className="text-3xl text-blue-900 mb-2">156</p>
              <div className="flex items-center gap-1 text-green-600 text-sm">
                <TrendingUp size={16} />
                <span>+8 this month</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-sm text-gray-600 mb-2">
                {language === 'en' && 'Total Outstanding'}
                {language === 'hi' && 'कुल बकाया'}
                {language === 'gu' && 'કુલ બાકી'}
              </p>
              <p className="text-3xl text-red-600 mb-2">₹45.2L</p>
              <div className="flex items-center gap-1 text-gray-600 text-sm">
                <span>Across all dealers</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-sm text-gray-600 mb-2">
                {language === 'en' && 'Monthly Revenue'}
                {language === 'hi' && 'मासिक राजस्व'}
                {language === 'gu' && 'માસિક આવક'}
              </p>
              <p className="text-3xl text-blue-900 mb-2">₹1.2Cr</p>
              <div className="flex items-center gap-1 text-green-600 text-sm">
                <TrendingUp size={16} />
                <span>+12% vs last month</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pending Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl text-blue-900 mb-4 flex items-center gap-2">
              <AlertCircle size={24} />
              {language === 'en' && 'Pending Approvals'}
              {language === 'hi' && 'लंबित अनुमोदन'}
              {language === 'gu' && 'બાકી મંજૂરીઓ'}
            </h2>
            <div className="space-y-3">
              <div className="p-3 bg-yellow-50 rounded-lg flex justify-between items-center">
                <span className="text-sm">New Dealer Registrations</span>
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">5</span>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg flex justify-between items-center">
                <span className="text-sm">Pending Orders</span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">12</span>
              </div>
              <div className="p-3 bg-green-50 rounded-lg flex justify-between items-center">
                <span className="text-sm">Payment Verifications</span>
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">8</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl text-blue-900 mb-4 flex items-center gap-2">
              <CheckCircle size={24} />
              {language === 'en' && 'Recent Activity'}
              {language === 'hi' && 'हाल की गतिविधि'}
              {language === 'gu' && 'તાજેતરની પ્રવૃત્તિ'}
            </h2>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm">Order #2025-789 approved</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm">Payment of ₹75,000 verified</p>
                <p className="text-xs text-gray-500">3 hours ago</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm">New dealer "ABC Traders" approved</p>
                <p className="text-xs text-gray-500">5 hours ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Top Dealers */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl text-blue-900 mb-4">
            {language === 'en' && 'Top Dealers (This Month)'}
            {language === 'hi' && 'शीर्ष डीलर (इस महीने)'}
            {language === 'gu' && 'ટોચના ડીલર્સ (આ મહિને)'}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm">
                    {language === 'en' && 'Rank'}
                    {language === 'hi' && 'रैंक'}
                    {language === 'gu' && 'ક્રમ'}
                  </th>
                  <th className="px-4 py-3 text-left text-sm">
                    {language === 'en' && 'Dealer Name'}
                    {language === 'hi' && 'डीलर का नाम'}
                    {language === 'gu' && 'ડીલરનું નામ'}
                  </th>
                  <th className="px-4 py-3 text-left text-sm">
                    {language === 'en' && 'Bags Purchased'}
                    {language === 'hi' && 'खरीदे गए बैग'}
                    {language === 'gu' && 'ખરીદેલી બેગ્સ'}
                  </th>
                  <th className="px-4 py-3 text-left text-sm">
                    {language === 'en' && 'Revenue'}
                    {language === 'hi' && 'राजस्व'}
                    {language === 'gu' && 'આવક'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { rank: 1, name: 'Patel Traders', bags: 1250, revenue: 625000 },
                  { rank: 2, name: 'Shah Construction', bags: 980, revenue: 490000 },
                  { rank: 3, name: 'Kumar Cement Store', bags: 850, revenue: 425000 },
                  { rank: 4, name: 'Mehta Builders', bags: 720, revenue: 360000 },
                  { rank: 5, name: 'Desai Enterprise', bags: 650, revenue: 325000 },
                ].map((dealer) => (
                  <tr key={dealer.rank} className="border-t border-gray-100">
                    <td className="px-4 py-3">
                      <span className="bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
                        {dealer.rank}
                      </span>
                    </td>
                    <td className="px-4 py-3">{dealer.name}</td>
                    <td className="px-4 py-3">{dealer.bags}</td>
                    <td className="px-4 py-3">₹{dealer.revenue.toLocaleString('en-IN')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
