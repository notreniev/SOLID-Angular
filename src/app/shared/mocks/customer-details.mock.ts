import { CustomerDetail } from '../../features/domains/customer/models/customer.model';

export const customerDetailsMock = (): CustomerDetail[] => {
  return [
    {
      address: 'Address 1, Nº1',
      city: 'City 1',
      state: 'State 1',
      customerId: '1',
    },
    {
      address: 'Address 2, Nº2',
      city: 'City 2',
      state: 'State 2',
      customerId: '2',
    },
    {
      address: 'Address 3, Nº3',
      city: 'City 3',
      state: 'State 3',
      customerId: '3',
    },
    {
      address: 'Address 4, Nº4',
      city: 'City 4',
      state: 'State 4',
      customerId: '4',
    },
    {
      address: 'Address 5, Nº5',
      city: 'City 5',
      state: 'State 5',
      customerId: '5',
    },
    {
      address: 'Address 6, Nº6',
      city: 'City 6',
      state: 'State 6',
      customerId: '6',
    },
  ];
};
