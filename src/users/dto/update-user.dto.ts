import { IsNotEmpty, IsNumberString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { Exclude } from 'class-transformer';
import {
  NAME_MUST_NOT_EMPTY,
  PASSWORD_MUST_NOT_EMPTY,
  PASSWORD_NOT_STRONG,
  ROLE_MUST_NOT_EMPTY,
  ROLE_MUST_NUMBER,
} from 'src/utils/messageConstants';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @Exclude()
  email?: string;

  @Exclude()
  password?: string;

  @IsNotEmpty({ message: NAME_MUST_NOT_EMPTY })
  name: string;

  @IsNumberString({}, { message: ROLE_MUST_NUMBER })
  @IsNotEmpty({ message: ROLE_MUST_NOT_EMPTY })
  roleId: number;
}
