import {DefaultCrudRepository} from '@loopback/repository';
import {Employee, EmployeeRelations} from '../models';
import {Proser3InventoryDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EmployeeRepository extends DefaultCrudRepository<
  Employee,
  typeof Employee.prototype.employeeID,
  EmployeeRelations
> {
  constructor(
    @inject('datasources.Proser3Inventory') dataSource: Proser3InventoryDataSource,
  ) {
    super(Employee, dataSource);
  }
}
