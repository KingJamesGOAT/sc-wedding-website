import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';
import { Gift, CreditCard, Smartphone, Building2, Copy } from 'lucide-react';
import { Separator } from '../ui/separator';
import { toast } from 'sonner@2.0.3';

const registryItems = [
  {
    name: 'Kitchen Aid Stand Mixer',
    nameFr: 'Batteur sur socle Kitchen Aid',
    description: 'A top-quality mixer for our future kitchen.',
    descriptionFr: 'Un batteur de qualité pour notre future cuisine.',
    amount: 50,
  },
  {
    name: 'Luxury Bed Linens (King)',
    nameFr: 'Draps de lit luxueux (King)',
    description: 'Soft, high-thread-count sheets for our bedroom.',
    descriptionFr: 'Des draps doux et de haute qualité pour notre chambre.',
    amount: 30,
  },
  {
    name: 'Professional Cookware Set',
    nameFr: 'Ensemble de casseroles professionnelles',
    description: 'Professional cookware set for our home.',
    descriptionFr: 'Ustensiles de cuisine professionnels pour notre maison.',
    amount: 20,
  },
  {
    name: 'Honeymoon Fund – Beach Dinner',
    nameFr: 'Voyage de noces – Dîner sur la plage',
    description: 'Contribute to a special dinner on our honeymoon.',
    descriptionFr: 'Contribuez à un dîner spécial pendant notre lune de miel.',
    amount: null,
  },
];

export default function RegistryWithContribution() {
  const { language, t } = useLanguage();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success(language === 'en' ? 'Copied to clipboard!' : 'Copié dans le presse-papiers !');
  };

  return (
    <section id="registry" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        {/* Registry Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">{t('registry.title')}</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">{t('registry.intro')}</p>
          </div>

          {/* Registry Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {registryItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-neutral-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-neutral-100 rounded flex items-center justify-center">
                      <Gift className="w-10 h-10 text-neutral-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1">{language === 'en' ? item.name : item.nameFr}</h3>
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

          {/* How to Contribute - Registry Items */}
          <div className="mt-8 bg-white rounded-lg border border-neutral-200 p-8 shadow-sm">
            <h3 className="text-2xl mb-6 text-center">{t('registry.howTo')}</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* PayPal */}
              <div className="text-center p-4 bg-neutral-50 rounded-lg">
                <CreditCard className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <h4 className="mb-2">PayPal</h4>
                <p className="text-sm text-neutral-600">
                  {language === 'en'
                    ? "Click the 'Contribute' button and you'll be directed to PayPal to complete your gift."
                    : "Cliquez sur le bouton 'Contribuer' et vous serez redirigé vers PayPal pour compléter votre don."}
                </p>
              </div>

              {/* Twint */}
              <div className="text-center p-4 bg-neutral-50 rounded-lg">
                <Smartphone className="w-8 h-8 mx-auto mb-3 text-green-600" />
                <h4 className="mb-2">Twint</h4>
                <p className="text-sm text-neutral-600">
                  {language === 'en'
                    ? 'Scan the QR code below with your Twint app to send your contribution.'
                    : "Scannez le QR code ci-dessous avec votre application Twint pour envoyer votre contribution."}
                </p>
              </div>

              {/* Bank Transfer */}
              <div className="text-center p-4 bg-neutral-50 rounded-lg">
                <Building2 className="w-8 h-8 mx-auto mb-3 text-neutral-700" />
                <h4 className="mb-2">{t('contribute.bank')}</h4>
                <p className="text-sm text-neutral-600">
                  {language === 'en'
                    ? 'Use the bank details below for wire transfers.'
                    : 'Utilisez les coordonnées bancaires ci-dessous pour les virements.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="flex items-center gap-4 my-12">
          <Separator className="flex-1" />
          <span className="text-neutral-400 px-4">{language === 'en' ? 'or' : 'ou'}</span>
          <Separator className="flex-1" />
        </div>

        {/* Direct Contribution Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">{t('contribute.sectionTitle')}</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">{t('contribute.sectionIntro')}</p>
            <p className="text-sm text-neutral-500 mt-2">{t('contribute.currency')}</p>
          </div>

          <div className="space-y-6">
            {/* PayPal */}
            <div className="bg-white rounded-lg border border-neutral-200 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-blue-50 rounded-lg">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2">PayPal</h3>
                  <p className="text-sm text-neutral-600 mb-4">{t('contribute.paypalDesc')}</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      {t('contribute.paypal')}
                    </Button>
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <span>PayPal: steve.cynthia@example.com</span>
                      <button
                        onClick={() => copyToClipboard('steve.cynthia@example.com')}
                        className="p-1 hover:bg-neutral-100 rounded"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Twint */}
            <div className="bg-white rounded-lg border border-neutral-200 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-green-50 rounded-lg">
                  <Smartphone className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2">Twint</h3>
                  <p className="text-sm text-neutral-600 mb-4">{t('contribute.twintDesc')}</p>
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="w-32 h-32 bg-white border-2 border-neutral-300 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Smartphone className="w-8 h-8 mx-auto mb-1 text-neutral-400" />
                        <p className="text-xs text-neutral-500">QR Code</p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-neutral-600">
                        {language === 'en' ? 'Twint number:' : 'Numéro Twint :'} +41 79 123 45 67
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bank Transfer */}
            <div className="bg-white rounded-lg border border-neutral-200 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-neutral-100 rounded-lg">
                  <Building2 className="w-6 h-6 text-neutral-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2">{t('contribute.bank')}</h3>
                  <p className="text-sm text-neutral-600 mb-4">{t('contribute.bankDesc')}</p>
                  <div className="space-y-2 bg-neutral-50 rounded p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">IBAN:</span>
                      <div className="flex items-center gap-2">
                        <code className="text-sm">CH00 1234 5678 9012 3456 7</code>
                        <button
                          onClick={() => copyToClipboard('CH0012345678901234567')}
                          className="p-1 hover:bg-neutral-200 rounded"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">
                        {language === 'en' ? 'Account Name:' : 'Nom du compte :'}
                      </span>
                      <span className="text-sm">Steve Lastname & Cynthia Lastname</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{language === 'en' ? 'Bank:' : 'Banque :'}</span>
                      <span className="text-sm">Credit Suisse, Geneva</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thank You Message */}
          <div className="mt-8 text-center p-6 bg-white rounded-lg border border-neutral-200">
            <p className="text-neutral-700">{t('contribute.thanks')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
