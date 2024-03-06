import { pdfKitWebWrapper } from './infra/pdfkit-web-wrapper';
import { imprimirDocumentoDeVisita, imprimirDocumentoDeVisitaInput } from './use-cases/imprimir-documento-de-visita/imprimir-documento-de-visita.facade';

export class PdfImprimirDocumentoDeVisita {
    static imprimir(input: imprimirDocumentoDeVisitaInput):void {
        pdfKitWebWrapper(imprimirDocumentoDeVisita, input)
    }
}