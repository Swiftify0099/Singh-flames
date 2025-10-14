import { createSlice } from '@reduxjs/toolkit';

// Helper functions for localStorage
const getDarkModeFromStorage = () => {
  const stored = localStorage.getItem('darkMode');
  return stored !== null ? JSON.parse(stored) : true; // Default to true (dark mode)
};

const setDarkModeToStorage = (darkMode) => {
  localStorage.setItem('darkMode', JSON.stringify(darkMode));
};

const initialState = {
  activeMenu: 'Menu',
  selectedCategory: null,
  darkMode: getDarkModeFromStorage(),
  isMobile: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setActiveMenu: (state, action) => {
      state.activeMenu = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    toggleDarkMode: (state, action) => {
      state.darkMode = action.payload;
      setDarkModeToStorage(state.darkMode);
    },
    setIsMobile: (state, action) => {
      state.isMobile = action.payload;
    },
  },
});

export const { setActiveMenu, setSelectedCategory, toggleDarkMode, setIsMobile } = uiSlice.actions;

export default uiSlice.reducer;
