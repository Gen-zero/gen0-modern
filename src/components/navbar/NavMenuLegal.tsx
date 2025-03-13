
import { Link } from 'react-router-dom';

interface LegalLink {
  name: string;
  href: string;
}

interface NavMenuLegalProps {
  toggleMenu: () => void;
}

const NavMenuLegal = ({ toggleMenu }: NavMenuLegalProps) => {
  const legal: LegalLink[] = [{
    name: 'Privacy Policy',
    href: '/privacy-policy'
  }, {
    name: 'Terms of Service',
    href: '/terms-of-service'
  }, {
    name: 'Cookie Policy',
    href: '/cookie-policy'
  }];

  return (
    <div className="space-y-3">
      <h3 className="text-base md:text-lg font-semibold mb-2 text-accent">Legal</h3>
      <ul className="space-y-2">
        {legal.map(item => (
          <li key={item.name}>
            <Link 
              to={item.href} 
              className="relative inline-block text-muted-foreground hover:text-foreground transition-colors duration-300 after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left text-sm md:text-base" 
              onClick={() => toggleMenu()}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenuLegal;
