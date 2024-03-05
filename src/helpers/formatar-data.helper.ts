import * as dayjs from 'dayjs';
import { PdfHelper } from './helper.type';

export const pdfFormatarDataHelper: PdfHelper<string | Date> = (data: string | Date) => {
  return dayjs(data).format('DD/MM/YYYY');
};
