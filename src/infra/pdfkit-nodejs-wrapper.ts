import PDFDocument from 'pdfkit';
import { content } from './infra.types';

export function pdfKitNodeJsWrapper<T>(content: content, args: T): Promise<Buffer> {
  return new Promise((resolve) => {
    const doc = new PDFDocument();
    // Stream para armazenar o conteúdo do PDF em memória
    const buffers: any[] = [];
    // Evento 'data' é chamado sempre que há dados disponíveis no stream
    doc.on('data', (chunk) => {
      buffers.push(chunk);
    });
    // Evento 'end' é chamado quando a geração do PDF está concluída
    doc.on('end', () => {
      // Juntar os buffers em um único Buffer
      const pdfBuffer = Buffer.concat(buffers);

      resolve(pdfBuffer);
    });

    content(doc, args);

    doc.end();
  });
}

// const fs = require('fs');

// export function pdfKitNodeJsWrapper<T>(content: content, filePath: string, args: T): void {
//   const doc = new PDFDocument();
//   const writeStream = fs.createWriteStream(filePath);
//   doc.pipe(writeStream);

//   content(doc, args);

//   writeStream.on('finish', () => {
//     // Configurar cabeçalhos para forçar o download do arquivo
//     const stat = fs.statSync(filePath);
//     const fileSize = stat.size;

//     const fileStream = fs.createReadStream(filePath);

//     fileStream.on('open', () => {
//       // Configurar cabeçalhos para forçar o download do arquivo
//       const headers = {
//         'Content-Type': 'application/pdf',
//         'Content-Disposition': `attachment; filename=documento.pdf`,
//         'Content-Length': fileSize,
//       };

//       // Enviar os cabeçalhos
//       console.log(headers);

//       // Enviar o arquivo como resposta
//       fileStream.pipe(process.stdout); // Substitua process.stdout pelo stream do cliente

//       // Remover o arquivo temporário após o envio
//       fileStream.on('end', () => {
//         fs.unlinkSync(filePath);
//       });
//     });
//   });

//   doc.end();
// }
