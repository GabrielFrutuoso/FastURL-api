import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(res) {
    res.redirect('https://www.instagram.com');
  }
}
