import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <div className="container">
        <div className="flex items-center justify-between h-16 text-main text-sm">
          <h3 className="font-bold text-lg cursor-pointer">Hossain</h3>

          <nav className="flex items-center gap-6">
            <button className="bg-white px-5 py-2 rounded-full shadow-md uppercase font-medium cursor-pointer transition-shadow hover:shadow">
              Resume
            </button>
            <Link className="font-semibold" to="portfolio">
              Portfolio
            </Link>
            <Link className="font-semibold" to="blog">
              Blog
            </Link>
            <Link className="font-semibold" to="contact">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
