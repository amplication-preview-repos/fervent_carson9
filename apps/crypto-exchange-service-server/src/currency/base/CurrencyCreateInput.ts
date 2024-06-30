/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  IsNumber,
  Min,
  Max,
  ValidateNested,
} from "class-validator";
import { TransactionCreateNestedManyWithoutCurrenciesInput } from "./TransactionCreateNestedManyWithoutCurrenciesInput";
import { Type } from "class-transformer";
import { WalletCreateNestedManyWithoutCurrenciesInput } from "./WalletCreateNestedManyWithoutCurrenciesInput";

@InputType()
class CurrencyCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  symbolField?: string | null;

  @ApiProperty({
    required: false,
    type: () => TransactionCreateNestedManyWithoutCurrenciesInput,
  })
  @ValidateNested()
  @Type(() => TransactionCreateNestedManyWithoutCurrenciesInput)
  @IsOptional()
  @Field(() => TransactionCreateNestedManyWithoutCurrenciesInput, {
    nullable: true,
  })
  transactions?: TransactionCreateNestedManyWithoutCurrenciesInput;

  @ApiProperty({
    required: false,
    type: () => WalletCreateNestedManyWithoutCurrenciesInput,
  })
  @ValidateNested()
  @Type(() => WalletCreateNestedManyWithoutCurrenciesInput)
  @IsOptional()
  @Field(() => WalletCreateNestedManyWithoutCurrenciesInput, {
    nullable: true,
  })
  wallets?: WalletCreateNestedManyWithoutCurrenciesInput;
}

export { CurrencyCreateInput as CurrencyCreateInput };
