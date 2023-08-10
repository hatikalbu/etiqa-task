<script>
  import "../app.css";
</script>

<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
  <div class="overflow-hidden rounded-t-lg bg-amber-400 shadow">
    <div class="px-4 py-5 sm:p-6">
      <h1 class="font-bold text-xl">Complete Developer Network</h1>
    </div>
  </div>
  
  <div class="overflow-hidden rounded-b-lg bg-white shadow">
    <div class="px-4 py-5 sm:p-6">
      <slot />
      
    </div>
  </div>
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>