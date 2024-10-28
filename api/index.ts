import { join } from 'node:path';
import { createRequestHandler } from '@expo/server/adapter/vercel';

const buildPath =
  typeof __dirname !== 'undefined'
    ? join(__dirname, '../dist/server')
    : join(new URL('.', import.meta.url).pathname, '../dist/server');

export default createRequestHandler({
  build: buildPath,
});
