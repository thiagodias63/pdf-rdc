import { PdfHelper } from './helper.type';

export const pdfTelefonesResponsavelHelper: PdfHelper<Array<string>> = (telefones: Array<string>) => {
  if (telefones.length === 1) return phoneTransform(telefones[0]);

  let phoneString = '';
  telefones?.forEach((phone, index) => {
    phoneString += phoneTransform(phone);
    phoneString += index == telefones.length - 2 ? 'e' : ',';
  });
  return phoneString;
};

const phoneTransform = (value: string) => {
  const ddd = value.slice(0, 2);
  if (value.length >= 11) {
    const first = value.slice(2, 7);
    const second = value.slice(7, 11);
    return `(${ddd}) ${first}-${second}`;
  } else {
    const first = value.slice(2, 6);
    const second = value.slice(6, 10);
    return `(${ddd}) ${first}-${second}`;
  }
};
