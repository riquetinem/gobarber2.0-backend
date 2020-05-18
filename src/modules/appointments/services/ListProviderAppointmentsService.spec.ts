import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';

import ListProviderAppointmentsService from './ListProviderAppointmentsService';

let fakeAPpointmentsRepositroy: FakeAppointmentsRepository;
let listProviderAppointments: ListProviderAppointmentsService;

describe('ListProviderAppointments', () => {
  beforeEach(() => {
    fakeAPpointmentsRepositroy = new FakeAppointmentsRepository();
    listProviderAppointments = new ListProviderAppointmentsService(
      fakeAPpointmentsRepositroy,
    );
  });

  it('should be able to list the appointments on a specific day', async () => {
    const appointment1 = await fakeAPpointmentsRepositroy.create({
      user_id: 'user',
      provider_id: 'provider',
      date: new Date(2020, 4, 20, 14, 0, 0),
    });

    const appointment2 = await fakeAPpointmentsRepositroy.create({
      user_id: 'user',
      provider_id: 'provider',
      date: new Date(2020, 4, 20, 15, 0, 0),
    });

    const appointments = await listProviderAppointments.execute({
      provider_id: 'provider',
      year: 2020,
      month: 5,
      day: 20,
    });

    expect(appointments).toEqual([appointment1, appointment2]);
  });
});
