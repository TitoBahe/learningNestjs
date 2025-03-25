import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import {PostAllModule} from '../post-all/post-all.module';
@Module({
  imports: [PostAllModule],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
