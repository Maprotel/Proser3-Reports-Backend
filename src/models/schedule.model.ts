import { Entity, model, property } from '@loopback/repository';

@model({ settings: { strict: false } })
export class Schedule extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  scheduleId?: number;

  @property({
    type: 'string',
  })
  scheduleFullname?: string;

  @property({
    type: 'string',
  })
  scheduleTypename?: string;

  @property({
    type: 'number',
    default: 0,
  })
  scheduleChk?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Schedule>) {
    super(data);
  }
}

export interface ScheduleRelations {
  // describe navigational properties here
}

export type ScheduleWithRelations = Schedule & ScheduleRelations;
