import { Body, Controller, Get, Post } from '@nestjs/common';
import { notification } from '@prisma/client';
import { randomUUID } from 'node:crypto';
import { CreateNotification } from './create-notification';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotification) {
    const { content, category, recipiendId } = body;

    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipiendId,
      },
    });
  }

  // app.post('/' (req, res) => {
  //   const {content, category, recipiendId} = req.body
  // })

  @Get('/secret')
  getSecret(): string {
    return 'How did you find that? thats a secret tophic. Keep moving';
  }
}
