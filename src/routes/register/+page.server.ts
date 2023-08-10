import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

export const actions = {
  default: async (event) => {
    const data = await event.request.formData();
		const body = Object.fromEntries(await data)

    const register = await event.fetch('/api',{
      method: 'POST',
      body: data
    })
    
    throw redirect(303, '/');
  },
} satisfies Actions;