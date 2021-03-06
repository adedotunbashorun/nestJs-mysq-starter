import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { UsersService } from '@ncdf/users/services/users.service';
import { User } from '@ncdf/users/entities/user.entity';

@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }

    @Get(':id')
    get(@Param() params: any) {
        return this.service.getUser(params.id);
    }

    @Post()
    create(@Body() user: User) {
      return this.service.createUser(user);
    }

    @Put()
    update(@Body() user: User) {
      return this.service.updateUser(user);
    }

    @Delete(':id')
    deleteUser(@Param() params: any) {
      return this.service.deleteUser(params.id);
    }
}