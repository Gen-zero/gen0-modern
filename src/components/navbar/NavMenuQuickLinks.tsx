
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
              className="block" 
              onClick={() => toggleMenu()}
            >
              <Button 
                variant="outline" 
                size="sm" 
                className={`w-full justify-between group
                  uppercase font-medium px-4 py-2 bg-background/60 backdrop-blur-sm border border-border/30
                  hover:bg-yellow-100/80 hover:border-yellow-300 hover:text-yellow-600
                  transition-all duration-300 
                  relative overflow-hidden
                  after:content-[''] after:absolute after:bg-yellow-100/30 after:h-full after:w-full
                  after:left-0 after:top-0 after:transform after:scale-x-0 after:origin-left 
                  hover:after:scale-x-100 after:transition-transform after:duration-500
                  hover:shadow-[0_0_20px_rgba(254,240,138,0.7)]
                  ${buttonClassName} ${link.className || ''}`}
              >
                <div className="flex items-center gap-2 relative z-10">
                  {link.icon}
                  <span className="relative z-10">{link.name}</span>
                </div>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenuQuickLinks;
