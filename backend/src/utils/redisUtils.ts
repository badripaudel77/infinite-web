import { RedisClientType } from 'redis';

export const getByKey = async (redisClient:RedisClientType, key:string) => {
    const valueByKey = await redisClient.get(key);
    // redisClient.get(key).then(data => console.log(data))
    return valueByKey;
}