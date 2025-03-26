import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import {Request} from 'express'

@Injectable()
export class GuardKey implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        
        const req : Request = context.switchToHttp().getRequest();

        if(!req?.headers?.authorization?.includes('Bearer')){
            return false;
        }
        
        return true;
    }
}