import { container } from 'tsyringe';

import IMailProvider from './models/IMailProvider';
import EtherealMailProvider from './implementations/EtherealMailProvider';

const providers = {
  ethereal: container.resolve(EtherealMailProvider),
  // quando tiver outra implementacao so adicionar ele aqui
};

container.registerInstance<IMailProvider>('MailProvider', providers.ethereal);
