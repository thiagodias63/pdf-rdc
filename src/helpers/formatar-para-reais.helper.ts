import { PdfHelper } from './helper.type';

export const pdfFormatarParaReaisHelper: PdfHelper<string | number> = (valor: string | number): string => {
  let valorString = valor.toString().replace('.', ',');
  valorString = valorString.indexOf(',') == -1 ? valorString + ',00' : valorString;
  return `R$ ${valorString}`;
};
