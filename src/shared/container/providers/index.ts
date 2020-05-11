import { container } from 'tsyringe';

import iStorageProvider from './StorageProvider/models/IStorageProvider';
import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';

import IMailProvider from './MailProvider/models/IMailProvider';
import EtherealMailProvider from './MailProvider/implementations/EtherealMailProvider';

container.registerSingleton<iStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);

container.registerInstance<IMailProvider>(
  'EtherealMailProvider',
  new EtherealMailProvider(),
);
