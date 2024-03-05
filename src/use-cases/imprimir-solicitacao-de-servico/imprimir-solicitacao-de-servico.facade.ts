// Cliente: {{clientNameQuotation quotation}}

// {{#if (clientCnpj quotation)}}
// CNPJ:{{clientCnpj quotation}}

// {{/if}}
// Responsável:{{ownerName quotation}}

// Telefones para contato:{{phones quotation}}

// E-mails:{{emails quotation}}

// Endereço:{{pdfEnderecoSolicitacaoServicoHelper quotation.company}}

// Meio de pagamento:

// Forma de pagamento:

// Total:{{pdfFormatarParaReais quotation}}

// {{#each quotation.services}}
// {{pdfNomeServicoOrcamento this}}
// {{pdfNomeServicoSolicitacaoServicoHelper this}}

// {{/each}}

declare type PDFDocument = { font: any; fontSize: any; text: any };
import { cliente, pdfNomeClienteHelper } from '../../pdf/helpers/nome-cliente.helpers';
import { pdfNomeResponsavelHelper, responsavel } from '../../pdf/helpers/nome-responsavel.helpers';
import { pdfTelefonesResponsavelHelper } from '../../pdf/helpers/telefones-responsavel.helper';
import { pdfEmailsResponsavelHelper } from '../../pdf/helpers/emails-responsavel.helper';
import { pdfCnpjHelper } from '../../pdf/helpers/cnpj.helper';
import { pdfFormatarParaReaisHelper } from '../../pdf/helpers/formatar-para-reais.helper';
import { pdfNomeServicoOrcamentoHelper, servicoOrcamento } from '../../pdf/helpers/nome-servico-orcamento.helper';
import { pdfNomeServicoSolicitacaoServicoHelper, servicoSolicitacaoServico } from '../../pdf/helpers/nome-servico-solicitacao-servico.helper';
import { enderecoSolicitacaoServico, pdfEnderecoSolicitacaoServicoHelper } from '../../pdf/helpers/endereco-solicitacao-servico.helper';

export type imprimirSolicitacaoDeServicoInput = {
  cliente: cliente;
  responsavel: responsavel;
  endereco: enderecoSolicitacaoServico;
  total: string | number;
  servicos: Array<servicoSolicitacaoServico & servicoOrcamento>;
  cnpj?: string;
  telefones?: Array<string>;
  emails?: Array<string>;
};

export const imprimirSolicitacaoDeServico = (
  doc: PDFDocument,
  { cliente, cnpj, responsavel, endereco, total, servicos, telefones, emails }: imprimirSolicitacaoDeServicoInput
): void => {
  doc.font('Helvetica-Bold').fontSize(18.4).text(`Rei da Caixa D'água - Documento de Visita`, { align: 'center' });

  doc.fontSize(12).font('Helvetica-Bold').text('Cliente:', { continued: true });
  doc.font('Helvetica').text(pdfNomeClienteHelper(cliente), { continued: false });

  if (cnpj) {
    doc.font('Helvetica-Bold');
    doc.text('CNPJ:', { continued: true });
    doc.font('Helvetica', 'normal');
    doc.text(pdfCnpjHelper(cnpj), { continued: false });
  }

  doc.font('Helvetica-Bold');
  doc.text('Responsável:', { continued: true });
  doc.font('Helvetica', 'normal');
  doc.text(pdfNomeResponsavelHelper(responsavel), { continued: false });

  if (telefones?.length) {
    doc.font('Helvetica-Bold');
    doc.text('Telefones:', { continued: true });
    doc.font('Helvetica', 'normal');
    doc.text(pdfTelefonesResponsavelHelper(telefones), { continued: false });
  }

  if (emails?.length) {
    doc.font('Helvetica-Bold');
    doc.text('Emails:', { continued: true });
    doc.font('Helvetica', 'normal');
    doc.text(pdfEmailsResponsavelHelper(emails), { continued: false });
  }

  doc.font('Helvetica-Bold');
  doc.text('Endereço:', { continued: true });
  doc.font('Helvetica', 'normal');
  doc.text(pdfEnderecoSolicitacaoServicoHelper(endereco), { continued: false });

  doc.font('Helvetica-Bold');
  doc.text('Meio de pagamento:', { continued: false });

  doc.font('Helvetica-Bold');
  doc.text('Forma de pagamento:', { continued: false });

  doc.font('Helvetica-Bold');
  doc.text('Total:', { continued: true });
  doc.font('Helvetica', 'normal');
  doc.text(pdfFormatarParaReaisHelper(total), { continued: false });

  servicos.forEach((servico) => {
    doc.text(pdfNomeServicoOrcamentoHelper(servico), { continued: false });
    doc.text(pdfNomeServicoSolicitacaoServicoHelper(servico), { continued: false });
  });
};
