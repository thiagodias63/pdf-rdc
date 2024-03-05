import { pdfFormatarDataHelper } from './formatar-data.helper';
import { pdfFormatarHoraHelper } from './formatar-hora.helper';
import { pdfFormatarParaReaisHelper } from './formatar-para-reais.helper';
import { PdfHelper } from './helper.type';

export type servicoSolicitacaoServico = {
  hour: string;
  day: string | Date;
  price: string | number;
};

export const pdfNomeServicoSolicitacaoServicoHelper: PdfHelper<servicoSolicitacaoServico> = (
  servicoSolicitacaoServico: servicoSolicitacaoServico
) => {
  if (!servicoSolicitacaoServico) return;

  let servicoSolicitacaoServicosString = '';
  const hours = pdfFormatarHoraHelper(servicoSolicitacaoServico.hour);
  servicoSolicitacaoServicosString += `Dia ${pdfFormatarDataHelper(servicoSolicitacaoServico.day)}. `;
  servicoSolicitacaoServicosString += `Hora ${hours}. `;
  servicoSolicitacaoServicosString += `Valor ${pdfFormatarParaReaisHelper(servicoSolicitacaoServico.price)}.`;

  return servicoSolicitacaoServicosString;
};
