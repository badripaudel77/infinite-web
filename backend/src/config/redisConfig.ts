// REF DOCS: https://redis.io/docs/latest/develop/connect/clients/nodejs/

import { createClient, RedisClientType } from "redis";

const redisClient:RedisClientType = createClient()

redisClient.on('error', err => console.log('Redis Client Error', err));

// redisClient.connect();
// redisClient.set('test', 'test');

export default redisClient;
