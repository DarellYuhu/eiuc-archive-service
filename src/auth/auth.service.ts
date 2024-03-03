import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInAuthDto } from './dto/signIn-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}
  async signIn(signInAuthDto: SignInAuthDto) {
    const user = await this.prisma.user.findUnique({
      where: { username: signInAuthDto.username },
    });
    if (!user) throw new UnauthorizedException();
    const isAuthenticate = await bcrypt.compare(
      signInAuthDto.password,
      user.password,
    );
    if (!isAuthenticate) throw new UnauthorizedException();
    const jwtPayload = { username: user.username, sub: user.id };
    const accessToken = await this.jwtService.signAsync(jwtPayload);
    delete user.password;
    return { accessToken, user };
  }
}
