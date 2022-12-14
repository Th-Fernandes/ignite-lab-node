export class Content {
  private readonly content: string;

  constructor(content: string) {
    const isContenLengthValid = this.validateContentLength(content);

    if (!isContenLengthValid) throw new Error('content length erro');

    this.content = content;
  }

  private validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length < 340;
  }

  get value() {
    return this.value;
  }
}
