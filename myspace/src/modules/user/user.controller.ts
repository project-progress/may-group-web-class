import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Delete,
  Put,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './user-dtos/create-user.dto';
import { User } from './user-dtos/user';
import { UpdateUserDto } from './user-dtos/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const generatedId = await this.userService.createUser(createUserDto);
      return { id: generatedId };
    } catch (error) {
      throw new HttpException(error, HttpStatus.FORBIDDEN);
    }
  }
  @Get()
  async getAllUsers(): Promise<User[]> {
    return await this.userService.getUsers();
  }
  @Get(':id')
  async getUser(@Param('id') userId: string): Promise<User> {
    return await this.userService.getUserById(userId);
  }
  @Delete(':id')
  async remove(@Param('id') userId: string): Promise<void> {
    this.userService.remove(userId);
  }
  @Put(':id')
  async update(
    @Param('id') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.userService.update(userId, updateUserDto);
  }
}
