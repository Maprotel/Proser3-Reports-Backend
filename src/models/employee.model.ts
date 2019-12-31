import { Entity, model, property } from '@loopback/repository';

@model({ settings: { strict: false } })
export class Employee extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  employeeId?: number;

  @property({
    type: 'string',
  })
  employeeFullName?: string;

  @property({
    type: 'string',
  })
  employeeCode?: string;

  @property({
    type: 'string',
  })
  employeeMobile?: string;

  @property({
    type: 'string',
  })
  employeePosition?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Employee>) {
    super(data);
  }
}

export interface EmployeeRelations {
  // describe navigational properties here
}

export type EmployeeWithRelations = Employee & EmployeeRelations;
