import { Link } from 'react-router-dom';
import BrandHeader from './BrandHeader';
import { Building2, UserCircle } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        <BrandHeader showTagline={true} />
        
        <div className="mt-12 space-y-4">
          <Link
            to="/dealer/login"
            className="w-full flex items-center justify-center gap-3 bg-blue-900 hover:bg-blue-800 text-white p-6 rounded-xl transition-colors shadow-lg"
          >
            <Building2 size={32} />
            <span className="text-xl">Dealer Portal</span>
          </Link>
          
          <Link
            to="/admin/login"
            className="w-full flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-blue-900 p-6 rounded-xl transition-colors shadow-lg"
          >
            <UserCircle size={32} />
            <span className="text-xl">Admin Portal</span>
          </Link>
        </div>
        
        <div className="mt-8 text-center">
          <Link
            to="/dealer/register"
            className="text-blue-900 hover:underline"
          >
            New Dealer? Register Here
          </Link>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-blue-900">
          <p className="italic">Building Future Restoring Past</p>
          <p className="mt-2 text-sm text-gray-600">
            &copy; 2025 Ghanshyam Elements - Trimak Cement
          </p>
        </div>
      </div>
    </div>
  );
}
