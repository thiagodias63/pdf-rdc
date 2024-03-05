import { PdfHelper } from './helper.type';

export type responsavel = { name: string; role: string };

export const pdfNomeResponsavelHelper: PdfHelper<responsavel> = (responsavel: responsavel) => {
  return `${responsavel.name} ${responsavel?.role ? `(${responsavel.role})` : ''}`;
};
