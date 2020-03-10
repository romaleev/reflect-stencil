import { validate } from './utils';

const validInput = {
  name: 'Roman M',
  email: 'test@example.com',
  message: 'Hello'
}

describe('validate', () => {
  it('input data is empty or contain empty values', () => {
    expect(validate({ name: '', email: '', message: '' })).toBeFalsy();
  });

  it('input data is correct', () => {
    expect(validate(validInput)).toBeTruthy();
  });

  it('input Name is invalid', () => {
    expect(validate({ ...validInput, name: ''})).toBeFalsy();
    expect(validate({ ...validInput, name: 'Roman M1'})).toBeFalsy();
    expect(validate({ ...validInput, name: 'R'.repeat(30)})).toBeTruthy();
    expect(validate({ ...validInput, name: 'R'.repeat(31)})).toBeFalsy();
  });

  it('input Email is invalid', () => {
    expect(validate({ ...validInput, email: ''})).toBeFalsy();
    expect(validate({ ...validInput, email: 'testexample.com'})).toBeFalsy();
    expect(validate({ ...validInput, email: 'test@example'})).toBeFalsy();
    expect(validate({ ...validInput, email: 'test@example.'})).toBeFalsy();
    expect(validate({ ...validInput, email: '@example.com'})).toBeFalsy();

  });

  it('input Message is invalid', () => {
    expect(validate({ ...validInput, message: ''})).toBeFalsy();
    expect(validate({ ...validInput, message: '1\\nd'})).toBeTruthy();
    expect(validate({ ...validInput, message: 'R'.repeat(500)})).toBeTruthy();
    expect(validate({ ...validInput, message: 'R'.repeat(501)})).toBeFalsy();
  });
});