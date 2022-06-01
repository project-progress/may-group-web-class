import {
    Body,
    Controller,
    Get,
    Post,
    UploadedFile,
    UseInterceptors,
  } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { CreatePostDto } from './post-dtos/create-post.dto';
import { PostService } from './post.service';
  
@Controller('posts')
  export class PostController {
    constructor(private readonly postService: PostService) {}

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    async create(
        @UploadedFile() file: Express.Multer.File,
        @Body() createPostDto: CreatePostDto,
    ) {
        console.log('post', createPostDto);
        console.log('file', file);
    }

    
}