import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi' | 'gu';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Branding
    'company.name': 'Ghanshyam Elements',
    'brand.name': 'Trimak Cement',
    'tagline': 'Building Future Restoring Past',
    
    // Common
    'language': 'Language',
    'submit': 'Submit',
    'cancel': 'Cancel',
    'back': 'Back',
    'save': 'Save',
    'edit': 'Edit',
    'delete': 'Delete',
    'view': 'View',
    'download': 'Download',
    'search': 'Search',
    'filter': 'Filter',
    'logout': 'Logout',
    'login': 'Login',
    'register': 'Register',
    
    // Login Selection
    'welcome': 'Welcome to',
    'dealer.login': 'Dealer Login',
    'admin.login': 'Admin Login',
    'dealer.register': 'New Dealer Registration',
    
    // Auth
    'userId': 'User ID',
    'adminId': 'Admin ID',
    'password': 'Password',
    'forgot.password': 'Forgot Password?',
    'new.password': 'New Password',
    'confirm.password': 'Confirm Password',
    'reset.password': 'Reset Password',
    'send.otp': 'Send OTP',
    'verify.otp': 'Verify OTP',
    'otp': 'OTP',
    'enter.otp': 'Enter 6-digit OTP',
    'mobile.number': 'Mobile Number',
    'email': 'Email',
    'select.method': 'Select Reset Method',
    'registered.mobile': 'Registered Mobile Number',
    'registered.email': 'Registered Email',
    
    // Registration
    'dealer.name': 'Dealer Name',
    'shop.name': 'Shop Name',
    'phone': 'Phone',
    'address': 'Address',
    'gstin': 'GSTIN (Optional)',
    'password.requirement': 'Minimum 8 characters',
    
    // Dealer Portal
    'dashboard': 'Dashboard',
    'bills': 'Bills',
    'account.statement': 'Account Statement',
    'place.order': 'Place Order',
    'payment.update': 'Payment Update',
    'report.issue': 'Report Issue',
    'contact.office': 'Contact Office',
    'outstanding.amount': 'Outstanding Amount',
    'last.payment': 'Last Payment',
    'monthly.bags': 'Monthly Bags Purchased',
    'pending.alert': 'Your current pending cumulative amount is',
    
    // Admin Portal
    'dealer.list': 'Dealer List',
    'new.registrations': 'New Registrations',
    'orders.management': 'Orders Management',
    'payments.review': 'Payments Review',
    'field.staff': 'Field Staff',
    'live.tracking': 'Live Tracking',
    'reports': 'Reports',
    'day.summary': 'Day Summary',
    'settings': 'Settings',
    'total.purchases': 'Total Purchases',
    'status': 'Status',
    'approve': 'Approve',
    'reject': 'Reject',
    'active': 'Active',
    'pending': 'Pending',
    'total.orders.today': 'Total Orders Today',
    'total.payments.today': 'Total Payments Today',
    'total.cement.ordered': 'Total Cement Ordered',
    'active.staff': 'Active Staff',
    'last.seen': 'Last Seen',
    'view.history': 'View History',
  },
  hi: {
    // Branding
    'company.name': 'घनश्याम एलिमेंट्स',
    'brand.name': 'त्रिमक सीमेंट',
    'tagline': 'भविष्य का निर्माण, अतीत की बहाली',
    
    // Common
    'language': 'भाषा',
    'submit': 'जमा करें',
    'cancel': 'रद्द करें',
    'back': 'वापस',
    'save': 'सहेजें',
    'edit': 'संपादित करें',
    'delete': 'हटाएं',
    'view': 'देखें',
    'download': 'डाउनलोड',
    'search': 'खोजें',
    'filter': 'फ़िल्टर',
    'logout': 'लॉग आउट',
    'login': 'लॉग इन',
    'register': 'पंजीकरण',
    
    // Login Selection
    'welcome': 'स्वागत है',
    'dealer.login': 'डीलर लॉगिन',
    'admin.login': 'एडमिन लॉगिन',
    'dealer.register': 'नया डीलर पंजीकरण',
    
    // Auth
    'userId': 'यूज़र आईडी',
    'adminId': 'एडमिन आईडी',
    'password': 'पासवर्ड',
    'forgot.password': 'पासवर्ड भूल गए?',
    'new.password': 'नया पासवर्ड',
    'confirm.password': 'पासवर्ड की पुष्टि करें',
    'reset.password': 'पासवर्ड रीसेट करें',
    'send.otp': 'ओटीपी भेजें',
    'verify.otp': 'ओटीपी सत्यापित करें',
    'otp': 'ओटीपी',
    'enter.otp': '6 अंकों का ओटीपी दर्ज करें',
    'mobile.number': 'मोबाइल नंबर',
    'email': 'ईमेल',
    'select.method': 'रीसेट विधि चुनें',
    'registered.mobile': 'पंजीकृत मोबाइल नंबर',
    'registered.email': 'पंजीकृत ईमेल',
    
    // Registration
    'dealer.name': 'डीलर का नाम',
    'shop.name': 'दुकान का नाम',
    'phone': 'फोन',
    'address': 'पता',
    'gstin': 'जीएसटीआईएन (वैकल्पिक)',
    'password.requirement': 'न्यूनतम 8 वर्ण',
    
    // Dealer Portal
    'dashboard': 'डैशबोर्ड',
    'bills': 'बिल',
    'account.statement': 'खाता विवरण',
    'place.order': 'ऑर्डर करें',
    'payment.update': 'भुगतान अपडेट',
    'report.issue': 'समस्या रिपोर्ट करें',
    'contact.office': 'ऑफिस से संपर्क करें',
    'outstanding.amount': 'बकाया राशि',
    'last.payment': 'अंतिम भुगतान',
    'monthly.bags': 'मासिक बैग खरीदे',
    'pending.alert': 'आपकी वर्तमान कुल बकाया राशि है',
    
    // Admin Portal
    'dealer.list': 'डीलर सूची',
    'new.registrations': 'नए पंजीकरण',
    'orders.management': 'ऑर्डर प्रबंधन',
    'payments.review': 'भुगतान समीक्षा',
    'field.staff': 'फील्ड स्टाफ',
    'live.tracking': 'लाइव ट्रैकिंग',
    'reports': 'रिपोर्ट',
    'day.summary': 'दैनिक सारांश',
    'settings': 'सेटिंग्स',
    'total.purchases': 'कुल खरीद',
    'status': 'स्थिति',
    'approve': 'स्वीकृत करें',
    'reject': 'अस्वीकार करें',
    'active': 'सक्रिय',
    'pending': 'लंबित',
    'total.orders.today': 'आज के कुल ऑर्डर',
    'total.payments.today': 'आज के कुल भुगतान',
    'total.cement.ordered': 'कुल सीमेंट ऑर्डर',
    'active.staff': 'सक्रिय स्टाफ',
    'last.seen': 'अंतिम बार देखा गया',
    'view.history': 'इतिहास देखें',
  },
  gu: {
    // Branding
    'company.name': 'ઘનશ્યામ એલિમેન્ટ્સ',
    'brand.name': 'ત્રિમક સિમેન્ટ',
    'tagline': 'ભવિષ્યનું નિર્માણ, ભૂતકાળની પુનઃસ્થાપના',
    
    // Common
    'language': 'ભાષા',
    'submit': 'સબમિટ કરો',
    'cancel': 'રદ કરો',
    'back': 'પાછળ',
    'save': 'સાચવો',
    'edit': 'સંપાદિત કરો',
    'delete': 'કાઢી નાખો',
    'view': 'જુઓ',
    'download': 'ડાઉનલોડ',
    'search': 'શોધો',
    'filter': 'ફિલ્ટર',
    'logout': 'લૉગઆઉટ',
    'login': 'લૉગિન',
    'register': 'નોંધણી',
    
    // Login Selection
    'welcome': 'સ્વાગત છે',
    'dealer.login': 'ડીલર લૉગિન',
    'admin.login': 'એડમિન લૉગિન',
    'dealer.register': 'નવો ડીલર નોંધણી',
    
    // Auth
    'userId': 'યુઝર આઈડી',
    'adminId': 'એડમિન આઈડી',
    'password': 'પાસવર્ડ',
    'forgot.password': 'પાસવર્ડ ભૂલી ગયા?',
    'new.password': 'નવો પાસવર્ડ',
    'confirm.password': 'પાસવર્ડની પુષ્ટિ કરો',
    'reset.password': 'પાસવર્ડ રીસેટ કરો',
    'send.otp': 'ઓટીપી મોકલો',
    'verify.otp': 'ઓટીપી ચકાસો',
    'otp': 'ઓટીપી',
    'enter.otp': '6 અંકનો ઓટીપી દાખલ કરો',
    'mobile.number': 'મોબાઇલ નંબર',
    'email': 'ઈમેલ',
    'select.method': 'રીસેટ પદ્ધતિ પસંદ કરો',
    'registered.mobile': 'નોંધાયેલ મોબાઇલ નંબર',
    'registered.email': 'નોંધાયેલ ઈમેલ',
    
    // Registration
    'dealer.name': 'ડીલરનું નામ',
    'shop.name': 'દુકાનનું નામ',
    'phone': 'ફોન',
    'address': 'સરનામું',
    'gstin': 'જીએસટીઆઈએન (વૈકલ્પિક)',
    'password.requirement': 'ઓછામાં ઓછા 8 અક્ષરો',
    
    // Dealer Portal
    'dashboard': 'ડેશબોર્ડ',
    'bills': 'બિલ્સ',
    'account.statement': 'ખાતા વિવરણ',
    'place.order': 'ઓર્ડર કરો',
    'payment.update': 'ચુકવણી અપડેટ',
    'report.issue': 'સમસ્યા નોંધાવો',
    'contact.office': 'ઓફિસનો સંપર્ક કરો',
    'outstanding.amount': 'બાકી રકમ',
    'last.payment': 'છેલ્લી ચુકવણી',
    'monthly.bags': 'માસિક બેગ ખરીદી',
    'pending.alert': 'તમારી વર્તમાન કુલ બાકી રકમ છે',
    
    // Admin Portal
    'dealer.list': 'ડીલર યાદી',
    'new.registrations': 'નવી નોંધણીઓ',
    'orders.management': 'ઓર્ડર મેનેજમેન્ટ',
    'payments.review': 'ચુકવણી સમીક્ષા',
    'field.staff': 'ફિલ્ડ સ્ટાફ',
    'live.tracking': 'લાઇવ ટ્રેકિંગ',
    'reports': 'રિપોર્ટ્સ',
    'day.summary': 'દૈનિક સારાંશ',
    'settings': 'સેટિંગ્સ',
    'total.purchases': 'કુલ ખરીદી',
    'status': 'સ્થિતિ',
    'approve': 'મંજૂર કરો',
    'reject': 'નામંજૂર કરો',
    'active': 'સક્રિય',
    'pending': 'બાકી',
    'total.orders.today': 'આજના કુલ ઓર્ડર',
    'total.payments.today': 'આજની કુલ ચુકવણીઓ',
    'total.cement.ordered': 'કુલ સિમેન્ટ ઓર્ડર',
    'active.staff': 'સક્રિય સ્ટાફ',
    'last.seen': 'છેલ્લે જોયેલ',
    'view.history': 'ઇતિહાસ જુઓ',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
