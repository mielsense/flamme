<script lang="ts">
   import { onMount } from "svelte";
   import { lenis, init } from "$lib/stores/libraries";
   import Year from "$lib/components/sections/Year.svelte";
   import Home from "$lib/components/utils/Home.svelte";
   import End from "$lib/components/utils/End.svelte";

   let container: HTMLElement;

   onMount(() => {
      $lenis = init(container, ".horizontal-scroll-item");
   });

   export let data;

   let containerWidth: string;
   $: containerWidth = `${(data.data.length + 2) * 100}vw`; // 2 for Home and End components
</script>

<main
   class="horizontal-scroll-container"
   bind:this={container}
   style={`width: ${containerWidth}; position: relative;`}
>
   <Home />
   
   {#each data.data as item, index}
   <Year data={item} flip={index % 2 === 1} />
   {/each}
   
   <End />
</main>

<style>
   .horizontal-scroll-container {
      display: flex;
      overflow: hidden;
      position: relative;
   }
</style>