import { Injectable } from '@nestjs/common';
import { ActorDto } from './dto/actor.dto';

@Injectable()
export class ActorsService 
{
  date = new Date();
  create(actorDto: ActorDto) 
  {     
    return {
      name: actorDto.name,
      actor: actorDto.actor,
      producer: actorDto.producer,
      director: actorDto.director,
      born: actorDto.born,
      country: actorDto.country,
      imdbLink: actorDto.imdbLink,
      createdAt: `${this.date.getMonth()}/${this.date.getDate()}/${this.date.getFullYear()}`,
      lastUpdate: `${this.date.getMonth()}/${this.date.getDate()}/${this.date.getFullYear()}`
    };
  }

  readAll() 
  {
    return `This action returns all actors`;
  }

  readOne(id: number) 
  {
    return `This action returns a #${id} actor`;
  }

  update(id: number, actorDto: ActorDto) 
  {
    return `This action updates a #${id} actor`;
  }

  delete(id: number) 
  {
    return `This action removes a #${id} actor`;
  }
}
