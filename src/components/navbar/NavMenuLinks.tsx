
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
    <nav className="flex flex-col space-y-4">
      {navLinks.map((link, index) => (
        <a 
          key={link.name} 
          href={link.href} 
          className={cn(
            "group relative flex items-center text-2xl md:text-3xl font-medium transition-colors",
            activeSection === link.name ? "text-accent" : "text-foreground/90 hover:text-accent"
          )} 
          onClick={() => toggleMenu()}
          style={{transitionDelay: `${index * 50}ms`}}
        >
          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-2">
            {link.name}
          </span>
          <ArrowRight className={cn(
            "ml-2 h-5 w-5 opacity-0 transition-all duration-300", 
            "group-hover:opacity-100 group-hover:translate-x-2"
          )} />
        </a>
      ))}
    </nav>
  );
};

export default NavMenuLinks;
