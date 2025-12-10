import { useState } from 'react';
import AdminLayout from './AdminLayout';
import { useAuth } from '../../App';
import { MapPin, Clock, User, Eye } from 'lucide-react';

export default function AdminFieldStaff() {
  const { language } = useAuth();
  const [selectedStaff, setSelectedStaff] = useState<number | null>(null);

  const staff = [
    { 
      id: 1, 
      name: 'Rahul Sharma', 
      status: 'Active', 
      lastLocation: 'Ahmedabad, Gujarat', 
      lastSeen: '5 mins ago',
      lat: 23.0225, 
      lng: 72.5714,
      recentVisits: [
        { dealer: 'Patel Traders', time: '10:30 AM', location: 'Paldi, Ahmedabad' },
        { dealer: 'Shah Construction', time: '12:15 PM', location: 'Satellite, Ahmedabad' },
      ]
    },
    { 
      id: 2, 
      name: 'Amit Patel', 
      status: 'Active', 
      lastLocation: 'Gandhinagar, Gujarat', 
      lastSeen: '12 mins ago',
      lat: 23.2156, 
      lng: 72.6369,
      recentVisits: [
        { dealer: 'Kumar Store', time: '9:45 AM', location: 'Sector 11, Gandhinagar' },
      ]
    },
    { 
      id: 3, 
      name: 'Vijay Kumar', 
      status: 'Inactive', 
      lastLocation: 'Surat, Gujarat', 
      lastSeen: '2 hours ago',
      lat: 21.1702, 
      lng: 72.8311,
      recentVisits: []
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl text-blue-900">
          {language === 'en' && 'Field Staff Live Tracking'}
          {language === 'hi' && 'फील्ड स्टाफ लाइव ट्रैकिंग'}
          {language === 'gu' && 'ફિલ્ડ સ્ટાફ લાઈવ ટ્રૅકિંગ'}
        </h1>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Map View */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl text-blue-900 mb-4 flex items-center gap-2">
              <MapPin size={24} />
              {language === 'en' && 'Map View'}
              {language === 'hi' && 'मानचित्र दृश्य'}
              {language === 'gu' && 'નકશો દૃશ્ય'}
            </h2>
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin size={48} className="mx-auto mb-2 text-gray-400" />
                <p>
                  {language === 'en' && 'Map View - Live tracking'}
                  {language === 'hi' && 'मानचित्र दृश्य - लाइव ट्रैकिंग'}
                  {language === 'gu' && 'નકશો દૃશ્ય - લાઈવ ટ્રેકિંગ'}
                </p>
                <p className="text-sm mt-2">
                  {language === 'en' && `${staff.filter(s => s.status === 'Active').length} active staff members`}
                  {language === 'hi' && `${staff.filter(s => s.status === 'Active').length} सक्रिय कर्मचारी सदस्य`}
                  {language === 'gu' && `${staff.filter(s => s.status === 'Active').length} સક્રિય સ્ટાફ સભ્યો`}
                </p>
              </div>
            </div>
          </div>

          {/* Staff List */}
          <div className="space-y-4">
            <h2 className="text-xl text-blue-900 flex items-center gap-2">
              <User size={24} />
              {language === 'en' && 'Staff Members'}
              {language === 'hi' && 'कर्मचारी सदस्य'}
              {language === 'gu' && 'સ્ટાફ સભ્યો'}
            </h2>
            
            {staff.map((person) => (
              <div key={person.id} className="bg-white rounded-xl shadow-md p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="text-blue-900" size={20} />
                    </div>
                    <div>
                      <h3 className="text-blue-900">{person.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock size={14} />
                        <span>{person.lastSeen}</span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    person.status === 'Active' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {person.status}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-700 mb-3">
                  <MapPin size={14} className="text-blue-900" />
                  <span>{person.lastLocation}</span>
                </div>

                <button
                  onClick={() => setSelectedStaff(selectedStaff === person.id ? null : person.id)}
                  className="flex items-center gap-2 text-blue-900 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors text-sm"
                >
                  <Eye size={16} />
                  {language === 'en' && 'View Details'}
                  {language === 'hi' && 'विवरण देखें'}
                  {language === 'gu' && 'વિગતો જુઓ'}
                </button>

                {selectedStaff === person.id && person.recentVisits.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-sm text-gray-500 mb-2">
                      {language === 'en' && 'Recent Visits'}
                      {language === 'hi' && 'हाल की यात्राएं'}
                      {language === 'gu' && 'તાજેતરની મુલાકાતો'}
                    </p>
                    <div className="space-y-2">
                      {person.recentVisits.map((visit, index) => (
                        <div key={index} className="bg-gray-50 p-2 rounded text-sm">
                          <p className="text-blue-900">{visit.dealer}</p>
                          <p className="text-gray-600">{visit.time} - {visit.location}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-sm text-gray-600 mb-2">
              {language === 'en' && 'Total Staff'}
              {language === 'hi' && 'कुल कर्मचारी'}
              {language === 'gu' && 'કુલ સ્ટાફ'}
            </p>
            <p className="text-3xl text-blue-900">{staff.length}</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-sm text-gray-600 mb-2">
              {language === 'en' && 'Active Now'}
              {language === 'hi' && 'अभी सक्रिय'}
              {language === 'gu' && 'અત્યારે સક્રિય'}
            </p>
            <p className="text-3xl text-green-600">
              {staff.filter(s => s.status === 'Active').length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-sm text-gray-600 mb-2">
              {language === 'en' && 'Total Visits Today'}
              {language === 'hi' && 'आज कुल यात्राएं'}
              {language === 'gu' && 'આજ કુલ મુલાકાતો'}
            </p>
            <p className="text-3xl text-blue-900">
              {staff.reduce((sum, s) => sum + s.recentVisits.length, 0)}
            </p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
