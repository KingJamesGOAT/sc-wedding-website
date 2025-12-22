import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { CheckCircle2 } from 'lucide-react';

export default function RSVP() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '',
    dietary: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store RSVP data in localStorage (simulating Excel export)
    const existingRSVPs = JSON.parse(localStorage.getItem('rsvpData') || '[]');
    existingRSVPs.push({
      ...formData,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('rsvpData', JSON.stringify(existingRSVPs));

    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', guests: '', dietary: '' });
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <section id="rsvp" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl mb-2">{t('rsvp.title')}</h2>
            <p className="text-green-800">{t('rsvp.success')}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">{t('rsvp.title')}</h2>
          <p className="text-neutral-600 max-w-xl mx-auto">{t('rsvp.intro')}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg border border-neutral-200 p-8 shadow-sm">
          <div className="space-y-2">
            <Label htmlFor="name">{t('rsvp.name')}</Label>
            <Input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">{t('rsvp.email')}</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="guests">{t('rsvp.guests')}</Label>
            <Select value={formData.guests} onValueChange={(value) => setFormData({ ...formData, guests: value })}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select number" />
              </SelectTrigger>
              <SelectContent>
                {[0, 1, 2, 3, 4, 5].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="dietary">{t('rsvp.dietary')}</Label>
            <Textarea
              id="dietary"
              value={formData.dietary}
              onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
              className="w-full min-h-[100px]"
              placeholder="Vegetarian, vegan, allergies, etc."
            />
          </div>

          <Button type="submit" className="w-full bg-neutral-900 hover:bg-neutral-800">
            {t('rsvp.submit')}
          </Button>
        </form>
      </div>
    </section>
  );
}
