import { PdfHelper } from './helper.type';

export type recurso = {
  title: string;
  amount: number;
  measureAmount: number;
  measureUnit: { name: string };
  material: string;
  state: string;
  observation: string;
};

export const pdfRecursosEmpresaHelper: PdfHelper<recurso> = (recurso: recurso) => {
  let resourceString = `${recurso.amount} ${recurso.title} - ${recurso.measureAmount} ${recurso.measureUnit.name}`;
  if (recurso.material) {
    resourceString += ` - Material: ${recurso.material} ${recurso.state}`;
  }
  if (recurso.observation) {
    resourceString += ` - Obs: ${recurso.observation}`;
  }
  return resourceString;
};
