import { AuthGuard } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";

/**
 * Guard used to validate the JWT token (so for authenticated user)
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') { }