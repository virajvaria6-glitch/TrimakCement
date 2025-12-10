import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  type: 'dealer' | 'admin';
}

interface AuthContextType {
  currentUser: User | null;
  userType: 'dealer' | 'admin' | null;
  login: (userId: string, password: string, type: 'dealer' | 'admin') => boolean;
  logout: () => void;
  register: (data: any) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock data for demo
const mockDealers = [
  { id: 'D001', password: 'password123', name: 'Rajesh Kumar' },
  { id: 'D002', password: 'password123', name: 'Amit Patel' },
];

const mockAdmins = [
  { id: 'A001', password: 'admin123', name: 'Admin User' },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userType, setUserType] = useState<'dealer' | 'admin' | null>(null);

  const login = (userId: string, password: string, type: 'dealer' | 'admin'): boolean => {
    if (type === 'dealer') {
      const dealer = mockDealers.find(d => d.id === userId && d.password === password);
      if (dealer) {
        setCurrentUser({ id: dealer.id, name: dealer.name, type: 'dealer' });
        setUserType('dealer');
        return true;
      }
    } else {
      const admin = mockAdmins.find(a => a.id === userId && a.password === password);
      if (admin) {
        setCurrentUser({ id: admin.id, name: admin.name, type: 'admin' });
        setUserType('admin');
        return true;
      }
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    setUserType(null);
  };

  const register = (data: any): boolean => {
    // Mock registration - in real app, would send to backend
    console.log('Registration data:', data);
    return true;
  };

  return (
    <AuthContext.Provider value={{ currentUser, userType, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
