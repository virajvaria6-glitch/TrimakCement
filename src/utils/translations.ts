type Language = 'en' | 'hi' | 'gu';

interface Translations {
  [key: string]: {
    en: string;
    hi: string;
    gu: string;
  };
}

export const translations: Translations = {
  // Common
  login: { en: 'Login', hi: 'लॉगिन', gu: 'લોગિન' },
  register: { en: 'Register', hi: 'रजिस्टर करें', gu: 'નોંધણી કરો' },
  logout: { en: 'Logout', hi: 'लॉगआउट', gu: 'લૉગઆઉટ' },
  submit: { en: 'Submit', hi: 'जमा करें', gu: 'સબમિટ કરો' },
  cancel: { en: 'Cancel', hi: 'रद्द करें', gu: 'રદ કરો' },
  save: { en: 'Save', hi: 'सहेजें', gu: 'સાચવો' },
  
  // Navigation
  dashboard: { en: 'Dashboard', hi: 'डैशबोर्ड', gu: 'ડૅશબોર્ડ' },
  bills: { en: 'Bills', hi: 'बिल', gu: 'બિલ્સ' },
  accountStatement: { en: 'Account Statement', hi: 'खाता विवरण', gu: 'એકાઉન્ટ સ્ટેટમેન્ટ' },
  placeOrder: { en: 'Place Order', hi: 'ऑर्डर करें', gu: 'ઓર્ડર કરો' },
  paymentUpdate: { en: 'Payment Update', hi: 'भुगतान अपडेट', gu: 'પેમેન્ટ અપડેટ' },
  reportIssue: { en: 'Report Issue', hi: 'समस्या रिपोर्ट करें', gu: 'સમસ્યા નોંધાવો' },
  contactOffice: { en: 'Contact Office', hi: 'कार्यालय से संपर्क करें', gu: 'ઓફિસનો સંપર્ક કરો' },
  
  // Admin Navigation
  dealerList: { en: 'Dealer List', hi: 'डीलर सूची', gu: 'ડીલર યાદી' },
  newRegistrations: { en: 'New Registrations', hi: 'नए पंजीकरण', gu: 'નવી નોંધણીઓ' },
  ordersManagement: { en: 'Orders Management', hi: 'ऑर्डर प्रबंधन', gu: 'ઓર્ડર મેનેજમેન્ટ' },
  paymentsReview: { en: 'Payments Review', hi: 'भुगतान समीक्षा', gu: 'પેમેન્ટ સમીક્ષા' },
  fieldStaff: { en: 'Field Staff', hi: 'फील्ड स्टाफ', gu: 'ફિલ્ડ સ્ટાફ' },
  reports: { en: 'Reports', hi: 'रिपोर्ट', gu: 'રિપોર્ટ્સ' },
  settings: { en: 'Settings', hi: 'सेटिंग्स', gu: 'સેટિંગ્સ' },
  
  // Authentication
  dealerLogin: { en: 'Dealer Login', hi: 'डीलर लॉगिन', gu: 'ડીલર લોગિન' },
  adminLogin: { en: 'Admin Login', hi: 'एडमिन लॉगिन', gu: 'એડમિન લોગિન' },
  userId: { en: 'User ID', hi: 'यूजर आईडी', gu: 'યુઝર આઈડી' },
  adminId: { en: 'Admin ID', hi: 'एडमिन आईडी', gu: 'એડમિન આઈડી' },
  password: { en: 'Password', hi: 'पासवर्ड', gu: 'પાસવર્ડ' },
  forgotPassword: { en: 'Forgot Password?', hi: 'पासवर्ड भूल गए?', gu: 'પાસવર્ડ ભૂલીગયા?' },
  resetPassword: { en: 'Reset Password', hi: 'पासवर्ड रीसेट करें', gu: 'પાસવર્ડ રીસેટ કરો' },
  newPassword: { en: 'New Password', hi: 'नया पासवर्ड', gu: 'નવો પાસવર્ડ' },
  confirmPassword: { en: 'Confirm Password', hi: 'पासवर्ड की पुष्टि करें', gu: 'પાસવર્ડની પુષ્ટિ કરો' },
  
  // Registration
  dealerRegistration: { en: 'Dealer Registration', hi: 'डीलर पंजीकरण', gu: 'ડીલર નોંધણી' },
  dealerName: { en: 'Dealer Name', hi: 'डीलर का नाम', gu: 'ડીલરનું નામ' },
  shopName: { en: 'Shop Name', hi: 'दुकान का नाम', gu: 'દુકાનનું નામ' },
  phoneNumber: { en: 'Phone Number', hi: 'फोन नंबर', gu: 'ફોન નંબર' },
  email: { en: 'Email', hi: 'ईमेल', gu: 'ઈમેલ' },
  address: { en: 'Address', hi: 'पता', gu: 'સરનામું' },
  gstin: { en: 'GSTIN (Optional)', hi: 'जीएसटीआईएन (वैकल्पिक)', gu: 'જીએસટીઆઈએન (વૈકલ્પિક)' },
  
  // Dashboard
  outstandingAmount: { en: 'Outstanding Amount', hi: 'बकाया राशि', gu: 'બાકી રકમ' },
  lastPayment: { en: 'Last Payment', hi: 'अंतिम भुगतान', gu: 'છેલ્લી ચુકવણી' },
  monthlyBags: { en: 'Monthly Bags Purchased', hi: 'मासिक बैग खरीदे गए', gu: 'માસિક ખરીદેલી બેગ્સ' },
  pendingAlert: { en: 'Your current pending cumulative amount is', hi: 'आपकी वर्तमान कुल बकाया राशि है', gu: 'તમારી વર્તમાન બાકી રકમ છે' },
  
  // OTP
  enterOtp: { en: 'Enter OTP', hi: 'ओटीपी दर्ज करें', gu: 'ઓટીપી દાખલ કરો' },
  sendOtp: { en: 'Send OTP', hi: 'ओटीपी भेजें', gu: 'ઓટીપી મોકલો' },
  verifyOtp: { en: 'Verify OTP', hi: 'ओटीपी सत्यापित करें', gu: 'ઓટીપી ચકાસો' },
  resendOtp: { en: 'Resend OTP', hi: 'ओटीपी फिर से भेजें', gu: 'ઓટીપી ફરીથી મોકલો' },
  
  // Messages
  loginSuccess: { en: 'Login Successful', hi: 'लॉगिन सफल', gu: 'લોગિન સફળ' },
  registrationSuccess: { en: 'Registration Successful', hi: 'पंजीकरण सफल', gu: 'નોંધણી સફળ' },
  passwordResetSuccess: { en: 'Password Reset Successful', hi: 'पासवर्ड रीसेट सफल', gu: 'પાસવર્ડ રીસેટ સફળ' },
};

export function t(key: string, lang: Language): string {
  return translations[key]?.[lang] || key;
}
