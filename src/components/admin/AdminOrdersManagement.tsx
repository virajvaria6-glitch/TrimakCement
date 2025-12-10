import AdminLayout from './AdminLayout';
import { useAuth } from '../../App';
import { CheckCircle, XCircle, Edit } from 'lucide-react';

export default function AdminOrdersManagement() {
  const { language } = useAuth();

  const orders = [
    { id: 'ORD-2025-789', dealer: 'Patel Traders', type: 'OPC 53', quantity: 150, amount: 75000, date: '2025-12-09', status: 'Pending' },
    { id: 'ORD-2025-788', dealer: 'Shah Construction', type: 'PSC', quantity: 100, amount: 50000, date: '2025-12-09', status: 'Pending' },
    { id: 'ORD-2025-787', dealer: 'Kumar Store', type: 'OPC 43', quantity: 200, amount: 98000, date: '2025-12-08', status: 'Approved' },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl text-blue-900">
          {language === 'en' && 'Orders Management'}
          {language === 'hi' && 'ऑर्डर प्रबंधन'}
          {language === 'gu' && 'ઓર્ડર મેનેજમેન્ટ'}
        </h1>

        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg text-blue-900">{order.id}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      order.status === 'Pending' 
                        ? 'bg-yellow-100 text-yellow-700' 
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-3 text-sm text-gray-700">
                    <div>
                      <span className="text-gray-500">
                        {language === 'en' && 'Dealer: '}
                        {language === 'hi' && 'डीलर: '}
                        {language === 'gu' && 'ડીલર: '}
                      </span>
                      {order.dealer}
                    </div>
                    <div>
                      <span className="text-gray-500">
                        {language === 'en' && 'Type: '}
                        {language === 'hi' && 'प्रकार: '}
                        {language === 'gu' && 'પ્રકાર: '}
                      </span>
                      {order.type}
                    </div>
                    <div>
                      <span className="text-gray-500">
                        {language === 'en' && 'Quantity: '}
                        {language === 'hi' && 'मात्रा: '}
                        {language === 'gu' && 'જથ્થો: '}
                      </span>
                      {order.quantity} bags
                    </div>
                    <div>
                      <span className="text-gray-500">
                        {language === 'en' && 'Amount: '}
                        {language === 'hi' && 'राशि: '}
                        {language === 'gu' && 'રકમ: '}
                      </span>
                      ₹{order.amount.toLocaleString('en-IN')}
                    </div>
                    <div>
                      <span className="text-gray-500">
                        {language === 'en' && 'Date: '}
                        {language === 'hi' && 'तारीख: '}
                        {language === 'gu' && 'તારીખ: '}
                      </span>
                      {order.date}
                    </div>
                  </div>
                </div>

                {order.status === 'Pending' && (
                  <div className="flex md:flex-col gap-2">
                    <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                      <CheckCircle size={18} />
                      {language === 'en' && 'Approve'}
                      {language === 'hi' && 'अनुमोदन'}
                      {language === 'gu' && 'મંજૂર'}
                    </button>
                    <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                      <Edit size={18} />
                      {language === 'en' && 'Edit'}
                      {language === 'hi' && 'संपादित'}
                      {language === 'gu' && 'સંપાદિત'}
                    </button>
                    <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors">
                      <XCircle size={18} />
                      {language === 'en' && 'Reject'}
                      {language === 'hi' && 'अस्वीकार'}
                      {language === 'gu' && 'નકારો'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
