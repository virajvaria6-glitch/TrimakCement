import AdminLayout from './AdminLayout';
import { useAuth } from '../../App';
import { CheckCircle, XCircle, Download } from 'lucide-react';

export default function AdminPaymentsReview() {
  const { language } = useAuth();

  const payments = [
    { id: 'PAY-2025-345', dealer: 'Patel Traders', amount: 50000, mode: 'Bank Transfer', transactionId: 'TXN123456', date: '2025-12-09', status: 'Pending' },
    { id: 'PAY-2025-344', dealer: 'Shah Construction', amount: 75000, mode: 'UPI', transactionId: 'UPI987654', date: '2025-12-08', status: 'Pending' },
    { id: 'PAY-2025-343', dealer: 'Kumar Store', amount: 30000, mode: 'Cheque', transactionId: 'CHQ456789', date: '2025-12-07', status: 'Verified' },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl text-blue-900">
          {language === 'en' && 'Payment Verification'}
          {language === 'hi' && 'भुगतान सत्यापन'}
          {language === 'gu' && 'ચુકવણી ચકાસણી'}
        </h1>

        <div className="space-y-4">
          {payments.map((payment) => (
            <div key={payment.id} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg text-blue-900">{payment.id}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      payment.status === 'Pending' 
                        ? 'bg-yellow-100 text-yellow-700' 
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {payment.status}
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-3 text-sm text-gray-700">
                    <div>
                      <span className="text-gray-500">
                        {language === 'en' && 'Dealer: '}
                        {language === 'hi' && 'डीलर: '}
                        {language === 'gu' && 'ડીલર: '}
                      </span>
                      {payment.dealer}
                    </div>
                    <div>
                      <span className="text-gray-500">
                        {language === 'en' && 'Amount: '}
                        {language === 'hi' && 'राशि: '}
                        {language === 'gu' && 'રકમ: '}
                      </span>
                      ₹{payment.amount.toLocaleString('en-IN')}
                    </div>
                    <div>
                      <span className="text-gray-500">
                        {language === 'en' && 'Mode: '}
                        {language === 'hi' && 'मोड: '}
                        {language === 'gu' && 'મોડ: '}
                      </span>
                      {payment.mode}
                    </div>
                    <div>
                      <span className="text-gray-500">
                        {language === 'en' && 'Transaction ID: '}
                        {language === 'hi' && 'लेनदेन आईडी: '}
                        {language === 'gu' && 'ટ્રાન્ઝેક્શન આઈડી: '}
                      </span>
                      {payment.transactionId}
                    </div>
                    <div>
                      <span className="text-gray-500">
                        {language === 'en' && 'Date: '}
                        {language === 'hi' && 'तारीख: '}
                        {language === 'gu' && 'તારીખ: '}
                      </span>
                      {payment.date}
                    </div>
                  </div>
                </div>

                <div className="flex md:flex-col gap-2">
                  <button className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
                    <Download size={18} />
                    {language === 'en' && 'Proof'}
                    {language === 'hi' && 'प्रमाण'}
                    {language === 'gu' && 'પુરાવો'}
                  </button>
                  {payment.status === 'Pending' && (
                    <>
                      <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                        <CheckCircle size={18} />
                        {language === 'en' && 'Verify'}
                        {language === 'hi' && 'सत्यापित'}
                        {language === 'gu' && 'ચકાસો'}
                      </button>
                      <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors">
                        <XCircle size={18} />
                        {language === 'en' && 'Reject'}
                        {language === 'hi' && 'अस्वीकार'}
                        {language === 'gu' && 'નકારો'}
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
