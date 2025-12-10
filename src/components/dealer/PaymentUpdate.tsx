import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { CheckCircle, Upload } from 'lucide-react';

export default function PaymentUpdate() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    amount: '',
    paymentMethod: 'bank_transfer',
    transactionId: '',
    paymentDate: '',
    remarks: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Payment update submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        amount: '',
        paymentMethod: 'bank_transfer',
        transactionId: '',
        paymentDate: '',
        remarks: '',
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-gray-900 mb-2">Payment Update Submitted!</h2>
        <p className="text-gray-600">Your payment information has been submitted for admin verification.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-gray-900 mb-4">{t('payment.update')}</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Payment Amount (₹)</label>
          <input
            type="number"
            value={formData.amount}
            onChange={(e) => setFormData({...formData, amount: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBF24]"
            placeholder="Enter amount"
            min="1"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Payment Method</label>
          <select
            value={formData.paymentMethod}
            onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBF24]"
            required
          >
            <option value="bank_transfer">Bank Transfer / NEFT / RTGS</option>
            <option value="upi">UPI</option>
            <option value="cheque">Cheque</option>
            <option value="cash">Cash</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Transaction ID / Reference Number</label>
          <input
            type="text"
            value={formData.transactionId}
            onChange={(e) => setFormData({...formData, transactionId: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBF24]"
            placeholder="Enter transaction ID"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Payment Date</label>
          <input
            type="date"
            value={formData.paymentDate}
            onChange={(e) => setFormData({...formData, paymentDate: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBF24]"
            max={new Date().toISOString().split('T')[0]}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Upload Payment Proof</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#FBBF24] transition-colors cursor-pointer">
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Click to upload receipt / screenshot</p>
            <input type="file" className="hidden" accept="image/*,.pdf" />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Remarks (Optional)</label>
          <textarea
            value={formData.remarks}
            onChange={(e) => setFormData({...formData, remarks: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBF24]"
            rows={2}
            placeholder="Any additional information"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#3B4998] text-white py-3 rounded-lg hover:bg-[#2d3870] transition-colors"
        >
          {t('submit')} Payment Update
        </button>
      </form>
    </div>
  );
}
