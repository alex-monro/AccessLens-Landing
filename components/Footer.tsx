const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-bold text-lg text-foreground">AccessLens</span>
        <p className="text-sm text-foreground">
          © {new Date().getFullYear()} AccessLens. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
