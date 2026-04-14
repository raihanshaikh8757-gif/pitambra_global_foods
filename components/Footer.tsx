import Link from 'next/link';
import { ShieldCheck, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8 border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & About */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <ShieldCheck className="h-8 w-8 text-amber-500" />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white leading-tight">PITAMBRA</span>
                <span className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase leading-none">Global Foods Pvt Ltd</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium financial services and loan provider company offering quick and reliable lending solutions to individuals and small businesses.
            </p>
            <div className="flex items-center gap-2 text-amber-500 font-medium text-sm">
              <ShieldCheck className="h-4 w-4" />
              <span>SSL Secured & Verified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'Loan Products', href: '/products' },
                { name: 'EMI Calculator', href: '/calculator' },
                { name: 'How It Works', href: '/how-it-works' },
                { name: 'About Us', href: '/about' },
                { name: 'FAQ', href: '/faq' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-amber-500 transition-colors text-sm flex items-center gap-2">
                    <ArrowRight className="h-3 w-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Legal</h3>
            <ul className="space-y-4">
              {[
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Terms & Conditions', href: '/terms' },
                { name: 'Data Protection Policy', href: '/data-protection' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-amber-500 transition-colors text-sm flex items-center gap-2">
                    <ArrowRight className="h-3 w-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  PITAMBRA GLOBAL FOODS PRIVATE LIMITED<br />
                  H.NO. 17, BLOCK NO -13<br />
                  OLD RAJENDRA NAGAR<br />
                  Rajender Nagar<br />
                  Central Delhi, New Delhi<br />
                  Delhi, India – 110060
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <span>+91 11 2345 6789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <span>support@pitambraglobal.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-900 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Pitambra Global Foods Pvt Ltd. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <ShieldCheck className="h-4 w-4" />
            Your data is 100% secure with us.
          </p>
        </div>
      </div>
    </footer>
  );
}
