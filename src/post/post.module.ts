import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import {PostAllModule} from '../post-all/post-all.module';
import {GuardKey} from './guard/api-key.guard';
@Module({
  imports: [PostAllModule],
  controllers: [PostController],
  providers: [PostService, GuardKey],
})
export class PostModule {}
