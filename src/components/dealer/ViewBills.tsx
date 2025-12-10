import { useLanguage } from '../../contexts/LanguageContext';
import { Download, Eye } from 'lucide-react';

export default function ViewBills() {
  const { t } = useLanguage();

  const bills = [
    { id: 'INV-001', date: '2024-12-05', amount: 75000, items: '150 bags OPC' },
    { id: 'INV-002', date: '2024-11-28', amount: 50000, items: '100 bags PSC' },
    { id: 'INV-003', date: '2024-11-15', amount: 62500, items: '125 bags GGBS' },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-gray-900 mb-4">{t('bills')}</h2>
        
        <div className="space-y-3">
          {bills.map((bill) => (
            <div key={bill.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-gray-900">{bill.id}</p>
                  <p className="text-sm text-gray-600">{bill.date}</p>
                </div>
                <p className="text-lg text-gray-900">₹{bill.amount.toLocaleString('en-IN')}</p>
              </div>
              <p className="text-gray-600 text-sm mb-3">{bill.items}</p>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2 bg-[#3B4998] text-white rounded-lg hover:bg-[#2d3870] transition-colors">
                  <Eye className="w-4 h-4" />
                  {t('view')}
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#FBBF24] text-gray-900 rounded-lg hover:bg-[#f0b419] transition-colors">
                  <Download className="w-4 h-4" />
                  {t('download')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
