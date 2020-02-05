
import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
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
import { Schedule } from '../models';
import { ScheduleRepository } from '../repositories';

import { loop, obtainSchedules } from '../queries/loop'

export class ScheduleController {
  constructor(
    @repository(ScheduleRepository)
    public defScheduleRepository: ScheduleRepository,
  ) { }


  @post('/schedules', {
    responses: {
      '200': {
        description: 'Schedule model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Schedule) } },
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Schedule, {
            title: 'NewDefinitionSchedule',
            exclude: ['schedule_id'],
          }),
        },
      },
    })
    defSchedule: Omit<Schedule, 'schedule_id'>,
  ): Promise<Schedule> {
    return this.defScheduleRepository.create(defSchedule);
  }

  @get('/schedules/count', {
    responses: {
      '200': {
        description: 'Schedule model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Schedule)) where?: Where<Schedule>,
  ): Promise<Count> {
    return this.defScheduleRepository.count(where);
  }

  @get('/schedules', {
    responses: {
      '200': {
        description: 'Array of Schedule model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Schedule, { includeRelations: true }),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Schedule)) filter?: Filter<Schedule>,
  ): Promise<Schedule[]> {
    return this.defScheduleRepository.find(filter);
  }

  @patch('/schedules', {
    responses: {
      '200': {
        description: 'Schedule PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Schedule, { partial: true }),
        },
      },
    })
    defSchedule: Schedule,
    @param.query.object('where', getWhereSchemaFor(Schedule)) where?: Where<Schedule>,
  ): Promise<Count> {
    return this.defScheduleRepository.updateAll(defSchedule, where);
  }

  @get('/schedules/{id}', {
    responses: {
      '200': {
        description: 'Schedule model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Schedule, { includeRelations: true }),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(Schedule)) filter?: Filter<Schedule>
  ): Promise<Schedule> {
    return this.defScheduleRepository.findById(id, filter);
  }

  @patch('/schedules/{id}', {
    responses: {
      '204': {
        description: 'Schedule PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Schedule, { partial: true }),
        },
      },
    })
    defSchedule: Schedule,
  ): Promise<void> {
    await this.defScheduleRepository.updateById(id, defSchedule);
  }

  @put('/schedules/{id}', {
    responses: {
      '204': {
        description: 'Schedule PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() defSchedule: Schedule,
  ): Promise<void> {
    await this.defScheduleRepository.replaceById(id, defSchedule);
  }

  @del('/schedules/{id}', {
    responses: {
      '204': {
        description: 'Schedule DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.defScheduleRepository.deleteById(id);
  }


  /************************************************************** */

  @post('/schedules/test', {
    responses: {
      '200': {
        description: 'Schedule model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Schedule) } },
      },
    },
  })
  async test(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Schedule, {
            title: 'NewDefinitionSchedule',
            exclude: ['schedule_id'],
          }),
        },
      },
    })
    defSchedule: Omit<Schedule, 'schedule_id'>,
  ): Promise<object> {
    return obtainSchedules();
  }


}
