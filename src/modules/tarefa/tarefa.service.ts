import { Injectable } from '@nestjs/common';
import { TarefaDTO } from './tarefa.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class TarefaService {
  constructor(private prisma: PrismaService) {}

  async create(data: TarefaDTO) {
    const atividade = await this.prisma.tarefa.create({
      data,
    });
    return atividade;
  }
}
