
interface ServiceLink {
  name: string;
  href: string;
}

interface NavMenuServicesProps {
  toggleMenu: () => void;
}

const NavMenuServices = ({ toggleMenu }: NavMenuServicesProps) => {
  const services: ServiceLink[] = [{
    name: '0 TO 1',
    href: '#services'
  }, {
    name: 'Web Development',
    href: '#services'
  }, {
    name: 'UI/UX Design',
    href: '#services'
  }, {
    name: 'SEO Optimization',
    href: '#services'
  }];

  return (
    <div className="space-y-3">
      <h3 className="text-base md:text-lg font-semibold mb-2 text-accent">Services</h3>
      <ul className="space-y-2">
        {services.map(service => (
          <li key={service.name}>
            <a 
              href={service.href} 
              className="relative inline-block text-muted-foreground hover:text-foreground transition-colors duration-300 after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left text-sm md:text-base" 
              onClick={() => toggleMenu()}
            >
              {service.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenuServices;
