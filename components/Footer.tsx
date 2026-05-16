const links = ["Privacy", "Terms", "Contact"];

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-bold text-lg">AccessLens</span>
        <nav className="flex items-center gap-6" aria-label="Footer">
          {links.map((link) => (
            <a key={link} href="#" className="text-sm hover:underline">
              {link}
            </a>
          ))}
        </nav>
        <p className="text-sm">
          © {new Date().getFullYear()} AccessLens. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
