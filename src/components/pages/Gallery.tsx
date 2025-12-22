import { useLanguage } from '../../contexts/LanguageContext';
import { Camera } from 'lucide-react';

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Camera className="w-16 h-16 mx-auto mb-4 text-neutral-400" />
          <h2 className="text-4xl mb-4">{t('gallery.title')}</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">{t('gallery.comingSoon')}</p>
        </div>

        {/* Placeholder Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="aspect-square bg-neutral-100 rounded-lg border-2 border-dashed border-neutral-300 flex items-center justify-center"
            >
              <Camera className="w-8 h-8 text-neutral-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
