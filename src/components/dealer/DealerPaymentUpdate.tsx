import { useState } from 'react';
import DealerLayout from './DealerLayout';
import { useAuth } from '../../App';
import { t } from '../../utils/translations';
import { CreditCard, Upload } from 'lucide-react';

export default function DealerPaymentUpdate() {
  const { language } = useAuth();
  const [formData, setFormData] = useState({
    amount: '',
    paymentDate: '',
    paymentMode: 'bank-transfer',
    transactionId: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Payment update submitted! Awaiting admin verification.');
  };

  return (
    <DealerLayout>
      <div className="space-y-6">
        <h1 className="text-2xl text-blue-900">{t('paymentUpdate', language)}</h1>

        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg">
          <p className="text-yellow-800">
            {language === 'en' && 'Current Outstanding: '}
            {language === 'hi' && 'वर्तमान बकाया: '}
            {language === 'gu' && 'વર્તમાન બાકી: '}
            <span className="font-bold">₹1,25,000</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
            <h2 className="text-xl text-blue-900">
              {language === 'en' && 'Payment Information'}
              {language === 'hi' && 'भुगतान जानकारी'}
              {language === 'gu' && 'ચુકવણી માહિતી'}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  {language === 'en' && 'Payment Amount'}
                  {language === 'hi' && 'भुगतान राशि'}
                  {language === 'gu' && 'ચુકવણી રકમ'}
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-gray-500">₹</span>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  {language === 'en' && 'Payment Date'}
                  {language === 'hi' && 'भुगतान तिथि'}
                  {language === 'gu' && 'ચુકવણી તારીખ'}
                </label>
                <input
                  type="date"
                  name="paymentDate"
                  value={formData.paymentDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  {language === 'en' && 'Payment Mode'}
                  {language === 'hi' && 'भुगतान मोड'}
                  {language === 'gu' && 'ચુકવણી મોડ'}
                </label>
                <select
                  name="paymentMode"
                  value={formData.paymentMode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                >
                  <option value="bank-transfer">
                    {language === 'en' && 'Bank Transfer'}
                    {language === 'hi' && 'बैंक ट्रांसफर'}
                    {language === 'gu' && 'બેંક ટ્રાન્સફર'}
                  </option>
                  <option value="upi">UPI</option>
                  <option value="cheque">
                    {language === 'en' && 'Cheque'}
                    {language === 'hi' && 'चेक'}
                    {language === 'gu' && 'ચેક'}
                  </option>
                  <option value="cash">
                    {language === 'en' && 'Cash'}
                    {language === 'hi' && 'नकद'}
                    {language === 'gu' && 'રોકડ'}
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  {language === 'en' && 'Transaction ID / Reference Number'}
                  {language === 'hi' && 'लेनदेन आईडी / संदर्भ संख्या'}
                  {language === 'gu' && 'ટ્રાન્ઝેક્શન આઈડી / સંદર્ભ નંબર'}
                </label>
                <input
                  type="text"
                  name="transactionId"
                  value={formData.transactionId}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-700">
                {language === 'en' && 'Upload Payment Proof'}
                {language === 'hi' && 'भुगतान प्रमाण अपलोड करें'}
                {language === 'gu' && 'ચુકવણી પુરાવો અપલોડ કરો'}
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-900 transition-colors cursor-pointer">
                <Upload className="mx-auto text-gray-400 mb-2" size={32} />
                <p className="text-gray-600">
                  {language === 'en' && 'Click to upload or drag and drop'}
                  {language === 'hi' && 'अपलोड करने के लिए क्लिक करें या ड्रैग करें'}
                  {language === 'gu' && 'અપલોડ કરવા માટે ક્લિક કરો અથવા ડ્રેગ કરો'}
                </p>
                <p className="text-xs text-gray-500 mt-1">PNG, JPG, PDF (Max 5MB)</p>
                <input type="file" className="hidden" accept="image/*,application/pdf" />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-700">
                {language === 'en' && 'Additional Notes'}
                {language === 'hi' && 'अतिरिक्त नोट्स'}
                {language === 'gu' && 'વધારાની નોંધો'}
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                rows={4}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-800 text-white py-4 rounded-lg flex items-center justify-center gap-2 transition-colors text-lg"
          >
            <CreditCard size={24} />
            {t('submit', language)}
          </button>
        </form>
      </div>
    </DealerLayout>
  );
}
