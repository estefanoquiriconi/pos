import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @Transform(({ value }: { value: string }) => value.trim())
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;
}
