import { container } from 'tsyringe';

import IStorageProvider from './models/IStorageProvider';
import DiskStorageProvider from './implementations/DiskStorageProvider';

const providers = {
  disk: DiskStorageProvider,
  // quando tiver outra implementacao so adicionar ele aqui
};

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  providers.disk,
);
