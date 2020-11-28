import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class CoreApiService {
  protected readonly baseUrl: string;

  constructor(protected http: HttpClient) {
    this.baseUrl = 'http://localhost:3004/';
  }
}
