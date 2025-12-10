import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { CheckCircle } from 'lucide-react';

export default function PlaceOrder() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    cementType: 'OPC',
    quantity: '',
    deliveryAddress: '',
    deliveryDate: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        cementType: 'OPC',
        quantity: '',
        deliveryAddress: '',
        deliveryDate: '',
        notes: '',
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-gray-900 mb-2">Order Placed Successfully!</h2>
        <p className="text-gray-600">Your order has been submitted and is pending admin approval.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-gray-900 mb-4">{t('place.order')}</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Cement Type</label>
          <select
            value={formData.cementType}
            onChange={(e) => setFormData({...formData, cementType: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBF24]"
            required
          >
            <option value="OPC">OPC - Ordinary Portland Cement</option>
            <option value="PSC">PSC - Portland Slag Cement</option>
            <option value="GGBS">GGBS - Ground Granulated Blast-furnace Slag</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Quantity (bags)</label>
          <input
            type="number"
            value={formData.quantity}
            onChange={(e) => setFormData({...formData, quantity: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBF24]"
            placeholder="Enter number of bags"
            min="1"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Delivery Address</label>
          <textarea
            value={formData.deliveryAddress}
            onChange={(e) => setFormData({...formData, deliveryAddress: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBF24]"
            rows={3}
            placeholder="Enter delivery address"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Preferred Delivery Date</label>
          <input
            type="date"
            value={formData.deliveryDate}
            onChange={(e) => setFormData({...formData, deliveryDate: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBF24]"
            min={new Date().toISOString().split('T')[0]}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Additional Notes (Optional)</label>
          <textarea
            value={formData.notes}
            onChange={(e) => setFormData({...formData, notes: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBF24]"
            rows={2}
            placeholder="Any special instructions"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#3B4998] text-white py-3 rounded-lg hover:bg-[#2d3870] transition-colors"
        >
          {t('submit')} Order
        </button>
      </form>
    </div>
  );
}
