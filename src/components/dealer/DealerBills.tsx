import DealerLayout from './DealerLayout';
import { useAuth } from '../../App';
import { t } from '../../utils/translations';
import { FileText, Download, Eye } from 'lucide-react';

export default function DealerBills() {
  const { language } = useAuth();

  // Mock bills data
  const bills = [
    { id: 'INV-2025-456', date: '2025-12-01', amount: 75000, bags: 150, status: 'Paid' },
    { id: 'INV-2025-432', date: '2025-11-20', amount: 50000, bags: 100, status: 'Paid' },
    { id: 'INV-2025-410', date: '2025-11-05', amount: 100000, bags: 200, status: 'Pending' },
    { id: 'INV-2025-389', date: '2025-10-25', amount: 60000, bags: 120, status: 'Paid' },
  ];

  return (
    <DealerLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl text-blue-900">{t('bills', language)}</h1>
          <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition-colors">
            {language === 'en' && 'Download All'}
            {language === 'hi' && 'सभी डाउनलोड करें'}
            {language === 'gu' && 'બધા ડાઉનલોડ કરો'}
          </button>
        </div>

        {/* Bills List */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">
                    {language === 'en' && 'Invoice ID'}
                    {language === 'hi' && 'चालान आईडी'}
                    {language === 'gu' && 'ઇન્વૉઇસ આઈડી'}
                  </th>
                  <th className="px-6 py-4 text-left">
                    {language === 'en' && 'Date'}
                    {language === 'hi' && 'तारीख'}
                    {language === 'gu' && 'તારીખ'}
                  </th>
                  <th className="px-6 py-4 text-left">
                    {language === 'en' && 'Amount'}
                    {language === 'hi' && 'राशि'}
                    {language === 'gu' && 'રકમ'}
                  </th>
                  <th className="px-6 py-4 text-left">
                    {language === 'en' && 'Bags'}
                    {language === 'hi' && 'बैग'}
                    {language === 'gu' && 'બેગ્સ'}
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
                {bills.map((bill, index) => (
                  <tr key={bill.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <FileText size={18} className="text-blue-900" />
                        <span>{bill.id}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">{bill.date}</td>
                    <td className="px-6 py-4">₹{bill.amount.toLocaleString('en-IN')}</td>
                    <td className="px-6 py-4">{bill.bags}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        bill.status === 'Paid' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {bill.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="text-blue-900 hover:bg-blue-50 p-2 rounded transition-colors">
                          <Eye size={18} />
                        </button>
                        <button className="text-green-600 hover:bg-green-50 p-2 rounded transition-colors">
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
    </DealerLayout>
  );
}
