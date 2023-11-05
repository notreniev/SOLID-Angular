import { Customer } from '../../features/domains/customer/models/customer.model';
export const customerListMock = (): Customer[] => {
  return [
    {
      uid: '1',
      name: 'Monica Geller',
      email: 'mgeller@email.com',
      phone: '555-4444',
    },
    {
      uid: '2',
      name: 'Rachel Green',
      email: 'rgreen@email.com',
      phone: '555-5555',
    },
    {
      uid: '3',
      name: 'Phoebe Buffay',
      email: 'pbuffay@email.com',
      phone: '555-6666',
    },
    {
      uid: '4',
      name: 'Joe Tribbiani',
      email: 'jtribbiani@email.com',
      phone: '555-7777',
    },
    {
      uid: '5',
      name: 'Chandler Bing',
      email: 'chandelier@email.com',
      phone: '555-8888',
    },
    {
      uid: '6',
      name: 'John Doe',
      email: 'johndoe@email.com',
      phone: '555-1234',
    },
  ];
};
