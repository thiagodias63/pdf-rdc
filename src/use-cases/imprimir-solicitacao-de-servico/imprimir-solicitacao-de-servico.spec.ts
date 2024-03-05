import { expect, it } from 'vitest';
import {
  imprimirSolicitacaoDeServico,
  imprimirSolicitacaoDeServicoInput,
} from './imprimir-solicitacao-de-servico.facade';
import { pdfKitNodeJsWrapper } from '../../infra/pdfkit-nodejs-wrapper';

const clienteMock = {
  name: 'teste',
  old_id: '1',
  type: 'casa',
};
const responsavelMock = {
  name: 'teste',
  role: 'teste',
};

const hoje = new Date();

const servicoMock = {
  hour: '20:00',
  measureAmount: 1,
  price: 100,
  resume: 'serviço 1',
  amount: 1,
  measureUnit: {
    initials: 'UN',
    isPrintable: true,
  },
  day: hoje,
};

let servicos: any[] = [];
for (let i = 0; 1 < 10; i++) {
  servicos.push(servicoMock);
}

it('deve gerar o documento com sucesso', () => {
  pdfKitNodeJsWrapper<imprimirSolicitacaoDeServicoInput>(imprimirSolicitacaoDeServico, {
    cliente: clienteMock,
    responsavel: responsavelMock,
    endereco: {
      address: 'Rua Creciuma',
      addressNumber: 53,
      amountApartments: 1,
      apartmentBlock: '',
      apartmentNumber: '',
      cep: '30626650',
      neighborhood: '',
    },
    total: 1100,
    servicos,
    cnpj: '12174603000199',
    telefones: ['31991232829'],
    emails: ['email@teste.com'],
  });
});
