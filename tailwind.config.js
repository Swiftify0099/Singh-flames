/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
         'cosy-orange': '#F97316', 
        'cosy-light-orange': '#FED7AA', 
        'cosy-blue': '#3B82F6',
        'cosy-light-blue': '#DBEAFE',
        'cosy-gray-50': '#F9FAFB',
        'cosy-gray-100': '#F3F4F6',
        'cosy-gray-200': '#E5E7EB',
        'cosy-gray-300': '#D1D5DB',
        'cosy-gray-400': '#9CA3AF',
        'cosy-gray-500': '#6B7280',
        'cosy-gray-600': '#4B5563',
        'cosy-gray-700': '#374151',
        'cosy-gray-800': '#1F2937',
        'cosy-gray-900': '#111827',
        'cosy-pastel-pink': '#FCE7F3',
        'cosy-pastel-blue': '#DBEAFE',
        'cosy-pastel-green': '#D1FAE5',
      },
      boxShadow: {
        'cosy-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'cosy-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'cosy-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'cosy': '0.75rem',
      },
    },
  },
  plugins: [],
}
