import { Body, Controller, Post } from '@nestjs/common';
import { TarefaService } from './tarefa.service';
import { TarefaDTO } from './tarefa.dto';

@Controller('tarefa')
export class TarefaController {
  constructor(private readonly tarefaService: TarefaService) {}

  @Post()
  async create(@Body() data: TarefaDTO) {
    return this.tarefaService.create(data);
  }
}
