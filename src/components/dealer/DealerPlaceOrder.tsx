import { useState } from 'react';
import DealerLayout from './DealerLayout';
import { useAuth } from '../../App';
import { t } from '../../utils/translations';
import { ShoppingCart, Plus, Minus, X } from 'lucide-react';

interface OrderItem {
  id: number;
  type: string;
  quantity: number;
  pricePerBag: number;
}

export default function DealerPlaceOrder() {
  const { language } = useAuth();
  const [orderItems, setOrderItems] = useState<OrderItem[]>([
    { id: 1, type: 'OPC 53', quantity: 50, pricePerBag: 500 }
  ]);
  const [deliveryDate, setDeliveryDate] = useState('');
  const [notes, setNotes] = useState('');

  const cementTypes = ['OPC 53', 'OPC 43', 'PSC', 'GGBS'];

  const addItem = () => {
    setOrderItems([
      ...orderItems,
      { id: Date.now(), type: 'OPC 53', quantity: 50, pricePerBag: 500 }
    ]);
  };

  const updateItem = (id: number, field: keyof OrderItem, value: string | number) => {
    setOrderItems(orderItems.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const removeItem = (id: number) => {
    if (orderItems.length > 1) {
      setOrderItems(orderItems.filter(item => item.id !== id));
    }
  };

  const calculateTotal = () => {
    return orderItems.reduce((sum, item) => sum + (item.quantity * item.pricePerBag), 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Order placed successfully! Awaiting admin approval.');
  };

  return (
    <DealerLayout>
      <div className="space-y-6">
        <h1 className="text-2xl text-blue-900">{t('placeOrder', language)}</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Order Items */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl text-blue-900">
                {language === 'en' && 'Order Items'}
                {language === 'hi' && 'ऑर्डर आइटम'}
                {language === 'gu' && 'ઓર્ડર આઇટમ્સ'}
              </h2>
              <button
                type="button"
                onClick={addItem}
                className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Plus size={18} />
                {language === 'en' && 'Add Item'}
                {language === 'hi' && 'आइटम जोड़ें'}
                {language === 'gu' && 'આઇટમ ઉમેરો'}
              </button>
            </div>

            <div className="space-y-4">
              {orderItems.map((item) => (
                <div key={item.id} className="flex flex-col md:flex-row gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <label className="block text-sm mb-2 text-gray-700">
                      {language === 'en' && 'Cement Type'}
                      {language === 'hi' && 'सीमेंट प्रकार'}
                      {language === 'gu' && 'સિમેન્ટ પ્રકાર'}
                    </label>
                    <select
                      value={item.type}
                      onChange={(e) => updateItem(item.id, 'type', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    >
                      {cementTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div className="w-full md:w-40">
                    <label className="block text-sm mb-2 text-gray-700">
                      {language === 'en' && 'Quantity (Bags)'}
                      {language === 'hi' && 'मात्रा (बैग)'}
                      {language === 'gu' && 'જથ્થો (બેગ્સ)'}
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => updateItem(item.id, 'quantity', Math.max(1, item.quantity - 10))}
                        className="bg-gray-200 hover:bg-gray-300 p-2 rounded transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateItem(item.id, 'quantity', parseInt(e.target.value) || 0)}
                        className="w-20 px-2 py-2 border border-gray-300 rounded text-center"
                        min="1"
                      />
                      <button
                        type="button"
                        onClick={() => updateItem(item.id, 'quantity', item.quantity + 10)}
                        className="bg-gray-200 hover:bg-gray-300 p-2 rounded transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="w-full md:w-40">
                    <label className="block text-sm mb-2 text-gray-700">
                      {language === 'en' && 'Total'}
                      {language === 'hi' && 'कुल'}
                      {language === 'gu' && 'કુલ'}
                    </label>
                    <div className="px-4 py-3 bg-white rounded-lg border border-gray-300">
                      ₹{(item.quantity * item.pricePerBag).toLocaleString('en-IN')}
                    </div>
                  </div>

                  {orderItems.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="self-end md:self-center text-red-600 hover:bg-red-50 p-2 rounded transition-colors"
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex justify-between items-center text-xl">
                <span className="text-gray-700">
                  {language === 'en' && 'Total Amount:'}
                  {language === 'hi' && 'कुल राशि:'}
                  {language === 'gu' && 'કુલ રકમ:'}
                </span>
                <span className="text-blue-900">₹{calculateTotal().toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          {/* Delivery Details */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl text-blue-900 mb-4">
              {language === 'en' && 'Delivery Details'}
              {language === 'hi' && 'डिलीवरी विवरण'}
              {language === 'gu' && 'ડિલિવરી વિગતો'}
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  {language === 'en' && 'Preferred Delivery Date'}
                  {language === 'hi' && 'पसंदीदा डिलीवरी तिथि'}
                  {language === 'gu' && 'પસંદગીની ડિલિવરી તારીખ'}
                </label>
                <input
                  type="date"
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  {language === 'en' && 'Additional Notes'}
                  {language === 'hi' && 'अतिरिक्त नोट्स'}
                  {language === 'gu' && 'વધારાની નોંધો'}
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  rows={4}
                  placeholder="Enter any special instructions..."
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-800 text-white py-4 rounded-lg flex items-center justify-center gap-2 transition-colors text-lg"
          >
            <ShoppingCart size={24} />
            {t('placeOrder', language)}
          </button>
        </form>
      </div>
    </DealerLayout>
  );
}
