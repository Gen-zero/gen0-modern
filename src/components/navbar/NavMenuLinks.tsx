
import { Link } from "react-router-dom";
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
  return (
    <nav className="flex flex-col space-y-2">
      {navLinks.map((link, index) => (
        <Link 
          key={link.name} 
          to={link.href.startsWith('#') ? link.href : link.href}
          className={cn(
            "group relative flex items-center text-lg md:text-xl lg:text-2xl font-medium transition-colors",
            activeSection === link.name ? "text-accent" : "text-foreground/90 hover:text-accent"
          )} 
          onClick={() => toggleMenu()}
          style={{transitionDelay: `${index * 50}ms`}}
        >
          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-2">
            {link.name}
          </span>
          <ArrowRight className={cn(
            "ml-2 h-4 w-4 md:h-5 md:w-5 opacity-0 transition-all duration-300", 
            "group-hover:opacity-100 group-hover:translate-x-2"
          )} />
        </Link>
      ))}
    </nav>
  );
};

export default NavMenuLinks;
