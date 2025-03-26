import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './author/author.module';
import { PostModule } from './post/post.module';
import { PostAllService } from './post-all/post-all.service';
import { PostAllModule } from './post-all/post-all.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [AuthorModule, PostModule, PostAllModule, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, PostAllService],
})
export class AppModule {}
