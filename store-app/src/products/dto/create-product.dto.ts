import { Type } from "class-transformer"
import { IsArray, IsDate, IsInt, IsMongoId, IsNumber, IsPositive, IsString, Min, MinLength } from "class-validator"

export class CreateProductDto {
  @IsString()
  @MinLength(1)
  name: string
  @Type(() => Date)
  @IsDate()
  product_date: Date
  @Type(() => Date)
  @IsDate()
  expiration_date: Date
  @IsInt()
  @Min(1)
  stock: number
  @IsNumber()
  @IsPositive()
  @Min(0.1)
  price: number
  @IsArray()
  @IsString({ each: true })
  tags: string[]

  //user_id
  @IsMongoId()
  user_id: string
}
