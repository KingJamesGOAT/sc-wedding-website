import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  'nav.home': { en: 'Home', fr: 'Accueil' },
  'nav.rsvp': { en: 'RSVP', fr: 'RSVP' },
  'nav.registry': { en: 'Registry', fr: 'Liste de mariage' },
  'nav.venue': { en: 'Venue Info', fr: 'Lieux' },
  'nav.gallery': { en: 'Gallery', fr: 'Galerie' },
  'nav.contribute': { en: 'Contribute', fr: 'Contribuer' },
  
  // Home
  'home.welcome': { 
    en: "Welcome to our wedding website! We're so excited to celebrate our special day with you. Feel free to explore the site for all the details – see you in Fribourg on our big day!",
    fr: "Bienvenue sur notre site de mariage ! Nous sommes ravis de pouvoir célébrer ce grand jour avec vous. Parcourez le site pour toutes les informations – à très bientôt à Fribourg !"
  },
  'home.saveDate': { en: 'Save the Date!', fr: 'Réservez la date !' },
  'home.days': { en: 'Days', fr: 'Jours' },
  'home.hours': { en: 'Hours', fr: 'Heures' },
  'home.minutes': { en: 'Minutes', fr: 'Minutes' },
  'home.seconds': { en: 'Seconds', fr: 'Secondes' },
  
  // RSVP
  'rsvp.title': { en: 'RSVP', fr: 'RSVP' },
  'rsvp.intro': {
    en: "Please RSVP by filling out the form below. We kindly request your response at your earliest convenience so we can plan accordingly. Merci!",
    fr: "Merci de remplir le formulaire ci-dessous pour confirmer votre présence. Nous vous remercions de votre réponse rapide afin que nous puissions nous organiser au mieux. Thank you!"
  },
  'rsvp.name': { en: 'Full Name', fr: 'Nom complet' },
  'rsvp.email': { en: 'Email Address', fr: 'Adresse e-mail' },
  'rsvp.guests': { en: 'Number of Guests', fr: "Nombre d'invités" },
  'rsvp.dietary': { en: 'Dietary Restrictions or Preferences', fr: 'Restrictions ou préférences alimentaires' },
  'rsvp.submit': { en: 'Submit RSVP', fr: 'Envoyer' },
  'rsvp.success': { 
    en: "Thank you for your RSVP! We've received your response.",
    fr: "Merci pour votre réponse ! Nous avons bien reçu votre confirmation."
  },
  
  // Registry
  'registry.title': { en: 'Gift Registry', fr: 'Liste de mariage' },
  'registry.intro': {
    en: "Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a present, we've put together a small wish list of items and experiences that would help us start our new life together. Thank you so much for your generosity!",
    fr: "Votre présence à notre mariage est le plus beau des cadeaux. Cependant, si vous souhaitez nous offrir quelque chose, nous avons préparé une petite liste d'envies d'objets et d'expériences pour bien commencer notre vie à deux. Un grand merci pour votre générosité !"
  },
  'registry.contribute': { en: 'Contribute', fr: 'Contribuer' },
  'registry.howTo': { en: 'How to contribute:', fr: 'Comment contribuer :' },
  
  // Venue
  'venue.title': { en: 'Venue Information', fr: 'Lieux de la cérémonie et de la réception' },
  'venue.ceremony': { en: 'Ceremony', fr: 'Cérémonie' },
  'venue.reception': { en: 'Reception', fr: 'Réception' },
  'venue.directions': { en: 'Get Directions', fr: 'Itinéraire' },
  'venue.ceremonyTime': { en: 'June 27, 2026 at 14:00', fr: '27 juin 2026 à 14h00' },
  'venue.ceremonyNote': {
    en: 'Ceremony will begin promptly at 14:00, please arrive 10 minutes early.',
    fr: 'La cérémonie débutera à 14h00 précises, merci d\'arriver 10 minutes en avance.'
  },
  'venue.receptionTime': {
    en: 'Reception to follow at 5:00 PM, immediately after the ceremony',
    fr: 'Réception à suivre vers 17h00, juste après la cérémonie'
  },
  'venue.receptionNote': {
    en: 'Dinner, drinks, and dancing will be at this location until late evening',
    fr: 'Le dîner, les boissons et la soirée dansante auront lieu à cette adresse.'
  },
  
  // Gallery
  'gallery.title': { en: 'Photo Gallery', fr: 'Galerie Photos' },
  'gallery.comingSoon': {
    en: "We can't wait to share our special moments with you! Photos will be uploaded here after the wedding. Check back soon for updates.",
    fr: "Nous avons hâte de partager ces moments spéciaux avec vous ! Les photos seront ajoutées ici après le mariage. Revenez bientôt pour les découvrir."
  },
  
  // Contribute
  'contribute.sectionTitle': { en: 'Or Contribute Directly', fr: 'Ou contribuer directement' },
  'contribute.sectionIntro': {
    en: "If you prefer to give a monetary contribution instead, we've made it easy for you. You can send your gift via PayPal, Twint, or bank transfer.",
    fr: "Si vous préférez offrir une contribution financière, nous avons facilité les choses pour vous. Vous pouvez envoyer votre cadeau via PayPal, Twint ou virement bancaire."
  },
  'contribute.paypal': { en: 'Send via PayPal', fr: 'Envoyer via PayPal' },
  'contribute.twint': { en: 'Scan to send via Twint', fr: 'Scannez pour envoyer via Twint' },
  'contribute.bank': { en: 'Bank Transfer', fr: 'Virement bancaire' },
  'contribute.currency': { en: '(All amounts in Swiss Francs – CHF)', fr: '(Tous les montants en Francs Suisses – CHF)' },
  'contribute.paypalDesc': {
    en: 'Click the button below and you\'ll be directed to PayPal to complete your gift.',
    fr: 'Cliquez sur le bouton ci-dessous et vous serez redirigé vers PayPal pour compléter votre don.'
  },
  'contribute.twintDesc': {
    en: 'Scan this QR code with your Twint app to send your contribution.',
    fr: 'Scannez ce QR code avec votre application Twint pour envoyer votre contribution.'
  },
  'contribute.bankDesc': {
    en: 'For wire transfers, please use the following bank details:',
    fr: 'Pour les virements bancaires, veuillez utiliser les coordonnées suivantes :'
  },
  'contribute.thanks': {
    en: "Thank you again for your kindness and generosity. We can't wait to celebrate with you!",
    fr: "Merci encore pour votre gentillesse et votre générosité. Nous avons hâte de fêter ce jour avec vous !"
  },
  
  // Footer
  'footer.contact': { en: 'Contact Us', fr: 'Nous contacter' },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
