
import { Link } from "react-router-dom";
import { Info, FileCode, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavLink {
  name: string;
  href: string;
  icon: JSX.Element;
}

interface NavMenuQuickLinksProps {
  navLinks: NavLink[];
  toggleMenu: () => void;
  buttonClassName?: string;
}

const NavMenuQuickLinks = ({ navLinks, toggleMenu, buttonClassName = "" }: NavMenuQuickLinksProps) => {
  const quickLinks = [
    {
      name: 'About Us',
      href: '/about',
      icon: <Info className="h-4 w-4 text-accent" />,
      className: 'about-us-btn'
    },
    {
      name: 'Our Works',
      href: '/projects',
      icon: <FileCode className="h-4 w-4 text-accent" />,
      className: 'our-works-btn'
    },
    {
      name: 'Blog',
      href: '/blog',
      icon: <BookOpen className="h-4 w-4 text-accent" />,
      className: ''
    }
  ];
  
  return (
    <div className="space-y-3">
      <h3 className="text-base md:text-lg font-semibold mb-2 text-accent">Quick Links</h3>
      <ul className="space-y-2">
        {quickLinks.map(link => (
          <li key={link.name}>
            <Link 
              to={link.href} 
              className="relative inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left text-sm md:text-base" 
              onClick={() => toggleMenu()}
            >
              <span className="flex items-center gap-2">
                {link.icon}
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenuQuickLinks;
