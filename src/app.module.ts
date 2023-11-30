import { Module } from '@nestjs/common';
import { TarefaModule } from './modules/tarefa/tarefa.module';

@Module({
  imports: [TarefaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
