export interface NotificationProps {
  recipiendId: string;
  content: string;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private props: NotificationProps;

  constructor(props: NotificationProps) {
    this.props = props;
  }

  public set recipiendId(recipiendId: string) {
    this.props.recipiendId = recipiendId;
  }

  public get recipiendId(): string {
    return this.props.recipiendId;
  }

  public set content(content: string) {
    this.props.content = content;
  }

  public get content(): string {
    return this.props.content;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}