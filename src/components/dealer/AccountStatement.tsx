import { useLanguage } from '../../contexts/LanguageContext';
import { Download } from 'lucide-react';

export default function AccountStatement() {
  const { t } = useLanguage();

  const transactions = [
    { id: 1, date: '2024-12-05', type: 'Debit', description: 'Invoice INV-001', amount: -75000, balance: 125000 },
    { id: 2, date: '2024-12-01', type: 'Credit', description: 'Payment Received', amount: 50000, balance: 50000 },
    { id: 3, date: '2024-11-28', type: 'Debit', description: 'Invoice INV-002', amount: -50000, balance: 100000 },
    { id: 4, date: '2024-11-20', type: 'Credit', description: 'Payment Received', amount: 75000, balance: 50000 },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-gray-900">{t('account.statement')}</h2>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#FBBF24] text-gray-900 rounded-lg hover:bg-[#f0b419] transition-colors">
            <Download className="w-4 h-4" />
            {t('download')}
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm text-gray-700">Date</th>
                <th className="px-4 py-3 text-left text-sm text-gray-700">Type</th>
                <th className="px-4 py-3 text-left text-sm text-gray-700">Description</th>
                <th className="px-4 py-3 text-right text-sm text-gray-700">Amount</th>
                <th className="px-4 py-3 text-right text-sm text-gray-700">Balance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {transactions.map((txn) => (
                <tr key={txn.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-600">{txn.date}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-2 py-1 rounded text-xs ${
                      txn.type === 'Credit' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {txn.type}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{txn.description}</td>
                  <td className={`px-4 py-3 text-sm text-right ${
                    txn.amount > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {txn.amount > 0 ? '+' : ''}₹{Math.abs(txn.amount).toLocaleString('en-IN')}
                  </td>
                  <td className="px-4 py-3 text-sm text-right text-gray-900">
                    ₹{txn.balance.toLocaleString('en-IN')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
