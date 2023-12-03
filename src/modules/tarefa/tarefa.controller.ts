// eslint-disable-next-line prettier/prettier
import { Body, Controller, Get, Post, Put, Param, Delete } from '@nestjs/common';
import { TarefaService } from './tarefa.service';
import { TarefaDTO } from './tarefa.dto';

@Controller('tarefa')
export class TarefaController {
  constructor(private readonly tarefaService: TarefaService) {}

  @Post()
  async create(@Body() data: TarefaDTO) {
    return this.tarefaService.create(data);
  }

  @Get()
  async readAll() {
    return this.tarefaService.readAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: TarefaDTO) {
    return this.tarefaService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.tarefaService.delete(id);
  }
}
