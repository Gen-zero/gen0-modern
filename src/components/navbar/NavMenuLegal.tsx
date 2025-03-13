
import { Link } from 'react-router-dom';
import { Shield, FileText, Cookie } from 'lucide-react';

interface LegalLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface NavMenuLegalProps {
  toggleMenu: () => void;
}

const NavMenuLegal = ({ toggleMenu }: NavMenuLegalProps) => {
  const legal: LegalLink[] = [
    {
      name: 'Privacy Policy',
      href: '/privacy-policy',
      icon: <Shield className="h-4 w-4" />
    }, 
    {
      name: 'Terms of Service',
      href: '/terms-of-service',
      icon: <FileText className="h-4 w-4" />
    }, 
    {
      name: 'Cookie Policy',
      href: '/cookie-policy',
      icon: <Cookie className="h-4 w-4" />
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-base md:text-lg font-semibold mb-2 text-accent">Legal</h3>
      <ul className="space-y-3">
        {legal.map(item => (
          <li key={item.name}>
            <Link 
              to={item.href} 
              className="group flex items-center hover:bg-muted/20 p-2 rounded-md transition-colors duration-200" 
              onClick={() => toggleMenu()}
            >
              <span className="mr-3 text-muted-foreground group-hover:text-accent transition-colors">
                {item.icon}
              </span>
              <span className="text-muted-foreground font-medium group-hover:text-foreground transition-colors text-sm md:text-base">
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenuLegal;
