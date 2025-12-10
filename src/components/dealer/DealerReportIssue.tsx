import { useState } from 'react';
import DealerLayout from './DealerLayout';
import { useAuth } from '../../App';
import { t } from '../../utils/translations';
import { AlertCircle, Send } from 'lucide-react';

export default function DealerReportIssue() {
  const { language } = useAuth();
  const [formData, setFormData] = useState({
    issueType: 'delivery',
    subject: '',
    description: '',
    priority: 'medium'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Issue reported successfully! Our team will contact you soon.');
    setFormData({
      issueType: 'delivery',
      subject: '',
      description: '',
      priority: 'medium'
    });
  };

  return (
    <DealerLayout>
      <div className="space-y-6">
        <h1 className="text-2xl text-blue-900">{t('reportIssue', language)}</h1>

        <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-lg">
          <p className="text-blue-800">
            {language === 'en' && 'We value your feedback. Please describe the issue in detail and we will get back to you within 24 hours.'}
            {language === 'hi' && 'हम आपकी प्रतिक्रिया को महत्व देते हैं। कृपया समस्या का विस्तार से वर्णन करें और हम 24 घंटे के भीतर आपसे संपर्क करेंगे।'}
            {language === 'gu' && 'અમે તમારા પ્રતિસાદની કદર કરીએ છીએ. કૃપા કરીને સમસ્યાનું વિગતવાર વર્ણન કરો અને અમે 24 કલાકમાં તમારો સંપર્ક કરીશું.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  {language === 'en' && 'Issue Type'}
                  {language === 'hi' && 'समस्या प्रकार'}
                  {language === 'gu' && 'સમસ્યા પ્રકાર'}
                </label>
                <select
                  name="issueType"
                  value={formData.issueType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                >
                  <option value="delivery">
                    {language === 'en' && 'Delivery Issue'}
                    {language === 'hi' && 'डिलीवरी समस्या'}
                    {language === 'gu' && 'ડિલિવરી સમસ્યા'}
                  </option>
                  <option value="quality">
                    {language === 'en' && 'Quality Issue'}
                    {language === 'hi' && 'गुणवत्ता समस्या'}
                    {language === 'gu' && 'ગુણવત્તા સમસ્યા'}
                  </option>
                  <option value="billing">
                    {language === 'en' && 'Billing Issue'}
                    {language === 'hi' && 'बिलिंग समस्या'}
                    {language === 'gu' && 'બિલિંગ સમસ્યા'}
                  </option>
                  <option value="payment">
                    {language === 'en' && 'Payment Issue'}
                    {language === 'hi' && 'भुगतान समस्या'}
                    {language === 'gu' && 'ચુકવણી સમસ્યા'}
                  </option>
                  <option value="other">
                    {language === 'en' && 'Other'}
                    {language === 'hi' && 'अन्य'}
                    {language === 'gu' && 'અન્ય'}
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  {language === 'en' && 'Priority'}
                  {language === 'hi' && 'प्राथमिकता'}
                  {language === 'gu' && 'પ્રાથમિકતા'}
                </label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                >
                  <option value="low">
                    {language === 'en' && 'Low'}
                    {language === 'hi' && 'कम'}
                    {language === 'gu' && 'ઓછું'}
                  </option>
                  <option value="medium">
                    {language === 'en' && 'Medium'}
                    {language === 'hi' && 'मध्यम'}
                    {language === 'gu' && 'મધ્યમ'}
                  </option>
                  <option value="high">
                    {language === 'en' && 'High'}
                    {language === 'hi' && 'उच्च'}
                    {language === 'gu' && 'ઉચ્ચ'}
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-700">
                {language === 'en' && 'Subject'}
                {language === 'hi' && 'विषय'}
                {language === 'gu' && 'વિષય'}
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                placeholder={language === 'en' ? 'Brief description of the issue' : language === 'hi' ? 'समस्या का संक्षिप्त विवरण' : 'સમસ્યાનું સંક્ષિપ્ત વર્ણન'}
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-700">
                {language === 'en' && 'Detailed Description'}
                {language === 'hi' && 'विस्तृत विवरण'}
                {language === 'gu' && 'વિગતવાર વર્ણન'}
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                rows={6}
                placeholder={language === 'en' ? 'Please provide as much detail as possible...' : language === 'hi' ? 'कृपया जितना संभव हो उतना विवरण प्रदान करें...' : 'કૃપા કરીને શક્ય તેટલી વિગતો પ્રદાન કરો...'}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-800 text-white py-4 rounded-lg flex items-center justify-center gap-2 transition-colors text-lg"
          >
            <Send size={24} />
            {t('submit', language)}
          </button>
        </form>

        {/* Previous Issues */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl text-blue-900 mb-4">
            {language === 'en' && 'Recent Issues'}
            {language === 'hi' && 'हाल की समस्याएं'}
            {language === 'gu' && 'તાજેતરની સમસ્યાઓ'}
          </h2>
          <div className="space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-sm">Delayed delivery for Order #2025-456</p>
                    <p className="text-xs text-gray-500">Reported on Dec 8, 2025</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                  {language === 'en' && 'In Progress'}
                  {language === 'hi' && 'प्रगति में'}
                  {language === 'gu' && 'પ્રગતિમાં'}
                </span>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-sm">Invoice discrepancy</p>
                    <p className="text-xs text-gray-500">Reported on Nov 28, 2025</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                  {language === 'en' && 'Resolved'}
                  {language === 'hi' && 'हल हो गया'}
                  {language === 'gu' && 'ઉકેલાઈ ગયો'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DealerLayout>
  );
}
