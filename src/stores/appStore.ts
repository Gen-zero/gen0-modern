import { create } from 'zustand';

interface AppState {
  // Performance tracking
  isLowEndDevice: boolean;
  shouldReduceMotion: boolean;
  
  // Loading states
  sectionsLoaded: Record<string, boolean>;
  
  // Navigation state
  activeSection: string;
  
  // Actions
  setLowEndDevice: (isLowEnd: boolean) => void;
  setReduceMotion: (reduce: boolean) => void;
  setSectionLoaded: (section: string) => void;
  setActiveSection: (section: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isLowEndDevice: false,
  shouldReduceMotion: false,
  sectionsLoaded: {},
  activeSection: 'home',
  
  setLowEndDevice: (isLowEnd: boolean) => 
    set({ isLowEndDevice: isLowEnd }),
    
  setReduceMotion: (reduce: boolean) => 
    set({ shouldReduceMotion: reduce }),
    
  setSectionLoaded: (section: string) => 
    set((state) => ({ 
      sectionsLoaded: { ...state.sectionsLoaded, [section]: true }
    })),
    
  setActiveSection: (section: string) => 
    set({ activeSection: section }),
}));

// Computed values
export const useIsLowEndDevice = () => useAppStore(state => state.isLowEndDevice);
export const useShouldReduceMotion = () => useAppStore(state => state.shouldReduceMotion);
export const useActiveSection = () => useAppStore(state => state.activeSection);