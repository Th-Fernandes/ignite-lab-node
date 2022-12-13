import { MailService } from './mail.service';

export class STMPMail implements MailService {
  sendEmail(): string {
    return 'email sended';
  }
}
