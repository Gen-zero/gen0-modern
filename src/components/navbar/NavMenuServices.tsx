
interface ServiceLink {
  name: string;
  href: string;
}

interface NavMenuServicesProps {
  toggleMenu: () => void;
}

const NavMenuServices = ({ toggleMenu }: NavMenuServicesProps) => {
  const services: ServiceLink[] = [{
    name: 'UI/UX Design',
    href: '#'
  }, {
    name: 'Web Development',
    href: '#'
  }, {
    name: 'Brand Identity',
    href: '#'
  }, {
    name: 'Digital Strategy',
    href: '#'
  }];

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold mb-4 text-accent">Services</h3>
      <ul className="space-y-3">
        {services.map(service => (
          <li key={service.name}>
            <a 
              href={service.href} 
              className="relative inline-block text-muted-foreground hover:text-foreground transition-colors duration-300 after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left" 
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
