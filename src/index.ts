import { ProserReportsBackend } from './application';
import { ApplicationConfig } from '@loopback/core';

// LOCALS
import { consoleMessage } from './functions'

const chalk = require("chalk");

export { ProserReportsBackend };

export async function main(options: ApplicationConfig = {}) {
  const app = new ProserReportsBackend(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;

  console.clear();
  console.log('');
  consoleMessage('yellow', `/*************/ BACKEND /*************/`)

  consoleMessage('yellow', `REST api running on: ${url}`)
  consoleMessage('white', `Origin server: ${process.env.ORIGIN_DB_HOST}`)
  consoleMessage('white', `Reports DB: ${process.env.PROSER_REPORTS_DATABASE}`)
  consoleMessage('white', `Inventory DB: ${process.env.PROSER_INVENTORY_DATABASE}`)
  consoleMessage('yellow', `Realtime DB: ${process.env.PROSER_REALTIME_DATABASE}`)

  consoleMessage('yellow', `/**************************************/`)
  console.log('');


  return app;
}
