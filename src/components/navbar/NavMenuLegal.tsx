
import { Link } from "react-router-dom";
import { Shield, FileText, Cookie } from "lucide-react";

interface LegalLink {
  name: string;
  href: string;
  icon: JSX.Element;
}

interface NavMenuLegalProps {
  toggleMenu: () => void;
}

const NavMenuLegal = ({ toggleMenu }: NavMenuLegalProps) => {
  const legalLinks: LegalLink[] = [
    {
      name: 'Privacy Policy',
      href: '/privacy-policy',
      icon: <Shield className="h-4 w-4 text-accent" />
    },
    {
      name: 'Terms of Service',
      href: '/terms-of-service',
      icon: <FileText className="h-4 w-4 text-accent" />
    },
    {
      name: 'Cookie Policy',
      href: '/cookie-policy',
      icon: <Cookie className="h-4 w-4 text-accent" />
    }
  ];

  return (
    <div className="space-y-3">
      <h3 className="text-base md:text-lg font-semibold mb-2 text-accent">Legal</h3>
      <ul className="space-y-2">
        {legalLinks.map(link => (
          <li key={link.name}>
            <Link 
              to={link.href} 
              className="relative inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left text-sm md:text-base" 
              onClick={() => toggleMenu()}
            >
              {link.icon}
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenuLegal;
