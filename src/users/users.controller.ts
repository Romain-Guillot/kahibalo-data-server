import { Controller, Get, Post, UseGuards, Req } from "@nestjs/common";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { UsersService } from "./users.service";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";

@Controller("authentication")
export class UsersController {

    constructor(private usersService: UsersService) { }

    /**
     * Invoked only if the email/password couple provided in the post request 
     * has been validated.
     * The verification process is handled by the LocalAuthGuard.
     */
    @Post()
    @UseGuards(LocalAuthGuard)
    login(@Req() req: any) {
        return this.usersService.login(req.user);
    }


    @Get()
    @UseGuards(JwtAuthGuard)
    index(@Req() req: any) {
        return req.user;
    }
}