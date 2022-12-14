import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationRepository } from '../repositories/notification-repository';

interface SendNotificationRequest {
  recipiendId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotification {
  constructor(private NotificationsRepository: NotificationRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { category, content, recipiendId } = request;

    const notification = new Notification({
      category,
      content: new Content(content),
      recipiendId,
    });

    await this.NotificationsRepository.create(notification);

    return { notification };
  }
}
