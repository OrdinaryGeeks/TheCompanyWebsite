import { SignInRequest } from './sign-in-request.model';

describe('SignInRequest', () => {
  it('should create an instance', () => {
    let Email: string = "go@go.com";

    let Password: string = "fake1";
    expect(new SignInRequest(Email, Password)).toBeTruthy();
  });
});
