import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Query, HttpException, HttpStatus, Catch, Logger, UseGuards } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {postAuthorDto} from './dto/postAuthor.body.dto';
import {allPosts} from './dto/getAllPosts.query.dto';
import { PostAllService } from '../post-all/post-all.service';
import { GuardKey } from './guard/api-key.guard';

//olhar catch handlers 
@UseGuards(GuardKey)
@Controller('post') 
export class PostController {

  private readonly logger = new Logger(PostController.name);
  constructor(private readonly postService: PostService, private postAllService : PostAllService) {}

  @Post()
  postAuthor(@Body() body: postAuthorDto){
    this.logger.warn(body)
    this.postService.findAll();
    return `Name: ${body.name} Age: ${body.age} Sex: ${body.sex}`
  }

  @Post('postAll')
  postAll(){
    return this.postAllService.getMessega();
  }

  @Get('allPosts')
  getAllPosts(@Query() queryObj: allPosts){
    if(!queryObj.limit || !queryObj.skip) throw new HttpException('missing data', HttpStatus.FORBIDDEN);
    return `${queryObj.limit} and ${queryObj.skip}`;
  }

  @Get(':postId')
  getAuthor(@Param('postId') postId : string){
    if(!postId) throw new HttpException('missing data', HttpStatus.BAD_REQUEST);
    return `user is ${postId}`;
  }
}
