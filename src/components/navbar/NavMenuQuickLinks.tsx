
import { Link } from "react-router-dom";

interface NavLink {
  name: string;
  href: string;
}

interface NavMenuQuickLinksProps {
  navLinks: NavLink[];
  toggleMenu: () => void;
}

const NavMenuQuickLinks = ({ navLinks, toggleMenu }: NavMenuQuickLinksProps) => {
  const quickLinks = [
    {
      name: 'About Us',
      href: '/about'
    },
    {
      name: 'Projects',
      href: '/projects'
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
              className="relative inline-block text-muted-foreground hover:text-foreground transition-colors duration-300 after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left text-sm md:text-base" 
              onClick={() => toggleMenu()}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenuQuickLinks;
