import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="wrapper text-center text-white py-5">
      <p className="flex items-center justify-center gap-2 mb-2">
        <span>Follow me in </span>
        <a
          className="text-primary-bold hover:text-primary-light"
          href="https://github.com/hossainrabbi"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>{' '}
        &
        <a
          className="text-primary-bold hover:text-primary-light"
          href="https://www.linkedin.com/in/hossainrabbi"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </p>
      <p>
        © {new Date().getFullYear()} All rights reserved | Design & Build by{' '}
        <a
          className="text-primary-bold hover:text-primary-light hover:underline"
          href="https://www.facebook.com/hossainrabbi259"
          target="_blank"
          rel="noreferrer"
        >
          Hossain Rabbi
        </a>
      </p>
    </footer>
  );
};

export default Footer;
