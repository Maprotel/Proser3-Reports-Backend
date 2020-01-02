import {DefaultCrudRepository} from '@loopback/repository';
import {Person, PersonRelations} from '../models';
import {Proser3InventoryDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PersonRepository extends DefaultCrudRepository<
  Person,
  typeof Person.prototype.personId,
  PersonRelations
> {
  constructor(
    @inject('datasources.Proser3Inventory') dataSource: Proser3InventoryDataSource,
  ) {
    super(Person, dataSource);
  }
}
