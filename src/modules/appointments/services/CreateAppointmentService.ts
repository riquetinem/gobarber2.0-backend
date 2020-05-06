import { startOfHour } from 'date-fns';

import AppError from '@shared/errors/AppError';

import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';

interface IRequest {
  provider_id: string;
  date: Date;
}

// SOLID
// # S - Single Responsability Principle
// O - Open Closed Principle
// # L - Liskov Substitution Principle
// I - Interface Segregation Principle
// # D - Dependency Inversion Principle

class CreateAppointmentService {
  constructor(private appointmentsRepository: IAppointmentsRepository) {}

  // sempre que tiver uma funcao async o retorno sera uma Promise
  public async execute({ date, provider_id }: IRequest): Promise<Appointment> {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await this.appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already booked');
    }

    const appointment = await this.appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
