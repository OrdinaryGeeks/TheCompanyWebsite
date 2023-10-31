import { User } from './user.model';

describe('User', () => {
  it('should create an instance', () => {
    let phoneNumber: string = "1112223333";
    let password: string = "fake1";
    let id: number = 0;
    let email: string = "fake@fake.com";
    let userName: string = "fakeUser";

    expect(new User(phoneNumber, email, userName, password)).toBeTruthy();
  });
});
