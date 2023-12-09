// eslint-disable-next-line prettier/prettier
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TagDTO } from './tag.dto';
import { TagService } from './tag.service';

@Controller('tags')
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

  @Get(':id')
  async readAllTag(@Param('id') id: string) {
    const tagId = parseInt(id, 10);
    return this.tagService.readAllTag(tagId);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: TagDTO) {
    const tagId = parseInt(id, 10);
    return this.tagService.update(tagId, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const tagId = parseInt(id, 10);
    return this.tagService.delete(tagId);
  }
}
