import { BadRequestException, Inject, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt'
import { LoginUserDto } from './dto/login-user.dto';


@Injectable()
export class AuthService {

  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>
  ) { }

  async create(createUserDto: CreateUserDto) {
    try {
      const { password, ...userData } = createUserDto
      const user = await this.userModel.create({
        ...userData,
        password: bcrypt.hashSync(password, 10)
      })
      return user
    } catch (error) {
      this.handleExceptions(error)
    }

  }

  async login(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto
    const user = await this.userModel
      .findOne({ email })
      .select('email password')
    if (!user)
      throw new UnauthorizedException('Las Credenciales no son validas (email)')

    if (!bcrypt.compareSync(password, user.password))
      throw new UnauthorizedException('Las Credenciales no son validas (password)')
    return {
      email: user.email,
      password: user.password
    }
  }




  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(`El campo ya existe en BD ${JSON.stringify(error.keyValue)}`)
    }
    console.log(error)
    throw new InternalServerErrorException(`No se puede prosesar la solicitud: Consulte los registros del servidor`)
  }
}
