import { Injectable } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import { User } from "./schemas/users.schema";

@Injectable()
export class UsersService {

    users: User[] = [
        {email: "test", password: "test"}
    ];

    constructor(private jwtService: JwtService) {}

    async find(email: string): Promise<User> {
        return this.users.find(u => u.email === email);;
    }

    async login(user: User) {
        const payload = { email: user.email };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async validate(email: string, password: string): Promise<User> {
        let user = await this.find(email);
        if (user && user.password === password) {
            return user;
        }
        return null;
    }
}