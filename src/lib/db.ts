import * as mongoDB from 'mongodb'
import { DB_URI } from '$env/static/private';

const client: mongoDB.MongoClient = new mongoDB.MongoClient(DB_URI);
await client.connect();
const db: mongoDB.Db = client.db('etiqa');

export const getFreelancersCollection = async () =>
	(await db.collection('freelancers'))