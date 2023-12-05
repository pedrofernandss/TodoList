// eslint-disable-next-line prettier/prettier
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TagDTO } from './tag.dto';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post()
  async create(@Body() data: TagDTO) {
    return this.tagService.create(data);
  }

  @Get()
  async readAll() {
    return this.tagService.readAll();
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: TagDTO) {
    return this.tagService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.tagService.delete(id);
  }
}
