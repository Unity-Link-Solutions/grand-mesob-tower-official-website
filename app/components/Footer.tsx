import Link from "next/link";
import PatternDivider from "./pattern_devider";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <PatternDivider variant="tibeb" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl text-white">
              Grand Mesob Tower
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              A landmark tower for Addis Ababa, celebrating Ethiopian culture,
              innovation, and world-class hospitality.
            </p>
          </div>

          {/* Explore Column */}
          <div className="space-y-4">
            <h4 className="text-white text-sm uppercase tracking-wider font-medium">
              Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/tower"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  The Tower
                </Link>
              </li>
              <li>
                <Link
                  href="/experiences"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Experiences
                </Link>
              </li>
              <li>
                <Link
                  href="/culture"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Culture & Heritage
                </Link>
              </li>
              <li>
                <Link
                  href="/business"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Business & Investment
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-4">
            <h4 className="text-white text-sm uppercase tracking-wider font-medium">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@grandmesobtower.com"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  info@grandmesobtower.com
                </a>
              </li>
            </ul>
          </div>

          {/* Location Column */}
          <div className="space-y-4">
            <h4 className="text-white text-sm uppercase tracking-wider font-medium">
              Location
            </h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Addis Ababa
              <br />
              Ethiopia
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/40 text-xs">
            © {currentYear} Grand Mesob Tower. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-white/40 hover:text-white/60 text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/40 hover:text-white/60 text-xs transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
