import { Injectable } from '@nestjs/common';

@Injectable()
export class PostAllService {

    private readonly message : string = `postAllService called`;

    getMessega(){
        return this.message;
    }

}
