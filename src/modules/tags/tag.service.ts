import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { TagDTO } from './tag.dto';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

  async create(data: TagDTO) {
    const tags = await this.prisma.tags.create({
      data,
    });
    return tags;
  }

  async readAll() {
    return this.prisma.tags.findMany();
  }

  async readAllTag(id: number) {
    return this.prisma.tarefa.findMany({
      where: { tagId: id },
    });
  }

  async update(id: number, data: TagDTO) {
    return await this.prisma.tags.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id) {
    await this.prisma.tarefa.updateMany({
      where: { tagId: id },
      data: { tagId: null },
    });
    return await this.prisma.tags.delete({
      where: {
        id,
      },
    });
  }
}
