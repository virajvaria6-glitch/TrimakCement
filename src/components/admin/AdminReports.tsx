import AdminLayout from './AdminLayout';
import { useAuth } from '../../App';
import { Download, Calendar, TrendingUp } from 'lucide-react';

export default function AdminReports() {
  const { language } = useAuth();

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl text-blue-900">
          {language === 'en' && 'Reports & Analytics'}
          {language === 'hi' && 'रिपोर्ट और विश्लेषण'}
          {language === 'gu' && 'રિપોર્ટ્સ અને વિશ્લેષણ'}
        </h1>

        {/* Date Range Selector */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl text-blue-900 mb-4 flex items-center gap-2">
            <Calendar size={24} />
            {language === 'en' && 'Select Date Range'}
            {language === 'hi' && 'तिथि सीमा चुनें'}
            {language === 'gu' && 'તારીખ શ્રેણી પસંદ કરો'}
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="date"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="date"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-6 py-3 rounded-lg transition-colors">
              {language === 'en' && 'Generate Reports'}
              {language === 'hi' && 'रिपोर्ट जेनरेट करें'}
              {language === 'gu' && 'રિપોર્ટ જનરેટ કરો'}
            </button>
          </div>
        </div>

        {/* Report Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg text-blue-900 mb-4">
              {language === 'en' && 'Sales Report'}
              {language === 'hi' && 'बिक्री रिपोर्ट'}
              {language === 'gu' && 'સેલ્સ રિપોર્ટ'}
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span>
                  {language === 'en' && 'Total Sales'}
                  {language === 'hi' && 'कुल बिक्री'}
                  {language === 'gu' && 'કુલ વેચાણ'}
                </span>
                <span className="text-blue-900">₹1.2Cr</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span>
                  {language === 'en' && 'Total Bags Sold'}
                  {language === 'hi' && 'कुल बेचे गए बैग'}
                  {language === 'gu' && 'કુલ વેચાયેલી બેગ્સ'}
                </span>
                <span className="text-blue-900">24,560</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="flex items-center gap-2">
                  <TrendingUp size={16} className="text-green-600" />
                  {language === 'en' && 'Growth'}
                  {language === 'hi' && 'वृद्धि'}
                  {language === 'gu' && 'વૃદ્ધિ'}
                </span>
                <span className="text-green-600">+12%</span>
              </div>
            </div>
            <button className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg transition-colors">
              <Download size={18} />
              {language === 'en' && 'Download PDF'}
              {language === 'hi' && 'पीडीएफ डाउनलोड'}
              {language === 'gu' && 'પીડીએફ ડાઉનલોડ'}
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg text-blue-900 mb-4">
              {language === 'en' && 'Payment Report'}
              {language === 'hi' && 'भुगतान रिपोर्ट'}
              {language === 'gu' && 'ચુકવણી રિપોર્ટ'}
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span>
                  {language === 'en' && 'Total Received'}
                  {language === 'hi' && 'कुल प्राप्त'}
                  {language === 'gu' && 'કુલ પ્રાપ્ત'}
                </span>
                <span className="text-green-600">₹95L</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span>
                  {language === 'en' && 'Total Outstanding'}
                  {language === 'hi' && 'कुल बकाया'}
                  {language === 'gu' && 'કુલ બાકી'}
                </span>
                <span className="text-red-600">₹45L</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span>
                  {language === 'en' && 'Collection Rate'}
                  {language === 'hi' && 'संग्रह दर'}
                  {language === 'gu' && 'સંગ્રહ દર'}
                </span>
                <span className="text-blue-900">68%</span>
              </div>
            </div>
            <button className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg transition-colors">
              <Download size={18} />
              {language === 'en' && 'Download PDF'}
              {language === 'hi' && 'पीडीएफ डाउनलोड'}
              {language === 'gu' && 'પીડીએફ ડાઉનલોડ'}
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg text-blue-900 mb-4">
              {language === 'en' && 'Dealer Performance'}
              {language === 'hi' && 'डीलर प्रदर्शन'}
              {language === 'gu' && 'ડીલર પ્રદર્શન'}
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span>
                  {language === 'en' && 'Active Dealers'}
                  {language === 'hi' && 'सक्रिय डीलर'}
                  {language === 'gu' && 'સક્રિય ડીલર્સ'}
                </span>
                <span className="text-blue-900">156</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span>
                  {language === 'en' && 'Top Performers'}
                  {language === 'hi' && 'शीर्ष प्रदर्शन'}
                  {language === 'gu' && 'ટોચના પ્રદર્શક'}
                </span>
                <span className="text-blue-900">5</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                <span>
                  {language === 'en' && 'Avg. Purchase/Dealer'}
                  {language === 'hi' && 'औसत खरीद/डीलर'}
                  {language === 'gu' && 'સરેરાશ ખરીદી/ડીલર'}
                </span>
                <span className="text-blue-900">₹7.8L</span>
              </div>
            </div>
            <button className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg transition-colors">
              <Download size={18} />
              {language === 'en' && 'Download PDF'}
              {language === 'hi' && 'पीडीएफ डाउनलोड'}
              {language === 'gu' && 'પીડીએફ ડાઉનલોડ'}
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg text-blue-900 mb-4">
              {language === 'en' && 'Product Mix Report'}
              {language === 'hi' && 'उत्पाद मिश्रण रिपोर्ट'}
              {language === 'gu' && 'ઉત્પાદન મિશ્રણ રિપોર્ટ'}
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span>OPC 53</span>
                <span className="text-blue-900">45%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span>OPC 43</span>
                <span className="text-blue-900">30%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span>PSC</span>
                <span className="text-blue-900">15%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span>GGBS</span>
                <span className="text-blue-900">10%</span>
              </div>
            </div>
            <button className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg transition-colors">
              <Download size={18} />
              {language === 'en' && 'Download PDF'}
              {language === 'hi' && 'पीडीएफ डाउनलोड'}
              {language === 'gu' && 'પીડીએફ ડાઉનલોડ'}
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
