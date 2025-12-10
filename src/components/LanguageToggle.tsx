import { useAuth } from '../App';

export default function LanguageToggle() {
  const { language, setLanguage } = useAuth();

  return (
    <div className="flex gap-2 bg-white rounded-lg shadow-sm p-1">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded transition-colors ${
          language === 'en' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('hi')}
        className={`px-3 py-1 rounded transition-colors ${
          language === 'hi' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        हिं
      </button>
      <button
        onClick={() => setLanguage('gu')}
        className={`px-3 py-1 rounded transition-colors ${
          language === 'gu' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        ગુ
      </button>
    </div>
  );
}
