import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';
import { CreditCard, Smartphone, Building2, Copy } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export default function Contribute() {
  const { language, t } = useLanguage();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success(language === 'en' ? 'Copied to clipboard!' : 'Copié dans le presse-papiers !');
  };

  return (
    <section id="contribute" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">{t('contribute.title')}</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">{t('contribute.intro')}</p>
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
                <p className="text-sm text-neutral-600 mb-4">
                  {language === 'en'
                    ? 'Send your gift securely through PayPal. Click the button below to get started.'
                    : 'Envoyez votre cadeau en toute sécurité via PayPal. Cliquez sur le bouton ci-dessous pour commencer.'}
                </p>
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
                <p className="text-sm text-neutral-600 mb-4">
                  {t('contribute.twint')}
                </p>
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
                <p className="text-sm text-neutral-600 mb-4">
                  {language === 'en'
                    ? 'For wire transfers, please use the following bank details:'
                    : 'Pour les virements bancaires, veuillez utiliser les coordonnées suivantes :'}
                </p>
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
                    <span className="text-sm">
                      {language === 'en' ? 'Bank:' : 'Banque :'}
                    </span>
                    <span className="text-sm">Credit Suisse, Geneva</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="mt-8 text-center p-6 bg-neutral-50 rounded-lg">
          <p className="text-neutral-700">{t('contribute.thanks')}</p>
        </div>
      </div>
    </section>
  );
}
