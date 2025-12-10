import { useState } from 'react';
import AdminLayout from './AdminLayout';
import { useAuth } from '../../App';
import { Save, Lock, Bell, Database } from 'lucide-react';

export default function AdminSettings() {
  const { language } = useAuth();
  const [settings, setSettings] = useState({
    companyName: 'Ghanshyam Elements',
    email: 'info@trimakcement.com',
    phone: '+91 98765 43210',
    address: 'Industrial Area, Phase 2, Gujarat - 382010',
    emailNotifications: true,
    smsNotifications: true,
    autoApproveOrders: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Settings saved successfully!');
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl text-blue-900">
          {language === 'en' && 'Settings'}
          {language === 'hi' && 'सेटिंग्स'}
          {language === 'gu' && 'સેટિંગ્સ'}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Company Information */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl text-blue-900 mb-4 flex items-center gap-2">
              <Database size={24} />
              {language === 'en' && 'Company Information'}
              {language === 'hi' && 'कंपनी जानकारी'}
              {language === 'gu' && 'કંપની માહિતી'}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  {language === 'en' && 'Company Name'}
                  {language === 'hi' && 'कंपनी का नाम'}
                  {language === 'gu' && 'કંપનીનું નામ'}
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={settings.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  {language === 'en' && 'Email'}
                  {language === 'hi' && 'ईमेल'}
                  {language === 'gu' && 'ઈમેલ'}
                </label>
                <input
                  type="email"
                  name="email"
                  value={settings.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  {language === 'en' && 'Phone'}
                  {language === 'hi' && 'फोन'}
                  {language === 'gu' && 'ફોન'}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={settings.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm mb-2 text-gray-700">
                  {language === 'en' && 'Address'}
                  {language === 'hi' && 'पता'}
                  {language === 'gu' && 'સરનામું'}
                </label>
                <textarea
                  name="address"
                  value={settings.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl text-blue-900 mb-4 flex items-center gap-2">
              <Bell size={24} />
              {language === 'en' && 'Notification Preferences'}
              {language === 'hi' && 'सूचना प्राथमिकताएं'}
              {language === 'gu' && 'સૂચના પસંદગીઓ'}
            </h2>
            <div className="space-y-4">
              <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg cursor-pointer">
                <input
                  type="checkbox"
                  name="emailNotifications"
                  checked={settings.emailNotifications}
                  onChange={handleChange}
                  className="w-5 h-5"
                />
                <span>
                  {language === 'en' && 'Email Notifications'}
                  {language === 'hi' && 'ईमेल सूचनाएं'}
                  {language === 'gu' && 'ઈમેલ સૂચનાઓ'}
                </span>
              </label>
              <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg cursor-pointer">
                <input
                  type="checkbox"
                  name="smsNotifications"
                  checked={settings.smsNotifications}
                  onChange={handleChange}
                  className="w-5 h-5"
                />
                <span>
                  {language === 'en' && 'SMS Notifications'}
                  {language === 'hi' && 'एसएमएस सूचनाएं'}
                  {language === 'gu' && 'એસએમએસ સૂચનાઓ'}
                </span>
              </label>
              <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg cursor-pointer">
                <input
                  type="checkbox"
                  name="autoApproveOrders"
                  checked={settings.autoApproveOrders}
                  onChange={handleChange}
                  className="w-5 h-5"
                />
                <span>
                  {language === 'en' && 'Auto-approve orders from trusted dealers'}
                  {language === 'hi' && 'विश्वसनीय डीलरों से ऑर्डर स्वतः स्वीकृत करें'}
                  {language === 'gu' && 'વિશ્વસનીય ડીલર્સના ઓર્ડર ઓટો-મંજૂર કરો'}
                </span>
              </label>
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl text-blue-900 mb-4 flex items-center gap-2">
              <Lock size={24} />
              {language === 'en' && 'Security'}
              {language === 'hi' && 'सुरक्षा'}
              {language === 'gu' && 'સુરક્ષા'}
            </h2>
            <button
              type="button"
              className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg transition-colors"
            >
              {language === 'en' && 'Change Password'}
              {language === 'hi' && 'पासवर्ड बदलें'}
              {language === 'gu' && 'પાસવર્ડ બદલો'}
            </button>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 py-4 rounded-lg flex items-center justify-center gap-2 transition-colors text-lg"
          >
            <Save size={24} />
            {language === 'en' && 'Save Settings'}
            {language === 'hi' && 'सेटिंग्स सहेजें'}
            {language === 'gu' && 'સેટિંગ્સ સાચવો'}
          </button>
        </form>
      </div>
    </AdminLayout>
  );
}
