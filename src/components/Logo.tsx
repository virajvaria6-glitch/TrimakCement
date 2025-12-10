import logoImg from 'figma:asset/53e5685919f3e251f84bfad5fd2164039f38a911.png';
import { useLanguage } from '../contexts/LanguageContext';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export default function Logo({ size = 'md', showTagline = false }: LogoProps) {
  const { t } = useLanguage();

  const sizeClasses = {
    sm: 'w-32',
    md: 'w-48',
    lg: 'w-64',
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <img 
        src={logoImg} 
        alt="Trimak Cement Logo" 
        className={sizeClasses[size]}
      />
      {showTagline && (
        <p className="text-gray-700 text-center text-sm">
          {t('tagline')}
        </p>
      )}
    </div>
  );
}
