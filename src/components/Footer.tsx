import { Mail, Phone, Instagram, Facebook, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-neutral-600">
            <a
              href="mailto:steve.cynthia.wedding@example.com"
              className="flex items-center gap-2 hover:text-neutral-900 transition-colors"
            >
              <Mail size={18} />
              <span className="text-sm">steve.cynthia.wedding@example.com</span>
            </a>
            <a
              href="https://wa.me/41790000000"
              className="flex items-center gap-2 hover:text-neutral-900 transition-colors"
            >
              <Phone size={18} />
              <span className="text-sm">+41 79 000 00 00</span>
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/steveandcynthia2026"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-neutral-200 rounded-full transition-colors text-neutral-600 hover:text-neutral-900"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-neutral-200 rounded-full transition-colors text-neutral-600 hover:text-neutral-900"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>

          {/* Monogram & Copyright */}
          <div className="flex flex-col items-center gap-2">
            <div className="text-2xl text-neutral-400">S & C</div>
            <p className="text-sm text-neutral-500 flex items-center gap-1">
              © 2025–2026 Steve & Cynthia
            </p>
            <p className="text-xs text-neutral-400 flex items-center gap-1">
              Designed with <Heart size={12} className="fill-red-400 text-red-400" /> in Figma
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
