import { Role } from './role.model';

describe('Role', () => {
  it('should create an instance', () => {

    let id: number = 0;
    let roleName: string = "user";
    expect(new Role(id, roleName)).toBeTruthy();
  });
});
