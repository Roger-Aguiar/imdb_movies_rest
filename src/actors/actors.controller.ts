import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ActorsService } from './actors.service';
import { ActorDto } from './dto/actor.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('actors')
export class ActorsController 
{
  constructor(private readonly actorsService: ActorsService) {}

  @Post()
  @ApiTags('Actors')
  create(@Body() actorDto: ActorDto) 
  {
    return this.actorsService.create(actorDto);
  }

  @Get()
  @ApiTags('Actors')
  readAll() 
  {
    return this.actorsService.readAll();
  }

  @Get(':id')
  @ApiTags('Actors')
  readOne(@Param('id') id: string) 
  {
    return this.actorsService.readOne(+id);
  }

  @Put(':id')
  @ApiTags('Actors')
  update(@Param('id') id: string, @Body() actorDto: ActorDto) 
  {
    return this.actorsService.update(+id, actorDto);
  }

  @Delete(':id')
  @ApiTags('Actors')
  delete(@Param('id') id: string) 
  {
    return this.actorsService.delete(+id);
  }
}
