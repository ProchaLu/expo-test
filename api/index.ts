import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequestHandler } from '@expo/server/adapter/vercel';

export default createRequestHandler({
  build: join(fileURLToPath(new URL('.', import.meta.url)), '../dist/server'),
});
