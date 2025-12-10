import logo from 'figma:asset/53e5685919f3e251f84bfad5fd2164039f38a911.png';

interface BrandHeaderProps {
  showTagline?: boolean;
}

export default function BrandHeader({ showTagline = false }: BrandHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <img src={logo} alt="Trimak Cement Logo" className="w-48 md:w-64 h-auto" />
      {showTagline && (
        <p className="text-blue-900 text-center">
          Building Future Restoring Past
        </p>
      )}
    </div>
  );
}
