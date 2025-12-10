import { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DealerLogin from './components/auth/DealerLogin';
import AdminLogin from './components/auth/AdminLogin';
import DealerRegistration from './components/auth/DealerRegistration';
import ForgotPassword from './components/auth/ForgotPassword';
import DealerDashboard from './components/dealer/DealerDashboard';
import DealerBills from './components/dealer/DealerBills';
import DealerStatement from './components/dealer/DealerStatement';
import DealerPlaceOrder from './components/dealer/DealerPlaceOrder';
import DealerPaymentUpdate from './components/dealer/DealerPaymentUpdate';
import DealerReportIssue from './components/dealer/DealerReportIssue';
import DealerContact from './components/dealer/DealerContact';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminDealerList from './components/admin/AdminDealerList';
import AdminNewRegistrations from './components/admin/AdminNewRegistrations';
import AdminOrdersManagement from './components/admin/AdminOrdersManagement';
import AdminPaymentsReview from './components/admin/AdminPaymentsReview';
import AdminFieldStaff from './components/admin/AdminFieldStaff';
import AdminReports from './components/admin/AdminReports';
import AdminSettings from './components/admin/AdminSettings';
import LandingPage from './components/LandingPage';

type Language = 'en' | 'hi' | 'gu';

interface AuthContextType {
  isAuthenticated: boolean;
  userType: 'dealer' | 'admin' | null;
  login: (type: 'dealer' | 'admin') => void;
  logout: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState<'dealer' | 'admin' | null>(null);
  const [language, setLanguage] = useState<Language>('en');

  const login = (type: 'dealer' | 'admin') => {
    setIsAuthenticated(true);
    setUserType(type);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserType(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userType, login, logout, language, setLanguage }}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dealer/login" element={<DealerLogin />} />
          <Route path="/dealer/register" element={<DealerRegistration />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          {/* Dealer Routes */}
          <Route
            path="/dealer/dashboard"
            element={isAuthenticated && userType === 'dealer' ? <DealerDashboard /> : <Navigate to="/dealer/login" />}
          />
          <Route
            path="/dealer/bills"
            element={isAuthenticated && userType === 'dealer' ? <DealerBills /> : <Navigate to="/dealer/login" />}
          />
          <Route
            path="/dealer/statement"
            element={isAuthenticated && userType === 'dealer' ? <DealerStatement /> : <Navigate to="/dealer/login" />}
          />
          <Route
            path="/dealer/place-order"
            element={isAuthenticated && userType === 'dealer' ? <DealerPlaceOrder /> : <Navigate to="/dealer/login" />}
          />
          <Route
            path="/dealer/payment-update"
            element={isAuthenticated && userType === 'dealer' ? <DealerPaymentUpdate /> : <Navigate to="/dealer/login" />}
          />
          <Route
            path="/dealer/report-issue"
            element={isAuthenticated && userType === 'dealer' ? <DealerReportIssue /> : <Navigate to="/dealer/login" />}
          />
          <Route
            path="/dealer/contact"
            element={isAuthenticated && userType === 'dealer' ? <DealerContact /> : <Navigate to="/dealer/login" />}
          />
          
          {/* Admin Routes */}
          <Route
            path="/admin/dashboard"
            element={isAuthenticated && userType === 'admin' ? <AdminDashboard /> : <Navigate to="/admin/login" />}
          />
          <Route
            path="/admin/dealers"
            element={isAuthenticated && userType === 'admin' ? <AdminDealerList /> : <Navigate to="/admin/login" />}
          />
          <Route
            path="/admin/registrations"
            element={isAuthenticated && userType === 'admin' ? <AdminNewRegistrations /> : <Navigate to="/admin/login" />}
          />
          <Route
            path="/admin/orders"
            element={isAuthenticated && userType === 'admin' ? <AdminOrdersManagement /> : <Navigate to="/admin/login" />}
          />
          <Route
            path="/admin/payments"
            element={isAuthenticated && userType === 'admin' ? <AdminPaymentsReview /> : <Navigate to="/admin/login" />}
          />
          <Route
            path="/admin/field-staff"
            element={isAuthenticated && userType === 'admin' ? <AdminFieldStaff /> : <Navigate to="/admin/login" />}
          />
          <Route
            path="/admin/reports"
            element={isAuthenticated && userType === 'admin' ? <AdminReports /> : <Navigate to="/admin/login" />}
          />
          <Route
            path="/admin/settings"
            element={isAuthenticated && userType === 'admin' ? <AdminSettings /> : <Navigate to="/admin/login" />}
          />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
