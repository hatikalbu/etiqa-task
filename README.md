# Etiqa Assessment

Hi, first of all I am apologize for not using expected skillsets such as **NestJs & Angular**, instead I use **Sveltekit** framework that cover both Backend & Frontend 

A demo for the app [`here`](https://etiqa-task.vercel.app/).

## Technology Stacks  


<img src="https://kit.svelte.dev/_app/immutable/assets/svelte-logo.5c5d7d20.svg" alt="Sveltekit" height="100"/>


Sveltekit
SvelteKit is a framework for rapidly developing robust, performant web applications using [Svelte](https://svelte.dev/). If you're coming from React, SvelteKit is similar to Next. If you're coming from Vue, SvelteKit is similar to Nuxt. 

<br>
<br>

<img src="https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg" alt="MongoDB" height="100"/>

MongoDB
MongoDB is built on a scale-out architecture that has become popular with developers of all kinds for **developing scalable applications with evolving data schemas**. As a document database, MongoDB makes it easy for developers to store structured or unstructured data. It uses a JSON-like format to store documents.

<br>
<br>

<img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg" alt="TailwindCSS" height="100"/>


Tailwind CSS
Tailwind CSS is a utility-first CSS framework for _rapidly building modern websites without ever leaving your HTML_

<br>
<br>

<img src="https://pub-881d32a509694461b3bc7d35f5d7d464.r2.dev/vercel.png" alt="Vercel" height="100"/>

Vercel is a platform for developers that provides the tools, workflows, and infrastructure you need to build and deploy your web apps faster, without the need for additional configuration.

## Tools & Dependencies

<img src="https://code.visualstudio.com/assets/images/code-stable.png" alt="VSCode" height="100"/>

Visual Studio Code 

<img src="https://svelte-tags-input.vercel.app/favicon-32x32.png" alt="VSCode" height="100"/>

Svelte Tags Input
A library for multiple input tags



## Requirement

Set a .env file for database connection

```bash
DB_URI='mongodb://localhost:27017'
```
  

## Developing

  

Install dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

  

```bash
npm  run  dev
 
# or start the server and open the app in a new browser tab

npm  run  dev  --  --open
```

  

## Building

  

To create a production version of your app:

  

```bash
npm  run  build
```  

You can preview the production build with `npm run preview`.

  
##	API Routes

```bash
import  type { RequestHandler } from  './$types';
import { json } from  '@sveltejs/kit';
import { getFreelancersCollection } from  '$lib/db'
import { ObjectId } from  'mongodb';
const  freelancersCollection  =  await  getFreelancersCollection()

export  const  GET:  RequestHandler  =  async (event) => {
	const  freelancers  =  await  freelancersCollection.find({}).toArray();
	return  json(freelancers)
}

export  const  POST:  RequestHandler  =  async (event) => {
	const  data  =  await  event.request.formData();
	const  body:any  =  Object.fromEntries(await  data)
	const  skillsets  =  body.skillsets.split(',');
	const  hobbies  =  body.hobbies.split(',');
	const  newFreelancer  =  await  freelancersCollection.insertOne({
		username:  body.username,
		email:  body.email,
		phone:  body.phone,
		skillset:  skillsets,
		hobby:  hobbies
	})
	return  json(newFreelancer)
}

export  const  PUT:  RequestHandler  =  async (event) => {
	const  data  =  await  event.request.json();
	const  updateFreelancer  =  await  freelancersCollection.updateOne({
		_id:  new  ObjectId(data.id)},{
		$set: {
			username:  data.username,
			email:  data.email,
			phone:  data.phone,
			skillset:  data.skillsets,
			hobby:  data.hobbies
		}
	})
	return  json(updateFreelancer)
}

export  const  DELETE:  RequestHandler  =  async (event) => {
	const  id:any  =  event.url.searchParams.get('id');
	const  deleteFreelancer  =  await  freelancersCollection.deleteOne({_id:  new  ObjectId(id)})
	return  json(deleteFreelancer)
}

```  


## 	Screenshots

List of all freelancers

![enter image description here](https://pub-881d32a509694461b3bc7d35f5d7d464.r2.dev/list.png)


Register and Update freelancer

![enter image description here](https://pub-881d32a509694461b3bc7d35f5d7d464.r2.dev/form.png)


Delete freelancer

![enter image description here](https://pub-881d32a509694461b3bc7d35f5d7d464.r2.dev/delete.png)