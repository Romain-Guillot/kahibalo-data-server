import { AuthGuard } from "@nestjs/passport";

/**
 * Guard used to check if the couple email/password is correct
 */
export class LocalAuthGuard extends AuthGuard('local') { }