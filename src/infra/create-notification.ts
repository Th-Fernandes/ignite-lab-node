import { IsNotEmpty, Length, IsUUID } from 'class-validator';

export class CreateNotification {
  @IsNotEmpty()
  @Length(5, 340)
  content: string;

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  @IsUUID()
  recipiendId: string;
}
