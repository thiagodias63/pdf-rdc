// import { expect, test } from 'vitest';
// import {
//   imprimirDocumentoDeVisita,
//   imprimirDocumentoDeVisitaInput,
// } from './imprimir-documento-de-visita.facade';
// import { pdfKitNodeJsWrapper } from '../../infra/pdfkit-nodejs-wrapper';

// const clienteMock = {
//   name: 'teste',
//   old_id: '1',
//   type: 'casa',
// };
// const responsavelMock = {
//   name: 'teste',
//   role: 'teste',
// };

// test('deve gerar o "documento de visita" com sucesso', () => {
//   pdfKitNodeJsWrapper<imprimirDocumentoDeVisitaInput>(imprimirDocumentoDeVisita, {
//     cliente: clienteMock,
//     responsavel: responsavelMock,
//     observacao: 'Observação 1',
//     cnpj: '12174603000199',
//     telefones: ['31991232829'],
//     emails: ['email@teste.com'],
//   });
//   expect(true).toEqual(true);
// });
