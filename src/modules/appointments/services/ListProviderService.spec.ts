import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUserRepository';
import ListProviderService from './ListProviderService';

let fakeUsersRepository: FakeUsersRepository;
let listProviders: ListProviderService;

describe('ListProvider', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    listProviders = new ListProviderService(fakeUsersRepository);
  });

  it('should be able to list the providers', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'Jhon Doe',
      email: 'jhondoe@example.com',
      password: '123456',
    });

    const user2 = await fakeUsersRepository.create({
      name: 'Jhon Trê',
      email: 'jhontre@example.com',
      password: '123456',
    });

    const loggedUser = await fakeUsersRepository.create({
      name: 'Jhon Qua',
      email: 'jhonqua@example.com',
      password: '123456',
    });

    const providers = await listProviders.execute({
      user_id: loggedUser.id,
    });

    expect(providers).toEqual([user1, user2]);
  });
});
