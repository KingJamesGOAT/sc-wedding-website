import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';
import { Gift, CreditCard, Smartphone, Building2 } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const registryItems = [
  {
    name: 'Kitchen Aid Stand Mixer',
    nameFr: 'Batteur sur socle Kitchen Aid',
    description: 'A top-quality mixer for our future kitchen.',
    descriptionFr: 'Un batteur de qualité pour notre future cuisine.',
    amount: 50,
    image: 'kitchen mixer',
  },
  {
    name: 'Luxury Bed Linens (King)',
    nameFr: 'Draps de lit luxueux (King)',
    description: 'Soft, high-thread-count sheets for our bedroom.',
    descriptionFr: 'Des draps doux et de haute qualité pour notre chambre.',
    amount: 30,
    image: 'luxury bedding',
  },
  {
    name: 'Professional Cookware Set',
    nameFr: 'Ensemble de casseroles professionnelles',
    description: 'Professional cookware set for our home.',
    descriptionFr: 'Ustensiles de cuisine professionnels pour notre maison.',
    amount: 20,
    image: 'cookware pots',
  },
  {
    name: 'Honeymoon Fund – Beach Dinner',
    nameFr: 'Voyage de noces – Dîner sur la plage',
    description: 'Contribute to a special dinner on our honeymoon.',
    descriptionFr: 'Contribuez à un dîner spécial pendant notre lune de miel.',
    amount: null,
    image: 'beach dinner romantic',
  },
];

export default function Registry() {
  const { language, t } = useLanguage();

  return (
    <section id="registry" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">{t('registry.title')}</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">{t('registry.intro')}</p>
        </div>

        {/* Registry Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {registryItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg border border-neutral-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-neutral-100 rounded flex items-center justify-center">
                    <Gift className="w-10 h-10 text-neutral-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="mb-1">
                    {language === 'en' ? item.name : item.nameFr}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-3">
                    {language === 'en' ? item.description : item.descriptionFr}
                  </p>
                  <Button className="bg-neutral-900 hover:bg-neutral-800">
                    {t('registry.contribute')} {item.amount ? `CHF ${item.amount}` : ''}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-lg border border-neutral-200 p-8 shadow-sm">
          <h3 className="text-2xl mb-6 text-center">{t('registry.howTo')}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* PayPal */}
            <div className="text-center p-4 bg-neutral-50 rounded-lg">
              <CreditCard className="w-8 h-8 mx-auto mb-3 text-blue-600" />
              <h4 className="mb-2">PayPal</h4>
              <p className="text-sm text-neutral-600 mb-3">
                {language === 'en' 
                  ? 'Click the "Contribute" button and you\'ll be directed to PayPal to complete your gift.'
                  : 'Cliquez sur le bouton "Contribuer" et vous serez redirigé vers PayPal pour compléter votre don.'}
              </p>
            </div>

            {/* Twint */}
            <div className="text-center p-4 bg-neutral-50 rounded-lg">
              <Smartphone className="w-8 h-8 mx-auto mb-3 text-green-600" />
              <h4 className="mb-2">Twint</h4>
              <p className="text-sm text-neutral-600 mb-3">
                {language === 'en'
                  ? 'Scan this QR code with your Twint app to send your contribution.'
                  : 'Scannez ce QR code avec votre application Twint pour envoyer votre contribution.'}
              </p>
              <div className="w-24 h-24 bg-white border-2 border-neutral-300 rounded mx-auto flex items-center justify-center text-xs text-neutral-400">
                QR Code
              </div>
            </div>

            {/* Bank Transfer */}
            <div className="text-center p-4 bg-neutral-50 rounded-lg">
              <Building2 className="w-8 h-8 mx-auto mb-3 text-neutral-700" />
              <h4 className="mb-2">{t('contribute.bank')}</h4>
              <p className="text-xs text-neutral-600 mb-2">
                IBAN: CH00 1234 5678 9012 3456 7
              </p>
              <p className="text-xs text-neutral-600">
                {language === 'en' ? 'Account: S. & C. Lastname' : 'Compte: S. & C. Lastname'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
