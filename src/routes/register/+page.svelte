<script lang=ts>
  import Tags from "svelte-tags-input";

  let skillsets:any = [];
  let hobbies:any = [];
</script>

<form method="POST">
  <input type="hidden" name="skillsets" value={skillsets}/>
  <input type="hidden" name="hobbies" value={hobbies}/>
  <div class="space-y-12">
    
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="col-span-full">
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
          <div class="mt-2">
            <input required type="text" name="username" id="username" autocomplete="username" placeholder="username" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="col-span-full">
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input required id="email" name="email" type="email" autocomplete="email" placeholder="username@example.com" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="col-span-full">
          <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
          <div class="mt-2">
            <input required type="text" name="phone" id="phone" placeholder="0123456789" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="col-span-full">
          <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Skillsets</label>
          <div class="mt-2 my-custom-class">
            <Tags
              bind:tags={skillsets}
              addKeys={[9]}
              placeholder={"Press TAB after each input"}
            />
          </div>
        </div>

        <div class="col-span-full">
          <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Hobby</label>
          <div class="mt-2 my-custom-class">
            <Tags
              bind:tags={hobbies}
              addKeys={[9]}
              placeholder={"Press TAB after each input"}
            />
          </div>
        </div>

      </div>
    </div>

  </div>

  <div class="mt-6 flex items-center justify-end gap-x-6">
    <a href="/" class="text-sm font-semibold leading-6 text-gray-900">Cancel</a>
    <button type="submit" class="rounded-md bg-amber-400 px-3 py-2 text-sm font-semibold text-neutral-700 shadow-sm hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600">Save</button>
  </div>
</form>