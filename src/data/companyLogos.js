import bnpLogo from '../assets/logos/bnp-logo.jpg';
import helloBankLogo from '../assets/logos/hello-bank-logo.png';
import ibmLogo from '../assets/logos/IBM_logo.png';
import edfLogo from '../assets/logos/Logo-EDF.png';
import ministereLogo from '../assets/logos/logo-ministere-des-armees.png';
import ventePriveeLogo from '../assets/logos/VP-logo.png';
import lbdLogo from '../assets/logos/lbd_logo.jpg';

export const companyLogoMap = {
  'MINISTÈRE DES ARMÉES': ministereLogo,
  'BNP PARIBAS — BDDF ENTREPRISE (Retail)': bnpLogo,
  'EDF — Retail': edfLogo,
  'BNP PARIBAS — HELLO BANK': helloBankLogo,
  'IBM FRANCE LAB — CRÉDIT AGRICOLE': ibmLogo,
  'VENTE-PRIVEE.COM': ventePriveeLogo,
  'LA BROSSE & DUPONT': lbdLogo,
};

export function getCompanyLogo(companyName) {
  return companyLogoMap[companyName] || companyLogoMap[companyName?.trim()] || null;
}

export const bannerLogos = [
  { src: bnpLogo, alt: 'BNP Paribas' },
  { src: helloBankLogo, alt: 'Hello bank!' },
  { src: ibmLogo, alt: 'IBM' },
  { src: edfLogo, alt: 'EDF' },
  { src: ministereLogo, alt: 'Ministère des Armées' },
];
