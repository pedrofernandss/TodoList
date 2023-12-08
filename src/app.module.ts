import { Module } from '@nestjs/common';
import { TarefaModule } from './modules/tarefa/tarefa.module';
import { TagModule } from './modules/tags/tag.module';

@Module({
  imports: [TarefaModule, TagModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
