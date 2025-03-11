
interface NavLink {
  name: string;
  href: string;
}

interface NavMenuQuickLinksProps {
  navLinks: NavLink[];
  toggleMenu: () => void;
}

const NavMenuQuickLinks = ({ navLinks, toggleMenu }: NavMenuQuickLinksProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold mb-4 text-accent">Quick Links</h3>
      <ul className="space-y-3">
        {navLinks.map(link => (
          <li key={link.name}>
            <a 
              href={link.href} 
              className="relative inline-block text-muted-foreground hover:text-foreground transition-colors duration-300 after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left" 
              onClick={() => toggleMenu()}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenuQuickLinks;
