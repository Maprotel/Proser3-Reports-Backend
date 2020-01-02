import { Entity, model, property } from '@loopback/repository';

@model({ settings: { strict: false } })
export class Person extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  personId?: number;

  @property({
    type: 'string',
  })
  personFullName?: string;

  @property({
    type: 'string',
  })
  personTypeName?: string;

  @property({
    type: 'string',
  })
  personTypeId?: string;

  @property({
    type: 'number',
  })
  personChk?: number;

  @property({
    type: 'string',
  })
  personContactInfo?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Person>) {
    super(data);
  }
}

export interface PersonRelations {
  // describe navigational properties here
}

export type PersonWithRelations = Person & PersonRelations;
