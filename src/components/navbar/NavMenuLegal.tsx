
import { Link } from 'react-router-dom';
import { Shield, FileText, Cookie } from 'lucide-react';

interface LegalLink {
  name: string;
  href: string;
  icon: React.ReactNode;
  description: string;
}

interface NavMenuLegalProps {
  toggleMenu: () => void;
}

const NavMenuLegal = ({ toggleMenu }: NavMenuLegalProps) => {
  const legal: LegalLink[] = [
    {
      name: 'Privacy Policy',
      href: '/privacy-policy',
      icon: <Shield className="h-4 w-4" />,
      description: 'How we collect, use, and protect your data'
    }, 
    {
      name: 'Terms of Service',
      href: '/terms-of-service',
      icon: <FileText className="h-4 w-4" />,
      description: 'Rules and guidelines for using our services'
    }, 
    {
      name: 'Cookie Policy',
      href: '/cookie-policy',
      icon: <Cookie className="h-4 w-4" />,
      description: 'How we use cookies on our website'
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
              className="group flex items-start hover:bg-muted/20 p-2 rounded-md transition-colors duration-200" 
              onClick={() => toggleMenu()}
            >
              <span className="mr-3 text-muted-foreground group-hover:text-accent transition-colors mt-0.5">
                {item.icon}
              </span>
              <div>
                <span className="block text-muted-foreground font-medium group-hover:text-foreground transition-colors text-sm md:text-base">
                  {item.name}
                </span>
                <span className="text-xs text-muted-foreground/70 group-hover:text-muted-foreground transition-colors">
                  {item.description}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenuLegal;
