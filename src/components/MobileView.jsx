import { Menu } from 'lucide-react';

const MobileView = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 dark:bg-gray-900 text-white dark:text-white p-8">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <Menu size={64} className="mx-auto mb-4 text-gray-400 dark:text-gray-400" />
          <h1 className="text-3xl font-bold mb-2">Singh-Flames</h1>
        </div>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-3">Desktop Only</h2>
          <p className="text-gray-400 mb-4">
            This POS system is designed for desktop and laptop screens only.
            Please access this application from a device with a larger screen (minimum 1024px width).
          </p>
          <div className="text-sm text-gray-500">
            Current screen width: {window.innerWidth}px<br/>
            Required: 1024px or more
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileView;
