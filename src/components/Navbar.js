import { useEffect, useState, useRef } from 'react';
import { Link, animateScroll } from 'react-scroll';

const Navbar = () => {
  const [scrollNavbar, setScrollNavbar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', function () {
      this.scrollY >= 80 ? setScrollNavbar(true) : setScrollNavbar(false);
    });
  }, []);

  useEffect(() => {
    const listHeight = listRef.current.getBoundingClientRect().height;

    if (showMenu) {
      menuRef.current.style.height = `${listHeight}px`;
    } else {
      menuRef.current.style.height = '0px';
    }
  }, [showMenu]);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav
      className={`text-white sm:px-4  fixed w-full transition-all !py-3 top-0 z-30 ${
        scrollNavbar
          ? '!bg-secondary-bold shadow-[0_2px_10px_#000] !py-2'
          : '!bg-transparent'
      }`}
    >
      <div className="wrapper flex flex-wrap items-center justify-between">
        <Link
          to="home"
          className="whitespace-nowrap text-xl font-semibold cursor-pointer select-none"
          onClick={() => animateScroll.scrollToTop()}
        >
          Hossain
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white bg-primary-bold hover:bg-primary-light focus:ring-4 focus:outline-none focus:outline-secondary-light font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
          >
            Download Resume
          </button>
          <button
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={handleShowMenu}
          >
            X
          </button>
        </div>
        <div
          className="items-center justify-between w-full md:flex md:w-auto md:order-1 bg-secondary-bold text-center md:bg-transparent z-10 rounded md:rounded-none transition-all overflow-hidden md:overflow-auto h-0 md:!h-auto"
          ref={menuRef}
        >
          <ul
            className="flex flex-col p-4 mt-4 md:flex-row md:gap-5 md:mt-0 md:text-sm md:font-medium"
            ref={listRef}
          >
            <li>
              {navbarItems.map(({ name, path }) => (
                <Link
                  to={path}
                  activeClass="!bg-primary-light md:!bg-transparent !text-white md:!text-primary-light"
                  className="
                  block md:inline-block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 md:mx-3 lg:mx-4 xl:mx-5 cursor-pointer select-none font-normal hover:text-primary-bold mb-4 md:mb-0"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  key={name}
                >
                  {name}
                </Link>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </nav>
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
