import DealerLayout from './DealerLayout';
import { useAuth } from '../../App';
import { t } from '../../utils/translations';
import { Phone, Mail, MapPin, Clock, Users } from 'lucide-react';

export default function DealerContact() {
  const { language } = useAuth();

  return (
    <DealerLayout>
      <div className="space-y-6">
        <h1 className="text-2xl text-blue-900">{t('contactOffice', language)}</h1>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Phone className="text-blue-900" size={24} />
              </div>
              <h2 className="text-xl text-blue-900">
                {language === 'en' && 'Phone'}
                {language === 'hi' && 'फोन'}
                {language === 'gu' && 'ફોન'}
              </h2>
            </div>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="text-sm text-gray-500">Main Office:</span><br />
                <a href="tel:+919876543210" className="text-blue-900 hover:underline">+91 98765 43210</a>
              </p>
              <p className="text-gray-700">
                <span className="text-sm text-gray-500">Sales Department:</span><br />
                <a href="tel:+919876543211" className="text-blue-900 hover:underline">+91 98765 43211</a>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Mail className="text-green-600" size={24} />
              </div>
              <h2 className="text-xl text-blue-900">
                {language === 'en' && 'Email'}
                {language === 'hi' && 'ईमेल'}
                {language === 'gu' && 'ઈમેલ'}
              </h2>
            </div>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="text-sm text-gray-500">General Inquiries:</span><br />
                <a href="mailto:info@trimakcement.com" className="text-blue-900 hover:underline break-all">
                  info@trimakcement.com
                </a>
              </p>
              <p className="text-gray-700">
                <span className="text-sm text-gray-500">Sales Support:</span><br />
                <a href="mailto:sales@trimakcement.com" className="text-blue-900 hover:underline break-all">
                  sales@trimakcement.com
                </a>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <MapPin className="text-yellow-600" size={24} />
              </div>
              <h2 className="text-xl text-blue-900">
                {language === 'en' && 'Address'}
                {language === 'hi' && 'पता'}
                {language === 'gu' && 'સરનામું'}
              </h2>
            </div>
            <p className="text-gray-700">
              Ghanshyam Elements<br />
              Trimak Cement Office<br />
              Industrial Area, Phase 2<br />
              Gujarat - 382010<br />
              India
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Clock className="text-purple-600" size={24} />
              </div>
              <h2 className="text-xl text-blue-900">
                {language === 'en' && 'Office Hours'}
                {language === 'hi' && 'कार्यालय समय'}
                {language === 'gu' && 'ઓફિસના કલાકો'}
              </h2>
            </div>
            <div className="space-y-1 text-gray-700">
              <p>
                {language === 'en' && 'Monday - Friday: '}
                {language === 'hi' && 'सोमवार - शुक्रवार: '}
                {language === 'gu' && 'સોમવાર - શુક્રવાર: '}
                9:00 AM - 6:00 PM
              </p>
              <p>
                {language === 'en' && 'Saturday: '}
                {language === 'hi' && 'शनिवार: '}
                {language === 'gu' && 'શનિવાર: '}
                9:00 AM - 2:00 PM
              </p>
              <p>
                {language === 'en' && 'Sunday: '}
                {language === 'hi' && 'रविवार: '}
                {language === 'gu' && 'રવિવાર: '}
                {language === 'en' && 'Closed'}
                {language === 'hi' && 'बंद'}
                {language === 'gu' && 'બંધ'}
              </p>
            </div>
          </div>
        </div>

        {/* Key Contacts */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-3 mb-6">
            <Users className="text-blue-900" size={24} />
            <h2 className="text-xl text-blue-900">
              {language === 'en' && 'Key Contacts'}
              {language === 'hi' && 'प्रमुख संपर्क'}
              {language === 'gu' && 'મુખ્ય સંપર્કો'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">
                {language === 'en' && 'Sales Manager'}
                {language === 'hi' && 'बिक्री प्रबंधक'}
                {language === 'gu' && 'સેલ્સ મેનેજર'}
              </p>
              <p className="text-gray-800">Rajesh Kumar</p>
              <a href="tel:+919876543212" className="text-sm text-blue-900 hover:underline">
                +91 98765 43212
              </a>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">
                {language === 'en' && 'Accounts Manager'}
                {language === 'hi' && 'लेखा प्रबंधक'}
                {language === 'gu' && 'એકાઉન્ટ્સ મેનેજર'}
              </p>
              <p className="text-gray-800">Priya Patel</p>
              <a href="tel:+919876543213" className="text-sm text-blue-900 hover:underline">
                +91 98765 43213
              </a>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">
                {language === 'en' && 'Customer Support'}
                {language === 'hi' && 'ग्राहक सहायता'}
                {language === 'gu' && 'ગ્રાહક સપોર્ટ'}
              </p>
              <p className="text-gray-800">Support Team</p>
              <a href="tel:+919876543214" className="text-sm text-blue-900 hover:underline">
                +91 98765 43214
              </a>
            </div>
          </div>
        </div>

        {/* Quick Message */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl text-blue-900 mb-4">
            {language === 'en' && 'Send Quick Message'}
            {language === 'hi' && 'त्वरित संदेश भेजें'}
            {language === 'gu' && 'ઝડપી સંદેશ મોકલો'}
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-2 text-gray-700">
                {language === 'en' && 'Message'}
                {language === 'hi' && 'संदेश'}
                {language === 'gu' && 'સંદેશ'}
              </label>
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                rows={4}
                placeholder={language === 'en' ? 'Type your message here...' : language === 'hi' ? 'अपना संदेश यहां लिखें...' : 'તમારો સંદેશ અહીં લખો...'}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg transition-colors"
            >
              {language === 'en' && 'Send Message'}
              {language === 'hi' && 'संदेश भेजें'}
              {language === 'gu' && 'સંદેશ મોકલો'}
            </button>
          </form>
        </div>
      </div>
    </DealerLayout>
  );
}
