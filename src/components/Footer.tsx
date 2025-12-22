import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-6 text-center">
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
        </div>
      </div>
    </footer>
  );
}
