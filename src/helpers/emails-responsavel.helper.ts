import { PdfHelper } from './helper.type';

export const pdfEmailsResponsavelHelper: PdfHelper<Array<string>> = (emails: Array<string>) => {
  if (emails.length === 1) return emails[0];

  let emailstring = '';
  emails?.forEach((email, index) => {
    emailstring += email.toLowerCase();
    emailstring += index == emails.length - 2 ? 'e' : ',';
  });
  return emailstring;
};
