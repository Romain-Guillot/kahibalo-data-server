import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users.service';
import { User } from '../schemas/users.schema';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private userService: UsersService) {
        super({
            usernameField: "email", 
            passwordField: 'password'
        });
    }
  
    async validate(email: string, password: string): Promise<User> {
        const user = await this.userService.validate(email, password);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}