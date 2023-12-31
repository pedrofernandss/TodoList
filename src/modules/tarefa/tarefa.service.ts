import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { TarefaDTO } from './tarefa.dto';

@Injectable()
export class TarefaService {
  constructor(private prisma: PrismaService) {}

  async create(data: TarefaDTO) {
    const atividade = await this.prisma.tarefa.create({
      data,
    });
    return atividade;
  }

  async readAll() {
    return this.prisma.tarefa.findMany();
  }

  async readAllCompleted() {
    return this.prisma.tarefa.findMany({
      where: {
        realizado: true,
      },
    });
  }

  async update(id: number, data: TarefaDTO) {
    return await this.prisma.tarefa.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id) {
    return await this.prisma.tarefa.delete({
      where: {
        id,
      },
    });
  }

  async deleteAll() {
    return await this.prisma.tarefa.deleteMany({
      where: {
        realizado: true,
      },
    });
  }
}
