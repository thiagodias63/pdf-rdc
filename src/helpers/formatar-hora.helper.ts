import { PdfHelper } from './helper.type';

export const pdfFormatarHoraHelper: PdfHelper<string> = (hora: string) => {
  if (!hora) return '';
  const horas = `${hora.split(':')[0]}:${hora.split(':')[1]}`;
  return horas;
};
