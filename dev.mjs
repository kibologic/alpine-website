#!/usr/bin/env node
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SwiteServer } from '@kibologic/swite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const server = new SwiteServer({
  root: path.resolve(__dirname, 'app'),
  publicDir: path.resolve(__dirname, 'public'),
  port: parseInt(process.env.PORT || '5000', 10),
  host: 'localhost',
  open: false,
});

await server.start();
console.log('[alpine-website] running on http://localhost:5000');
