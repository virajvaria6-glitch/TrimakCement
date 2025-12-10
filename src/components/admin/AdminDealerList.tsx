import { useState } from 'react';
import AdminLayout from './AdminLayout';
import { useAuth } from '../../App';
import { t } from '../../utils/translations';
import { Search, Eye, Download, FileText } from 'lucide-react';

export default function AdminDealerList() {
  const { language } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');

  const dealers = [
    { id: 'D001', name: 'Patel Traders', outstanding: 125000, totalPurchases: 2500000, lastPayment: '2025-12-05', status: 'Active' },
    { id: 'D002', name: 'Shah Construction', outstanding: 75000, totalPurchases: 1800000, lastPayment: '2025-12-03', status: 'Active' },
    { id: 'D003', name: 'Kumar Cement Store', outstanding: 200000, totalPurchases: 3200000, lastPayment: '2025-11-28', status: 'Active' },
    { id: 'D004', name: 'Mehta Builders', outstanding: 50000, totalPurchases: 950000, lastPayment: '2025-12-07', status: 'Active' },
    { id: 'D005', name: 'Desai Enterprise', outstanding: 180000, totalPurchases: 2800000, lastPayment: '2025-11-20', status: 'Active' },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-2xl text-blue-900">{t('dealerList', language)}</h1>
          <div className="flex gap-2">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-4 py-2 rounded-lg transition-colors">
              {language === 'en' && 'Export CSV'}
              {language === 'hi' && 'CSV निर्यात'}
              {language === 'gu' && 'CSV નિકાસ'}
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder={language === 'en' ? 'Search dealers...' : language === 'hi' ? 'डीलर खोजें...' : 'ડીલર શોધો...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Dealers Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-yellow-500 text-blue-900">
                <tr>
                  <th className="px-6 py-4 text-left">
                    {language === 'en' && 'Dealer ID'}
                    {language === 'hi' && 'डीलर आईडी'}
                    {language === 'gu' && 'ડીલર આઈડી'}
                  </th>
                  <th className="px-6 py-4 text-left">
                    {language === 'en' && 'Name'}
                    {language === 'hi' && 'नाम'}
                    {language === 'gu' && 'નામ'}
                  </th>
                  <th className="px-6 py-4 text-right">
                    {language === 'en' && 'Outstanding'}
                    {language === 'hi' && 'बकाया'}
                    {language === 'gu' && 'બાકી'}
                  </th>
                  <th className="px-6 py-4 text-right">
                    {language === 'en' && 'Total Purchases'}
                    {language === 'hi' && 'कुल खरीद'}
                    {language === 'gu' && 'કુલ ખરીદી'}
                  </th>
                  <th className="px-6 py-4 text-left">
                    {language === 'en' && 'Last Payment'}
                    {language === 'hi' && 'अंतिम भुगतान'}
                    {language === 'gu' && 'છેલ્લી ચુકવણી'}
                  </th>
                  <th className="px-6 py-4 text-left">
                    {language === 'en' && 'Status'}
                    {language === 'hi' && 'स्थिति'}
                    {language === 'gu' && 'સ્થિતિ'}
                  </th>
                  <th className="px-6 py-4 text-left">
                    {language === 'en' && 'Actions'}
                    {language === 'hi' && 'कार्रवाई'}
                    {language === 'gu' && 'ક્રિયાઓ'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {dealers.map((dealer, index) => (
                  <tr key={dealer.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4">{dealer.id}</td>
                    <td className="px-6 py-4">{dealer.name}</td>
                    <td className="px-6 py-4 text-right text-red-600">
                      ₹{dealer.outstanding.toLocaleString('en-IN')}
                    </td>
                    <td className="px-6 py-4 text-right">
                      ₹{dealer.totalPurchases.toLocaleString('en-IN')}
                    </td>
                    <td className="px-6 py-4">{dealer.lastPayment}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        {dealer.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="text-blue-900 hover:bg-blue-50 p-2 rounded transition-colors">
                          <Eye size={18} />
                        </button>
                        <button className="text-green-600 hover:bg-green-50 p-2 rounded transition-colors">
                          <FileText size={18} />
                        </button>
                        <button className="text-gray-600 hover:bg-gray-100 p-2 rounded transition-colors">
                          <Download size={18} />
                        </button>
                      </div>
                    </td>
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
