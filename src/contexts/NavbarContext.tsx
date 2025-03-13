
import { createContext, useContext, useState, useRef, ReactNode } from 'react';

interface NavbarContextType {
  isScrolled: boolean;
  setIsScrolled: (value: boolean) => void;
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
  activeSection: string;
  setActiveSection: (value: string) => void;
  prevActiveSection: string;
  setPrevActiveSection: (value: string) => void;
  isTransitioning: boolean;
  setIsTransitioning: (value: boolean) => void;
  scrollDirection: string;
  setScrollDirection: (value: string) => void;
  lastScrollY: number;
  setLastScrollY: (value: number) => void;
  navbarExpanded: boolean;
  setNavbarExpanded: (value: boolean) => void;
  transitionTimeoutRef: React.MutableRefObject<number | null>;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export const NavbarProvider = ({ children }: { children: ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [prevActiveSection, setPrevActiveSection] = useState('Home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const transitionTimeoutRef = useRef<number | null>(null);

  return (
    <NavbarContext.Provider value={{
      isScrolled,
      setIsScrolled,
      menuOpen,
      setMenuOpen,
      activeSection,
      setActiveSection,
      prevActiveSection,
      setPrevActiveSection,
      isTransitioning,
      setIsTransitioning,
      scrollDirection,
      setScrollDirection,
      lastScrollY,
      setLastScrollY,
      navbarExpanded,
      setNavbarExpanded,
      transitionTimeoutRef
    }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (context === undefined) {
    throw new Error('useNavbar must be used within a NavbarProvider');
  }
  return context;
};
