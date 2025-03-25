
import { useNavbar } from '@/contexts/NavbarContext';
import { useEffect, useRef } from 'react';
import { useNavbarRoute } from '@/hooks/useNavbarRoute';

interface Section {
  id: string;
  label: string;
}

const NavbarSectionLinks = () => {
  const { activeSection } = useNavbar();
  const { isHomePage } = useNavbarRoute();
  const containerRef = useRef<HTMLDivElement>(null);

  // Hiding this component entirely as we're not using the expandable feature
  return null;
};

export default NavbarSectionLinks;
