import { PdfHelper } from './helper.type';

export type servicoOrcamento = {
  measureUnit: {
    initials: string;
    isPrintable: boolean;
  };
  resume: string;
  amount: number | string;
  measureAmount: number | string;
};

export const pdfNomeServicoOrcamentoHelper: PdfHelper<servicoOrcamento> = (servicoOrcamento: servicoOrcamento): string => {
  if (!servicoOrcamento) return '';

  let servicoOrcamentosString = '';
  let measureUnit = '';
  if (servicoOrcamento?.measureUnit && servicoOrcamento?.measureUnit.isPrintable) {
    measureUnit = servicoOrcamento?.measureUnit?.initials;
  }
  servicoOrcamentosString += `${servicoOrcamento.amount} `;
  servicoOrcamentosString += `${servicoOrcamento.resume} ${servicoOrcamento.measureAmount}`;
  servicoOrcamentosString += `${measureUnit} `;
  return servicoOrcamentosString;
};
