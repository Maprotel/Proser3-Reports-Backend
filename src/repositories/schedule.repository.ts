import { DefaultCrudRepository } from '@loopback/repository';
import { Schedule, ScheduleRelations } from '../models';
import { MysqlDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class ScheduleRepository extends DefaultCrudRepository<
  Schedule,
  typeof Schedule.prototype.schedule_id,
  ScheduleRelations
  > {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Schedule, dataSource);
  }
}
