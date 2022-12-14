import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

const NotificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

const notifications: Notification[] = [];

test('it should be able to send a new message', async () => {
  const sendNotification = new SendNotification(NotificationsRepository);

  await sendNotification.execute({
    category: 'social',
    content: 'your message has been delivered',
    recipiendId: 'dfljksdfjkljklsdf',
  });

  console.log(notifications);
  expect(notifications).toHaveLength(1);
});
