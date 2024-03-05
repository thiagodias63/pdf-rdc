import { PdfHelper } from './helper.type';

export type enderecoSolicitacaoServico = {
  address: string;
  addressNumber: number;
  neighborhood: string;
  cep?: number | string;
  apartmentNumber?: number | string;
  apartmentBlock?: number | string;
  amountApartments?: number | string;
};

export const pdfEnderecoSolicitacaoServicoHelper: PdfHelper<enderecoSolicitacaoServico> = (
  enderecoSolicitacaoServico: enderecoSolicitacaoServico
) => {
  const address = `${enderecoSolicitacaoServico.address},
  ${enderecoSolicitacaoServico.addressNumber},
  ${enderecoSolicitacaoServico.neighborhood}`;
  let apartments = enderecoSolicitacaoServico.cep ? ` - CEP: ${enderecoSolicitacaoServico.cep}` : '';
  apartments += enderecoSolicitacaoServico.apartmentNumber ? ` - apto: ${enderecoSolicitacaoServico.apartmentNumber}` : '';
  apartments += enderecoSolicitacaoServico.apartmentBlock ? ` - bloco: ${enderecoSolicitacaoServico.apartmentBlock}` : '';
  apartments += enderecoSolicitacaoServico.amountApartments ? ` - apartamentos: ${enderecoSolicitacaoServico.amountApartments}` : '';

  return address + apartments;
};
