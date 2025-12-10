import DealerLayout from './DealerLayout';
import { useAuth } from '../../App';
import { t } from '../../utils/translations';
import { Download, TrendingDown, TrendingUp } from 'lucide-react';

export default function DealerStatement() {
  const { language } = useAuth();

  // Mock statement data
  const transactions = [
    { date: '2025-12-05', description: 'Payment Received', credit: 50000, debit: 0, balance: 125000 },
    { date: '2025-12-01', description: 'Invoice INV-2025-456', credit: 0, debit: 75000, balance: 175000 },
    { date: '2025-11-25', description: 'Payment Received', credit: 40000, debit: 0, balance: 100000 },
    { date: '2025-11-20', description: 'Invoice INV-2025-432', credit: 0, debit: 50000, balance: 140000 },
    { date: '2025-11-15', description: 'Payment Received', credit: 60000, debit: 0, balance: 90000 },
  ];

  return (
    <DealerLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl text-blue-900">{t('accountStatement', language)}</h1>
          <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <Download size={18} />
            {language === 'en' && 'Download PDF'}
            {language === 'hi' && 'पीडीएफ डाउनलोड करें'}
            {language === 'gu' && 'પીડીએફ ડાઉનલોડ કરો'}
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-sm text-gray-600 mb-2">
              {language === 'en' && 'Total Purchases'}
              {language === 'hi' && 'कुल खरीद'}
              {language === 'gu' && 'કુલ ખરીદી'}
            </p>
            <p className="text-2xl text-blue-900">₹4,50,000</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-sm text-gray-600 mb-2">
              {language === 'en' && 'Total Payments'}
              {language === 'hi' && 'कुल भुगतान'}
              {language === 'gu' && 'કુલ ચુકવણી'}
            </p>
            <p className="text-2xl text-green-600">₹3,25,000</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-sm text-gray-600 mb-2">
              {language === 'en' && 'Current Balance'}
              {language === 'hi' && 'वर्तमान शेष'}
              {language === 'gu' && 'વર્તમાન બેલેન્સ'}
            </p>
            <p className="text-2xl text-red-600">₹1,25,000</p>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">
                    {language === 'en' && 'Date'}
                    {language === 'hi' && 'तारीख'}
                    {language === 'gu' && 'તારીખ'}
                  </th>
                  <th className="px-6 py-4 text-left">
                    {language === 'en' && 'Description'}
                    {language === 'hi' && 'विवरण'}
                    {language === 'gu' && 'વર્ણન'}
                  </th>
                  <th className="px-6 py-4 text-right">
                    {language === 'en' && 'Credit'}
                    {language === 'hi' && 'जमा'}
                    {language === 'gu' && 'ક્રેડિટ'}
                  </th>
                  <th className="px-6 py-4 text-right">
                    {language === 'en' && 'Debit'}
                    {language === 'hi' && 'नामे'}
                    {language === 'gu' && 'ડેબિટ'}
                  </th>
                  <th className="px-6 py-4 text-right">
                    {language === 'en' && 'Balance'}
                    {language === 'hi' && 'शेष'}
                    {language === 'gu' && 'બેલેન્સ'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4">{txn.date}</td>
                    <td className="px-6 py-4">{txn.description}</td>
                    <td className="px-6 py-4 text-right">
                      {txn.credit > 0 && (
                        <span className="text-green-600 flex items-center justify-end gap-1">
                          <TrendingUp size={16} />
                          ₹{txn.credit.toLocaleString('en-IN')}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      {txn.debit > 0 && (
                        <span className="text-red-600 flex items-center justify-end gap-1">
                          <TrendingDown size={16} />
                          ₹{txn.debit.toLocaleString('en-IN')}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">₹{txn.balance.toLocaleString('en-IN')}</td>
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
