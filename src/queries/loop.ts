import { MysqlDataSource } from './../datasources/mysql.datasource';

const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
const { http } = require('http');

const datasource = new MysqlDataSource();

export async function loop(): Promise<object> {
  const name = await exec('git config --global user.name')
  const email = await exec('git config --global user.email')
  let result = { name, email }
  return result
}



export async function obtainSchedules(): Promise<object> {
  let dataFromQuery = await datasource.execute('SELECT * from Schedule');
  let data = JSON.parse(JSON.stringify(dataFromQuery))
  console.log('data', data);
  return data;
}
