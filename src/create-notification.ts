import { IsNotEmpty } from 'class-validator';

export class CreateNotification {
  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  recipiendId: string;
}
