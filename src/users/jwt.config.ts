import { JwtOptionsFactory, JwtModuleOptions } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtConfigService implements JwtOptionsFactory {
    constructor(private configService: ConfigService) { }

    createJwtOptions(): JwtModuleOptions {
        return {
            secret: this.configService.get("JWT_SECRET"),
            signOptions: { expiresIn: '60s' },
        }
    }
}