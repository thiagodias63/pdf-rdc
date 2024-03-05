import { PdfHelper } from './helper.type';

export type cliente = { old_id: string; type: string; name: string };

export const pdfNomeClienteHelper: PdfHelper<cliente> = (cliente: cliente) => {
  return `${cliente.old_id} - ${cliente.type} ${cliente.name}`;
};
