import { Content } from './content';

describe('notification content', () => {
  test('it should be able to create a notification content', () => {
    const content = new Content('Your account has been created');

    expect(content).toBeTruthy();
  });

  test('it should not be able to create a notification content with less than 5 characters', () => {
    const content = () => new Content('You');

    expect(content).toThrowError();
  });

  test('it should not be able to create a notification content greater than 340 characters', () => {
    const content = () => new Content('1'.repeat(345));

    expect(content).toThrowError();
  });
});
