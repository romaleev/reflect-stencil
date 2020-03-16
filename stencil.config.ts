import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'reflect-stencil',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  globalStyle: 'src/styles.scss',
  plugins: [
    sass()
  ],
  /*testing: { // For test purposes
    browserHeadless: false,
    browserDevtools: true,
    browserSlowMo: 1000
  }*/
};
