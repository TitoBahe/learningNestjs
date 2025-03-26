import { Injectable, Logger } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class PostService {

  private readonly logger = new Logger(PostService.name);

  create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  @Cron(CronExpression.EVERY_10_SECONDS, {name:'cronJob'})
  findAll() {
    this.logger.debug('cron called');
    return `This action returns all post`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
