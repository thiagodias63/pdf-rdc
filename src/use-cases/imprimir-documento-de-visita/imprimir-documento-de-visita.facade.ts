//   Cliente: {{clientNameQuotation quotation}}
// {{#if (clientCnpj quotation)}}
// CNPJ:{{clientCnpj quotation}}

// {{/if}}
// Responsável:{{ownerName quotation}}

// Telefones para contato:{{phones quotation}}

// E-mails:{{emails quotation}}

// Endereço:{{companyAddressForServiceRequest quotation.company}}

// {{#if (companyResources quotation)}}
// Caixas e reservatórios:

// {{/if}} {{#each (companyResources quotation)}}
// {{resource this}}

// {{/each}}
// Observações: {{quotationCompanyObservation quotation}}
import { cliente, pdfNomeClienteHelper } from '../../helpers/nome-cliente.helpers';
import { pdfNomeResponsavelHelper, responsavel } from '../../helpers/nome-responsavel.helpers';
import { pdfTelefonesResponsavelHelper } from '../../helpers/telefones-responsavel.helper';
import { pdfRecursosEmpresaHelper, recurso } from '../../helpers/recursos-empresa.helper';
import { pdfEmailsResponsavelHelper } from '../../helpers/emails-responsavel.helper';
import { pdfCnpjHelper } from '../../helpers/cnpj.helper';
import PDFDocument from 'pdfkit';

export type imprimirDocumentoDeVisitaInput = {
  cliente: cliente;
  responsavel: responsavel;
  observacao: string;
  cnpj?: string;
  telefones?: Array<string>;
  emails?: Array<string>;
  recursos?: Array<recurso>;
};
export const imprimirDocumentoDeVisita = (
  doc: typeof PDFDocument,
  { cliente, cnpj, responsavel, recursos, telefones, emails, observacao }: imprimirDocumentoDeVisitaInput
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

  if (recursos?.length) {
    doc.font('Helvetica-Bold');
    doc.text('Recursos:', { continued: true });
    doc.font('Helvetica', 'normal');
    recursos.forEach((recurso) => {
      doc.text(pdfRecursosEmpresaHelper(recurso));
    });
  }

  doc.font('Helvetica-Bold');
  doc.text('Observações:', { continued: true });
  doc.font('Helvetica', 'normal');
  doc.text(observacao);
};
