import { content } from './infra.types';
import blobStream from 'blob-stream';
import PDFDocument from 'pdfkit';

export function pdfKitWebWrapper<T>(content: content, args: T): void {
  const doc = new PDFDocument();
  const chunks:any[] = [];
  const stream = doc.pipe(blobStream());
  doc.pipe(stream);

  content(doc, args);

  stream.on('finish', function () {
    const blob = new Blob(chunks, { type: 'application/pdf' });

    // Criar um URL do Blob
    const blobUrl = URL.createObjectURL(blob);

    // Criar um link para fazer o download
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = 'documento.pdf';

    // Adicionar o link ao corpo do documento e clicar nele para iniciar o download
    document.body.appendChild(link);
    link.click();

    // Remover o link e revogar o URL do Blob após o download
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
    console.log(link)
  });

  stream.on('data', (chunk) => {
    chunks.push(chunk);
  });
  doc.end();
}
