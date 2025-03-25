import { Module } from '@nestjs/common';
import { PostAllService } from './post-all.service';
@Module({
    providers: [PostAllService],
    exports:[PostAllService]
})
export class PostAllModule {}
