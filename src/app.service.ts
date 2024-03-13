import { Injectable } from '@nestjs/common';
import { generateShortURL } from './utils/generateShortURL';
import { PrismaService } from './modules/prisma/prisma.service';
import { URL } from './types/URL.type';

@Injectable()
export class AppService {
constructor(private readonly prisma: PrismaService) {}
  saveURL(url: string) {
    const shortURL = generateShortURL();

    const newURL: URL = {
      url: url,
      short_url: shortURL
    }

    return this.prisma.url.create({ data: newURL });
  }

  redirectToShortURL(res, url) {
    return this.prisma.url.findFirst({ where: { short_url: url } }).then((url) => {
      if (url) {
       const hits = url.visits + 1;
       this.prisma.url.update({ where: { id: url.id }, data: { visits: hits } }).then(() => {
         res.redirect(url.url);
       });
      }
    })
  }

  getAllURLs() {
    return this.prisma.url.findMany();
  }
}
