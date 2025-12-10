import AdminLayout from './AdminLayout';
import { useAuth } from '../../App';
import { CheckCircle, XCircle, Eye } from 'lucide-react';

export default function AdminNewRegistrations() {
  const { language } = useAuth();

  const registrations = [
    { id: 'R001', dealerName: 'Rajesh Kumar', shopName: 'Kumar Trading Co.', phone: '+91 98765 43210', email: 'rajesh@example.com', date: '2025-12-09' },
    { id: 'R002', dealerName: 'Amit Patel', shopName: 'Patel Cement Store', phone: '+91 98765 43211', email: 'amit@example.com', date: '2025-12-08' },
    { id: 'R003', dealerName: 'Suresh Shah', shopName: 'Shah Builders Supply', phone: '+91 98765 43212', email: 'suresh@example.com', date: '2025-12-07' },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl text-blue-900">
          {language === 'en' && 'New Dealer Registrations'}
          {language === 'hi' && 'नए डीलर पंजीकरण'}
          {language === 'gu' && 'નવી ડીલર નોંધણીઓ'}
        </h1>

        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg">
          <p className="text-yellow-800">
            {language === 'en' && `${registrations.length} pending registrations awaiting approval`}
            {language === 'hi' && `${registrations.length} लंबित पंजीकरण अनुमोदन की प्रतीक्षा में`}
            {language === 'gu' && `${registrations.length} બાકી નોંધણીઓ મંજૂરીની રાહમાં`}
          </p>
        </div>

        <div className="space-y-4">
          {registrations.map((reg) => (
            <div key={reg.id} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl text-blue-900">{reg.dealerName}</h3>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                      {language === 'en' && 'Pending'}
                      {language === 'hi' && 'लंबित'}
                      {language === 'gu' && 'બાકી'}
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                    <div>
                      <span className="text-gray-500">
                        {language === 'en' && 'Shop Name: '}
                        {language === 'hi' && 'दुकान का नाम: '}
                        {language === 'gu' && 'દુકાનનું નામ: '}
                      </span>
                      {reg.shopName}
                    </div>
                    <div>
                      <span className="text-gray-500">
                        {language === 'en' && 'Phone: '}
                        {language === 'hi' && 'फोन: '}
                        {language === 'gu' && 'ફોન: '}
                      </span>
                      {reg.phone}
                    </div>
                    <div>
                      <span className="text-gray-500">
                        {language === 'en' && 'Email: '}
                        {language === 'hi' && 'ईमेल: '}
                        {language === 'gu' && 'ઈમેલ: '}
                      </span>
                      {reg.email}
                    </div>
                    <div>
                      <span className="text-gray-500">
                        {language === 'en' && 'Applied: '}
                        {language === 'hi' && 'आवेदन: '}
                        {language === 'gu' && 'અરજી: '}
                      </span>
                      {reg.date}
                    </div>
                  </div>
                </div>

                <div className="flex md:flex-col gap-2">
                  <button className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors">
                    <Eye size={18} />
                    {language === 'en' && 'View'}
                    {language === 'hi' && 'देखें'}
                    {language === 'gu' && 'જુઓ'}
                  </button>
                  <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                    <CheckCircle size={18} />
                    {language === 'en' && 'Approve'}
                    {language === 'hi' && 'अनुमोदन'}
                    {language === 'gu' && 'મંજૂર'}
                  </button>
                  <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors">
                    <XCircle size={18} />
                    {language === 'en' && 'Reject'}
                    {language === 'hi' && 'अस्वीकार'}
                    {language === 'gu' && 'નકારો'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
