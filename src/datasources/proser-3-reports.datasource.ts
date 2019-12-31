import {
  inject,
  lifeCycleObserver,
  LifeCycleObserver,
  ValueOrPromise,
} from '@loopback/core';
import {juggler} from '@loopback/repository';
import config from './proser-3-reports.datasource.config.json';

@lifeCycleObserver('datasource')
export class Proser3ReportsDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Proser3Reports';

  constructor(
    @inject('datasources.config.Proser3Reports', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }

  /**
   * Start the datasource when application is started
   */
  start(): ValueOrPromise<void> {
    // Add your logic here to be invoked when the application is started
  }

  /**
   * Disconnect the datasource when application is stopped. This allows the
   * application to be shut down gracefully.
   */
  stop(): ValueOrPromise<void> {
    return super.disconnect();
  }
}
