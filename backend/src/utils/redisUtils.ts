import { RedisClientType } from 'redis';
import redisClient from '../config/redisConfig';
import { Post } from '../models/Post';

export const getByKey = async (redisClient:RedisClientType, key:string) => {
    const valueByKey = await redisClient.get(key);
    // redisClient.get(key).then(data => console.log(data))
    return valueByKey;
}

export const setValueByKeyInCache = (redisClient: RedisClientType, postId: number, post:Post) => {
    console.log(`Adding post with ID : postID_${postId} to the cache.`, post);
    redisClient.set(`postID_${postId}`, JSON.stringify(post));
}

export const parseStringToObject = (redisPost: string): Post => {
    return JSON.parse(redisPost);
}