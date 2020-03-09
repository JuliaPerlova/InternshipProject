import { Injectable } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';


@Injectable()
export class AppService {
  @Client({ transport: Transport.REDIS, options: {
    url: 'redis://localhost:6379',
  }})
  client: ClientProxy;


  getHello(): Observable<string> {
    return this.client.send<string>({cmd: 'sayHello'}, {});
  }

  findOne(id): Observable<string> {
    return this.client.send<string>({cmd: 'getUser'}, {id});
  }
}
