import type { PageServerLoad } from './$types';
 
export const load: PageServerLoad = async (event) => {
  const data = await event.fetch('/api')
  const freelancers = await data.json()
  
  return {
    freelancers: freelancers
  };
};