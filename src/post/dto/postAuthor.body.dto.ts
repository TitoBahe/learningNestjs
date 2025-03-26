import { IsInt, IsString, Max, MaxLength, Min, MinLength, NotEquals } from "class-validator";

export class postAuthorDto{
     @IsString()	
     @NotEquals("tito")
     name : string;

     @Min(10)
     @Max(20)
     @IsInt()
     age : number;

     @MaxLength(1)
     sex : string;

     obj: JSON;
}