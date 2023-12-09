// eslint-disable-next-line prettier/prettier
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TarefaDTO } from './tarefa.dto';
import { TarefaService } from './tarefa.service';

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

  @Get('completed')
  async readAllCompleted() {
    return this.tarefaService.readAllCompleted();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: TarefaDTO) {
    const tarefaId = parseInt(id, 10);
    return this.tarefaService.update(tarefaId, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const tarefaId = parseInt(id, 10);
    return this.tarefaService.delete(tarefaId);
  }

  @Delete('deleteCompleted')
  async deleteAll() {
    return this.tarefaService.deleteAll();
  }
}
