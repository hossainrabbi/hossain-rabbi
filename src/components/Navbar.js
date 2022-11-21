import { Navbar as Menubar, Button } from 'flowbite-react';
import { Link, animateScroll } from 'react-scroll';

const Navbar = () => {
  return (
    <Menubar className="!bg-transparent text-white">
      <Link
        to="/"
        className="whitespace-nowrap text-xl font-semibold"
        onClick={() => animateScroll.scrollToTop()}
      >
        Hossain
      </Link>
      <div className="flex md:order-2 items-center gap-3">
        <Button className="!bg-primary-bold hover:!bg-primary-light px-2">
          Resume
        </Button>
        <Menubar.Toggle />
      </div>
      <Menubar.Collapse>
        {navbarItems.map(({ name, path }) => (
          <Link
            to={path}
            activeClass="text-primary-bold"
            className="cursor-pointer select-none font-normal inline"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            key={name}
          >
            {name}
          </Link>
        ))}
      </Menubar.Collapse>
    </Menubar>
  );
};

export default Navbar;

// Navbar Items
const navbarItems = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: 'about',
  },
  {
    name: 'Projects',
    path: 'projects',
  },
  {
    name: 'blog',
    path: 'blog',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];
