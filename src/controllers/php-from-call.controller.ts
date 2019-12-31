import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import { inject } from '@loopback/context';

import { PhpFromCallProvider } from '../services';


export class PhpFromCallController {
  constructor(
    @inject('services.PhpFromCallProvider')
    protected phpFromCallProvider: PhpFromCallProvider,
  ) { }


  @get('/php', {
    responses: {
      '200': {
        description: 'Schedule model count',
        // content: { 'application/json': { schema: CountSchema } },
      },
    },
  })

  async getData(): Promise<any> {
    const data = await this.phpFromCallProvider.value
    console.log('data', data);
    return data;
  }

}
