import { container } from 'tsyringe';

import ICacheProvider from './models/ICacheProvider';
import RedisCacheProvider from './implementations/RedisCacheProvider';

const providers = {
  redis: RedisCacheProvider,
  // quando tiver outra implementacao so adicionar ele aqui
};

container.registerSingleton<ICacheProvider>('CacheProvider', providers.redis);
