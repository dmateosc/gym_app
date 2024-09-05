import { UserService } from '../application/user.service';
import { UserRepository } from '../domain/user.repository/user.repository';

function UserRepositoryMock(): UserRepository {
  return {
    create: jest.fn().mockReturnValue(Promise.resolve()),
    findAll: jest.fn().mockReturnValue(Promise.resolve()),
    findOne: jest.fn().mockReturnValue(Promise.resolve()),
    update: jest.fn().mockReturnValue(Promise.resolve()),
    remove: jest.fn().mockReturnValue(Promise.resolve()),
  };
}

describe('UserService', () => {
  let service: UserService;

  it('should be defined', () => {
    //Arrange
    const repositoryMock = UserRepositoryMock();
    //Act
    service = new UserService(repositoryMock);
    //Assert
    expect(service).toBeDefined();
  });
});
