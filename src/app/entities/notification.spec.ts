import { Content } from './content';
import { Notification } from './notification';

describe('notification', () => {
  test('it should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Heelo everyone'),
      // createdAt: new Date(),
      category: 'sports',
      recipiendId: '121212',
    });

    expect(notification).toBeTruthy();
  });
});
