import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { VideosService } from './videos.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('videos')
@ApiTags('videos')
@UsePipes(new ValidationPipe())
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  /*@Post()
  create(@Body() createVideoDto: CreateVideoDto) {
    return this.videosService.create(createVideoDto);
  }*/

  @Post()
  create(@Body() createVideoDto : CreateVideoDto) {
    console.log(createVideoDto);
    
    
    return 'hola';
    //return this.videosService.create(body);
  }

  @Get()//TODO http://localhost:3000/videos?id=1&description=samuel queries params
  findAll(@Query('id') query : string) {
    console.log(query);
    
    return this.videosService.findAll();
  }

  @Get(':id')//TODO http://localhost:3000/videos?samuel params
  findOne(@Param('id') id: string) {
    return this.videosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVideoDto: UpdateVideoDto) {
    return this.videosService.update(+id, updateVideoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videosService.remove(+id);
  }
}
