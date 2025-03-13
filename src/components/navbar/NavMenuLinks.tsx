
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils";

interface NavLink {
  name: string;
  href: string;
}

interface NavMenuLinksProps {
  navLinks: NavLink[];
  activeSection: string;
  toggleMenu: () => void;
}

const NavMenuLinks = ({ navLinks, activeSection, toggleMenu }: NavMenuLinksProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAboutPage = location.pathname === '/about';
  const isHomePage = location.pathname === '/';

  const handleNavClick = (link: NavLink) => {
    toggleMenu(); // Close the menu
    
    if (link.href.startsWith('#')) {
      // If we're already on the home page, just navigate to the anchor
      if (isHomePage) {
        window.location.href = link.href;
        return;
      }
      
      // If we're not on home page, navigate to home page with the specific section
      navigate('/', { state: { scrollTo: link.href.substring(1) } });
    } else {
      // For regular page links, use normal navigation
      navigate(link.href);
    }
  };

  return (
    <nav className="flex flex-col space-y-2">
      {navLinks.map((link, index) => {
        // Determine if this link should be highlighted as active
        const isActive = isAboutPage
          ? link.name === 'About' // Highlight 'About' when on About page
          : activeSection === link.name; // Otherwise use activeSection from props
          
        return (
          <button 
            key={link.name}
            onClick={() => handleNavClick(link)}
            className={cn(
              "group relative flex items-center text-lg md:text-xl lg:text-2xl font-medium transition-colors text-left",
              isActive ? "text-accent" : "text-foreground/90 hover:text-accent"
            )} 
            style={{transitionDelay: `${index * 50}ms`}}
          >
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-2">
              {link.name}
            </span>
            <ArrowRight className={cn(
              "ml-2 h-4 w-4 md:h-5 md:w-5 opacity-0 transition-all duration-300", 
              "group-hover:opacity-100 group-hover:translate-x-2"
            )} />
          </button>
        );
      })}
    </nav>
  );
};

export default NavMenuLinks;
