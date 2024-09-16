
import { IUserRepository } from '../repositories/IUserRepository';
import { User } from '../../data/models/User';

export class UpdateUser {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async execute(id: number, updatedData: Partial<User>): Promise<User> {
    return await this.userRepository.updateUser(id, updatedData);
  }
}
