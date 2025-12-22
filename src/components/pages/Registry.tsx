import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Gift, CreditCard, Smartphone, Building2, Copy, Check, QrCode, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const GIFTS = [
  {
    id: 'mixer',
    title: 'Kitchen Aid Stand Mixer',
    description: 'A top-quality mixer for our future kitchen.',
    suggestedAmounts: [50, 100, 500],
    image: 'kitchen mixer'
  },
  {
    id: 'linens',
    title: 'Luxury Bed Linens',
    description: 'Soft, high-thread-count sheets for our bedroom.',
    suggestedAmounts: [50, 100, 200],
    image: 'luxury bedding'
  },
  {
    id: 'cookware',
    title: 'Professional Cookware Set',
    description: 'Professional cookware set for our home.',
    suggestedAmounts: [50, 100, 300],
    image: 'cookware pots'
  },
  {
    id: 'honeymoon',
    title: 'Honeymoon Fund – Beach Dinner',
    description: 'Contribute to a special dinner on our honeymoon.',
    suggestedAmounts: [50, 100, 200],
    image: 'beach dinner romantic'
  }
];

export default function Registry() {
  const { language, t } = useLanguage();
  const [selectedGift, setSelectedGift] = useState<any>(null);
  const [pledgeStep, setPledgeStep] = useState<'form' | 'success'>('form');
  const [amountType, setAmountType] = useState<'suggested' | 'custom'>('suggested');
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  const handleOpenPledge = (gift: any) => {
    setSelectedGift(gift);
    setPledgeStep('form');
    setFormData({ name: '', email: '', amount: '', message: '' });
    setAmountType('suggested');
  };

  const generateRefCode = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let result = 'WED-';
    for (let i = 0; i < 3; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedGift) return;

    setIsSubmitting(true);
    const code = generateRefCode();
    setReferenceCode(code);

    try {
      await fetch('https://script.google.com/macros/s/AKfycbz06IfaoPFh1kpwyfANLVt4YUPDBa6jODhf9AEufCUcAVWL_WVJNCtbscP5eTuakLHo/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'registry',
          name: formData.name,
          email: formData.email,
          item: selectedGift.title,
          amount: formData.amount,
          message: `Ref Code: ${code} | User Message: ${formData.message}`
        }),
      });

      // Optimistic success (no-cors opaque response)
      setPledgeStep('success');
    } catch (error) {
      console.error('Error submitting pledge:', error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success(t('registry.copied'));
  };

  return (
    <section id="registry" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">{t('registry.title')}</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">{t('registry.intro')}</p>
        </div>

        {/* Gift Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {GIFTS.map((gift) => (
            <div key={gift.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6 flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0 flex items-center justify-center bg-neutral-100 rounded-lg w-24 h-24 sm:w-32 sm:h-32">
                   <Gift className="w-10 h-10 text-neutral-400" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-medium mb-2">{gift.title}</h3>
                    <p className="text-neutral-600 text-sm mb-4">{gift.description}</p>
                  </div>
                  <Button 
                    onClick={() => handleOpenPledge(gift)}
                    className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 self-start"
                  >
                    {t('registry.pledgeBtn')}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pledge Dialog */}
        <Dialog open={!!selectedGift} onOpenChange={(open) => !open && setSelectedGift(null)}>
          <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
            
            {/* STATE 1: FORM */}
            {pledgeStep === 'form' && selectedGift && (
              <>
                <DialogHeader>
                  <DialogTitle>{t('registry.pledgeTitle')}</DialogTitle>
                  <DialogDescription>
                   {t('registry.pledgeSubtitle')} <span className="font-medium text-neutral-900">{selectedGift.title}</span>
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                  
                  {/* Amount Selection */}
                  <div className="space-y-3">
                    <Label>{t('registry.amountLabel')}</Label>
                    <div className="flex flex-wrap gap-2">
                      {selectedGift.suggestedAmounts.map((amt: number) => (
                         <Button
                           key={amt}
                           type="button"
                           variant={formData.amount === amt.toString() && amountType === 'suggested' ? 'default' : 'outline'}
                           onClick={() => {
                             setFormData({ ...formData, amount: amt.toString() });
                             setAmountType('suggested');
                           }}
                         >
                           CHF {amt}
                         </Button>
                      ))}
                      <Button
                        type="button"
                        variant={amountType === 'custom' ? 'default' : 'outline'}
                        onClick={() => {
                          setFormData({ ...formData, amount: '' });
                          setAmountType('custom');
                        }}
                      >
                       {t('registry.customAmount')}
                      </Button>
                    </div>
                    {amountType === 'custom' && (
                      <Input
                        type="number"
                        placeholder="Enter amount"
                        value={formData.amount}
                        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                        required
                        min="1"
                        className="mt-2"
                      />
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('registry.nameLabel')}</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                       <Label htmlFor="email">{t('registry.emailLabel')}</Label>
                       <Input
                         id="email"
                         type="email"
                         value={formData.email}
                         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                         required
                         placeholder="john@example.com"
                       />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t('registry.messageLabel')}</Label>
                    <Textarea 
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                       placeholder="Best wishes..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-neutral-900 hover:bg-neutral-800" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t('registry.sending')}
                      </>
                    ) : (
                      t('registry.confirmBtn')
                    )}
                  </Button>
                </form>
              </>
            )}

            {/* STATE 2: SUCCESS & PAYMENT */}
            {pledgeStep === 'success' && (
              <>
                 <DialogHeader>
                    <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Check className="h-6 w-6 text-green-600" />
                    </div>
                    <DialogTitle className="text-center">
                      {t('registry.thankYou').replace('{name}', formData.name.split(' ')[0])}
                    </DialogTitle>
                    <DialogDescription className="text-center pt-2">
                      {t('registry.paymentInstructions')}
                    </DialogDescription>
                 </DialogHeader>

                 <div className="space-y-6 pt-6">
                    {/* Reference Code */}
                    <div className="bg-neutral-50 p-4 rounded-lg text-center border-2 border-neutral-200 border-dashed">
                       <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">{t('registry.refCode')}</p>
                       <div className="flex items-center justify-center gap-2">
                          <span className="text-3xl font-mono font-bold tracking-tight text-neutral-900">{referenceCode}</span>
                          <button onClick={() => copyToClipboard(referenceCode)} className="p-2 hover:bg-neutral-200 rounded-full ml-2">
                             <Copy className="h-4 w-4 text-neutral-500" />
                          </button>
                       </div>
                    </div>

                    <div className="space-y-4">
                       
                       {/* Twint Option */}
                       <div className="flex items-start gap-4 p-4 border rounded-lg bg-white">
                          <div className="flex-shrink-0 p-2 bg-green-50 rounded">
                             <Smartphone className="h-6 w-6 text-green-600" />
                          </div>
                          <div className="flex-1">
                             <h4 className="font-medium mb-1">Twint</h4>
                             <div className="flex flex-col sm:flex-row gap-4 mb-2">
                                <div className="w-24 h-24 bg-neutral-100 rounded flex items-center justify-center text-xs text-neutral-400">
                                   <QrCode className="h-8 w-8 opacity-20" />
                                </div>
                                <div className="flex flex-col justify-center">
                                   <span className="text-xs text-neutral-500">Send to:</span>
                                   <div className="flex items-center gap-2">
                                      <span className="font-mono text-sm">+41 79 123 45 67</span>
                                      <button onClick={() => copyToClipboard('+41791234567')} className="p-1 hover:bg-neutral-100 rounded">
                                         <Copy className="h-3 w-3 text-neutral-400" />
                                      </button>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>

                       {/* Bank Transfer Option */}
                       <div className="flex items-start gap-4 p-4 border rounded-lg bg-white">
                          <div className="flex-shrink-0 p-2 bg-neutral-100 rounded">
                             <Building2 className="h-6 w-6 text-neutral-600" />
                          </div>
                          <div className="flex-1">
                             <h4 className="font-medium mb-1">Bank Transfer</h4>
                             <div className="space-y-1">
                                <div className="flex items-center justify-between">
                                   <span className="text-xs text-neutral-500">IBAN</span>
                                   <div className="flex items-center gap-2">
                                      <span className="font-mono text-xs">CH00 1234 5678 9012 3456 7</span>
                                      <button onClick={() => copyToClipboard('CH0012345678901234567')} className="p-1 hover:bg-neutral-100 rounded">
                                         <Copy className="h-3 w-3 text-neutral-400" />
                                      </button>
                                   </div>
                                </div>
                                <div className="flex items-center justify-between">
                                   <span className="text-xs text-neutral-500">Account</span>
                                   <span className="text-xs font-medium">Steve & Cynthia</span>
                                </div>
                             </div>
                          </div>
                       </div>

                    </div>
                    
                    <Button onClick={() => setSelectedGift(null)} className="w-full" variant="outline">
                       Close
                    </Button>
                 </div>
              </>
            )}

          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
