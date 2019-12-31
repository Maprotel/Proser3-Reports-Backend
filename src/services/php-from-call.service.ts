import { getService } from '@loopback/service-proxy';
import { inject, Provider } from '@loopback/core';
import { CallDataSource } from '../datasources';

export interface PhpFromCall {
  y: number;
  x: number;
}

export class PhpFromCallProvider implements Provider<PhpFromCall> {
  constructor(
    // call must match the name property in the datasource json file
    @inject('datasources.call')
    protected dataSource: CallDataSource = new CallDataSource(),
  ) { }

  value(): Promise<PhpFromCall> {
    return getService(this.dataSource);
  }


}
