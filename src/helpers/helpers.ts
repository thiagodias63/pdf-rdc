// findOwner(quotation: Quotation): CompanyOwner | null {
//     const owner = quotation?.company?.owners?.find((owner) => !!owner.isHead);
//     return owner || null;
// }

// export const registerPhoneHelper(): void {

//       // const owner = quotation?.company?.owners?.find((owner) => !!owner.isHead);
//       const owner = this.findOwner(quotation);
//       const phones = owner?.owner.phones;
//       let phoneString = '';
//       phones?.forEach((phone, index) => {
//         phoneString += phoneTransform(phone.phone);
//         phoneString += index == phones.length - 2 ? 'e' : ',';
//       });
//       return phoneString;
//   }

//   export const registerEmailHelper(): void {

//       // const owner = quotation?.company?.owners?.find((owner) => !!owner.isHead);
//       const owner = this.findOwner(quotation);
//       const emails = owner?.owner.emails;
//       let emailstring = '';
//       emails?.forEach((email, index) => {
//         emailstring += email.email.toLowerCase();
//         emailstring += index == emails.length - 2 ? 'e' : ',';
//       });
//       return emailstring;
//   }

//   export const servicesQuotationHelper(): void {

//       if (!service) return;

//       let servicesString = '';
//       let measureUnit = '';
//       if (service?.measureUnit && service?.measureUnit.isPrintable) {
//         measureUnit = service?.measureUnit?.initials;
//       }

//       const serviceName = service.service.resume;
//       // service.service?.resume.length <= this.maxResumeLength
//       //   ? service.service.resume
//       //   : service.service.resume.slice(0, this.maxResumeLength);
//       servicesString += `${service.amount} `;
//       servicesString += `${serviceName} ${service?.serviceMeasureAmount}`;
//       servicesString += `${measureUnit} `;
//       // servicesString += `${Price.format(service?.price)} cada`;
//       return servicesString;
//   }

//   export const secondProposalServicesQuotationHelper(): void {

//       'secondProposalServicesQuotation',
//       (service: SaleService) => {
//         if (!service || !service.showInSecondQuotation) return;

//         let servicesString = '';
//         servicesString += `${service.service.secondName}
//         (
//           ${service.frequency}
//           ${service.frequency > 1 ? 'vezes' : 'vez'} ao ano
//         )
//         `;
//         // ${Price.format(
//         //   Number(service.price) * Number(service.amount) * Number(service.frequency)
//         // )} cada
//         return servicesString;
//       }
//     );
//   }

//   export const clientNameQuotationHelper(): void {

//       // return `${quotation?.companyId} - ${quotation?.company?.type} ${quotation?.company?.name}`;
//       return `${quotation?.company?.old_id} - ${quotation?.company?.type} ${quotation?.company?.name}`;
//   }

//   export const clientCnpjHelper(): void {

//       return (
//         quotation?.company?.cnpj?.replace(
//           /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
//           '$1.$2.$3/$4-$5'
//         ) || ''
//       );
//   }

//   export const ownerNameHelper(): void {

//       // const owner = quotation?.company?.owners?.find((owner) => !!owner.isHead);
//       const owner = this.findOwner(quotation);
//       return `${owner?.owner.name} ${owner?.role ? `(${owner.role})` : ''}`;
//   }

//   export const companyAddressHelper(): void {

//       const address = `${company.address},
//       ${company.addressNumber},
//       ${company.neighborhood}`;
//       const apartments = company?.amountApartments
//         ? ` - ${company?.amountApartments} ${
//             company?.amountApartments > 1 ? 'apartamentos' : 'apartamento'
//           } `
//         : '';
//       return address + apartments;
//   }

//   export const companyAddressForServiceRequestHelper(): void {

//       'companyAddressForServiceRequest',
//       (company: Company) => {
//         const address = `${company.address},
//       ${company.addressNumber},
//       ${company.neighborhood}`;
//         let apartments = company?.cep ? ` - CEP: ${company?.cep}` : '';
//         apartments += company?.apartmentNumber ? ` - apto: ${company?.apartmentNumber}` : '';
//         apartments += company?.apartmentBlock ? ` - bloco: ${company?.apartmentBlock}` : '';
//         apartments += company?.amountApartments
//           ? ` - apartamentos: ${company?.amountApartments}`
//           : '';

//         return address + apartments;
//       }
//     );
//   }

//   export const validationHelper(): void {

//       return validation + ' dias';
//   }

//   export const clientNameByEmailHelper(): void {

//       'clientNameByEmail',
//       (email: { email: string; owner: string }) => {
//         return email.owner;
//       }
//     );
//   }

//   export const actualDateHelper(): void {

//       return dayjs().format('DD/MM/YYYY');
//   }

//   export const servicesRequestHelper(): void {

//       if (!service) return;

//       let servicesString = '';
//       const hours = Hour.formatHour(service.hour);
//       servicesString += `Dia ${dayjs(service.day).format('DD/MM/YYYY')}. `;
//       servicesString += `Hora ${hours}. `;
//       servicesString += `Valor ${Price.format(service.price)} cada.`;

//       return servicesString;
//   }

//   export const servicesRequestValueHelper(): void {

//       if (!service) return;

//       let servicesString = '';
//       servicesString += ` ${Price.format(service.price)} cada.`;

//       return servicesString;
//   }

//   export const secondServicesRequestValueHelper(): void {

//       if (!service || !service.showInSecondQuotation) return;

//       let servicesString = '';
//       servicesString += ` ${Price.format(
//         Number(service.price) * Number(service.amount) * Number(service.frequency)
//       )} cada.`;
//       return servicesString;
//   }

//   export const companyResourcesHelper(): void {

//       const { company } = quotation;
//       if (!company || !company?.resources) return [];
//       return company?.resources;
//   }

//   export const resourceHelper(): void {

//       if (!resource) return;

//       const { title, amount, measureAmount, measureUnit, material, state, observation } = resource;
//       let resourceString = `${amount} ${title} - ${measureAmount} ${measureUnit.name}`;
//       if (material) {
//         resourceString += ` - Material: ${material} ${state}`;
//       }
//       if (observation) {
//         resourceString += ` - Obs: ${observation}`;
//       }
//       return resourceString;
//   }

//   export const validDateHelper(): void {

//       return dayjs(quotation.expiration).format('DD/MM/YYYY');
//   }

//   export const currentDateHelper(): void {

//       return dayjs().format('DD/MM/YYYY');
//   }

//   export const totalQuotationHelper(): void {

//       return Price.format(quotation.totalPrice);
//   }

//   export const totalWithFrequencyHelper(): void {

//       let total = 0;
//       quotation.services.forEach((service) => {
//         if (!service.showInSecondQuotation) return;
//         total += Number(service.price) * Number(service.amount) * Number(service.frequency);
//       });
//       return Price.format(+total.toFixed(2));
//   }

//   export const totalWithFrequencyDividedByMonthsHelper(): void {

//       'totalWithFrequencyDividedByMonths',
//       (quotation: Quotation) => {
//         let total = 0;
//         quotation.services.forEach((service) => {
//           if (!service.showInSecondQuotation) return;
//           total += Number(service.price) * Number(service.amount) * Number(service.frequency);
//         });
//         return Price.format(+(total / 12).toFixed(2));
//       }
//     );
//   }

//   export const quotationCompanyObservationHelper(): void {

//       return quotation.company.observation;
//   }

//   export const userSaleHelper(): void {

//       return quotation?.userCreate?.name || 'Sergio';
//   }
