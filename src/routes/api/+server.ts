import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { getFreelancersCollection } from '$lib/db'
import { ObjectId } from 'mongodb';
const freelancersCollection = await getFreelancersCollection()

export const GET: RequestHandler = async (event) => {
  const freelancers = await freelancersCollection.find({}).toArray();
  return json(freelancers)
}

export const POST: RequestHandler = async (event) => {
  const data = await event.request.formData();
  const body:any = Object.fromEntries(await data)
  const skillsets = body.skillsets.split(',');
  const hobbies = body.hobbies.split(',');
  const newFreelancer = await freelancersCollection.insertOne({
    username: body.username,
    email: body.email,
    phone: body.phone,
    skillset: skillsets,
    hobby: hobbies
  })
  return json(newFreelancer)
}

export const PUT: RequestHandler = async (event) => {
  const data = await event.request.json();
  const updateFreelancer = await freelancersCollection.updateOne({
    _id: new ObjectId(data.id)},{
      $set: {
        username: data.username,
        email: data.email,
        phone: data.phone,
        skillset: data.skillsets,
        hobby: data.hobbies
      }
  })
  return json(updateFreelancer)
}

export const DELETE: RequestHandler = async (event) => {
  const id:any = event.url.searchParams.get('id');
  const deleteFreelancer = await freelancersCollection.deleteOne({_id: new ObjectId(id)})
  return json(deleteFreelancer)
}