import { ApiProperty } from '@nestjs/swagger';

export class ActorDto 
{        
    @ApiProperty()
    idActor: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    actor: number;

    @ApiProperty()
    producer?: number;

    @ApiProperty()
    director?: number;

    @ApiProperty()
    born?: string;

    @ApiProperty()
    country?: string;

    @ApiProperty()
    imdbLink: string;

    @ApiProperty()
    createdAt: string;

    @ApiProperty()
    lastUpdate?: Date;
}
