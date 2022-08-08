import dotenv from 'dotenv';

dotenv.config();

import Koa from 'koa';

import bodyParser from 'koa-bodyparser';

import http from 'http';

const app = new Koa();

app.use(bodyParser());

const server = http.createServer(app.callback());

server.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}\n`));

export default server;
