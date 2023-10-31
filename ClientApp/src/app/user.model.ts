export class User {

  phoneNumber: string;
  email: string;
  userName: string;
  password: string;
  id: number;
  constructor(PhoneNumber: string, Email: string, UserName: string, Password: string) {

    this.phoneNumber = PhoneNumber;
    this.email = Email;
    this.userName = UserName;
    this.password = Password;
    this.id = -1;

  }

}
