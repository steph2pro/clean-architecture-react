// src/domain/usecases/DeleteUserUseCase.ts

import { IUserRepository } from '../repositories/IUserRepository';

export class DeleteUserUseCase {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async execute(id: number): Promise<void> {
    return await this.userRepository.deleteUser(id);
  }
}
