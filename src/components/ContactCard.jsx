import React from 'react';

function Icon({ name }) {
  const paths = {
    whatsapp: <path d="M20.5 11.8a8.5 8.5 0 0 1-12.4 7.5L3 20.6l1.4-4.9A8.5 8.5 0 1 1 20.5 11.8ZM8.1 7.3c-.3 0-.5.1-.7.4-.3.4-.8 1-.8 2s.8 2.2.9 2.3c.1.2 1.5 2.5 3.8 3.4 1.9.8 2.3.6 2.7.5.4-.1 1.3-.6 1.5-1.2.2-.6.2-1 .1-1.1l-1.5-.7c-.2-.1-.4-.1-.6.2l-.7.8c-.1.2-.3.2-.5.1-1.4-.7-2.2-1.3-3-2.8-.1-.2 0-.3.1-.5l.5-.6c.1-.2.2-.4.1-.6l-.7-1.8c-.2-.4-.4-.5-.6-.5Z"/>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></>,
    facebook: <path d="M14 21v-8h2.7l.4-3H14V8.1c0-.9.3-1.5 1.6-1.5H17V4a18 18 0 0 0-2-.1c-2.4 0-4 1.5-4 4.1V10H8v3h3v8h3Z"/>
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="21" height="21" fill={name === 'instagram' ? 'none' : 'currentColor'} stroke={name === 'instagram' ? 'currentColor' : 'none'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

export default function ContactCard({ light = false }) {
  return <div className="flex flex-wrap gap-3">
    <a className="button-primary" href="https://wa.me/5554996306905" aria-label="Falar com a Forte Química Polibom pelo WhatsApp"><Icon name="whatsapp" /> WhatsApp</a>
    <a className={light ? 'button-outline light' : 'button-outline'} href="https://www.instagram.com/fortequimicapolibom/" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Forte Química Polibom"><Icon name="instagram" /> Instagram</a>
    <a className={light ? 'button-outline light' : 'button-outline'} href="https://www.facebook.com/fortequimica/" target="_blank" rel="noopener noreferrer" aria-label="Facebook da Forte Química"><Icon name="facebook" /> Facebook</a>
  </div>;
}
