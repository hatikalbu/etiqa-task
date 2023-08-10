import type { PageServerLoad } from './$types';
import { getFreelancersCollection } from '$lib/db'
import { ObjectId } from 'mongodb';
import { json } from '@sveltejs/kit';
const freelancersCollection = await getFreelancersCollection()

export const load: PageServerLoad = async (event) => {
  const id = event.params.id
  const freelancer = await freelancersCollection.findOne({_id: new ObjectId(id)},{projection: { 
    _id: {
      $toString: "$_id"
    },
    username: 1,
    email: 1,
    phone: 1,
    skillset: 1,
    hobby: 1
   }})

  return ({freelancer: freelancer});
};