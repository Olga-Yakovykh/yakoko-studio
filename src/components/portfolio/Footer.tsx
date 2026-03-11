import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa"; // Не забудьте установить react-icons

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { label: "Holiday Rentals", href: "/holiday-rentals" },
    { label: "Small Business", href: "/small-business" },
    { label: "Pricing", href: "/pricing" },
  ];

  const infoLinks = [
    { label: "How It Works", href: "/how-it-works" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative pt-20 pb-10 bg-[#0a0a12] text-white/80 overflow-hidden font-sans antialiased">
      {/* subtle top divider */}
      <div className="h-px w-full bg-white/5 mb-16" />

      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 pb-16">

          {/* Logo & tagline */}
          <div className="space-y-6">
            <Link
              to="/"
              className="text-xl font-bold tracking-tighter text-white italic"
            >
              Yakoko<span className="text-primary not-italic">.</span>
            </Link>

            <p className="text-sm text-white/50 max-w-xs leading-relaxed font-light">
              Performance-focused digital assets engineered for independence and commercial growth.
            </p>

          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-6">
              Services
            </p>

            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/40 hover:text-primary transition-colors duration-300 font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-6">
              Information
            </p>

            <ul className="space-y-4">
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/40 hover:text-primary transition-colors duration-300 font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

{/* Contact */}
<div>
  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-6">
    Direct Line
  </p>

  <div className="space-y-6">
    {/* Email Block */}
    <div className="space-y-1">
      <p className="text-xs text-white/30 uppercase tracking-wider">Email</p>
      <a
        href="mailto:yakokoolga@gmail.com"
        className="block text-sm text-white hover:text-primary transition-all duration-300 font-bold"
      >
        yakokoolga@gmail.com
      </a>
    </div>

    {/* Social Connect (WhatsApp & Facebook) */}
    <div className="space-y-3">
      <p className="text-xs text-white/30 uppercase tracking-wider">Quick Connect</p>
      
      <div className="flex flex-wrap items-center gap-3">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/380730531936?text=Hi%20Olga,%20I'm%20interested%20in%20a%20booking%20website%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white rounded-full text-xs font-bold hover:bg-[#20ba5a] transition-all duration-300 shadow-lg shadow-[#25D366]/20"
        >
          <FaWhatsapp size={16} />
          WHATSAPP
        </a>

      </div>
    </div>
  </div>
</div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-white/30 text-[10px] uppercase font-bold tracking-widest">
          <p>
            © {currentYear} Yakoko. Built with Precision.
          </p>

          <div className="flex items-center gap-4">
            <div className="w-1 h-1 rounded-full bg-primary/40" />
            <p className="italic">
              Serving Cornwall, Devon & the UK
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;