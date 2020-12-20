import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export abstract class CoreApiService {
  protected readonly baseUrl: string = 'http://localhost:3004/';

  constructor(protected http: HttpClient) {
  }
}
