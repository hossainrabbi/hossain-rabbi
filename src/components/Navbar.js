import { Navbar as Menubar, Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link, animateScroll } from 'react-scroll';

const Navbar = () => {
  const [scrollNavbar, setScrollNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', function () {
      this.scrollY >= 80 ? setScrollNavbar(true) : setScrollNavbar(false);
    });
  }, []);

  return (
    <Menubar
      className={`text-white fixed w-full transition-all !py-3 top-0 z-30 ${
        scrollNavbar
          ? '!bg-secondary-bold shadow-[0_2px_10px_#000] !py-2'
          : '!bg-transparent'
      }`}
    >
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
      <Menubar.Collapse className="bg-secondary-bold text-center md:bg-transparent z-10 rounded md:rounded-none">
        {navbarItems.map(({ name, path }) => (
          <Link
            to={path}
            activeClass="!text-primary-light"
            className="cursor-pointer select-none font-normal inline hover:text-primary-bold mb-4 md:mb-0"
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
    path: 'home',
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
    name: 'Blog',
    path: 'blog',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];
