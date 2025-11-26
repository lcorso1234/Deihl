"use client";
import React, { useState } from 'react';

const contact = {
  firstName: 'Matthew',
  lastName: 'Diehl',
  company: "Matt's Cookie Company",
  phone: '+1-847-537-3888',
  email: 'mdiehl@mattscookies.com',
  note: 'Just like your mom makes them'
};

const smsMessage = "Nice to meet you! - Matt's Cookie Company";

function buildVCard() {
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${contact.lastName};${contact.firstName};;;`,
    `FN:${contact.firstName} ${contact.lastName}`,
    `ORG:${contact.company}`,
    `EMAIL;TYPE=INTERNET:${contact.email}`,
    `TEL;TYPE=CELL:${contact.phone}`,
    `NOTE:${contact.note}`,
    'END:VCARD'
  ].join('\n');
}

export const BusinessCard: React.FC = () => {
  const [saved, setSaved] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const handleSave = () => {
    // Build vCard file and trigger download so mobile devices can add the contact
    const vcard = buildVCard();
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${contact.firstName}-${contact.lastName}.vcf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Open SMS composer with prefilled message after the file save action
    const smsBody = encodeURIComponent(smsMessage);
    const number = contact.phone.replace(/[^+\d]/g, '');
    const ua = navigator.userAgent;
    const smsUrl = /iPhone|iPad|iPod/i.test(ua)
      ? `sms:${number}&body=${smsBody}` // iOS format
      : `sms:${number}?body=${smsBody}`; // Android format
    // Wait briefly to let the download action register before opening the SMS app
    setTimeout(() => {
      window.location.assign(smsUrl);
    }, 350);

    setSaved(true);
    // retrigger jiggle after save
    setTimeout(() => setAnimKey(k => k + 1), 1200);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gunmetal text-white noise-bg px-5 py-12">
      <div className="floating-glow floating-glow--left" />
      <div className="floating-glow floating-glow--right" />
      <div className="biz-card w-full max-w-md">
        <span className="biz-accent-bar" />
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="badge">Matt&apos;s Cookie Company</span>
          <span className="live-dot" aria-hidden />
        </div>
        <header className="mb-4">
          <p className="text-xs uppercase tracking-[0.28em] text-accent/80 mb-2">Contact Card</p>
          <h1 className="text-3xl font-bold leading-tight text-accent drop-shadow-[0_0_10px_rgba(57,255,20,0.55)]">
            Just like your mom makes them
          </h1>
          <p className="text-sm text-white/70 mt-2">
            Keep Matthew in your contacts for fresh cookies and faster replies.
          </p>
        </header>
        <div className="flex flex-col items-stretch gap-3">
          <button
            key={animKey}
            onClick={handleSave}
            className={`relative overflow-hidden rounded-xl bg-accent px-6 py-4 text-base font-semibold text-gunmetal shadow-lg accent-glow focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gunmetal transition-transform active:scale-[0.99] ${saved ? 'jiggle-once' : 'jiggle-loop'}`}
          >
            <span className="relative z-10">{saved ? 'Contact saved — tap to resend' : 'Save contact & text me'}</span>
            <span className="button-sheen" aria-hidden />
          </button>
          <div className="rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-xs text-center text-white/75 shadow-inner shadow-black/40">
            Tap once to drop a vCard into your phone and auto-open a text with &quot;{smsMessage}&quot;.
          </div>
        </div>
        <footer className="mt-8 pt-4 border-t border-white/10 text-center text-xs">
          <p className="font-medium">Built in America, on earth.</p>
          <p className="italic opacity-80">Making relationships built to last, the American Way.</p>
        </footer>
      </div>
    </div>
  );
};
