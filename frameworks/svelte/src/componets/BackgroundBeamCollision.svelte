<script lang="ts">
  import CollisionMechanism from "./CollisionMechanism.svelte";
  let containerRef: HTMLDivElement;
  let parentRef: HTMLDivElement;

  let _class = "";
  export { _class as class };
  type Beam = {
    initialX?: number;
    translateX?: number;
    initialY?: number;
    translateY?: number;
    rotate?: number;
    className?: string;
    duration?: number;
    delay?: number;
    repeatDelay?: number;
    class?: string;
  };
   export let beams: Beam[] = []
   const classes = ["h-4", "h-6", "h-12", "h-20","h-8","h-10","h-14","h-6"]
   const runs = Math.floor(Math.random() * 10) +40;
   for(let i =0  ; i<runs;i++){
 const initialX = Math.floor(Math.random() * 1400); 
  const translateX = initialX + Math.floor(Math.random() * 100); 
  const duration = Math.floor(Math.random() * 10) + 2;
  const repeatDelay = Math.floor(Math.random() * 5) + 1; 
  const classr  = classes[Math.floor(Math.random() * classes.length)];

  const beam: Beam = {
    initialX,
    translateX,
    duration,
    repeatDelay,
    class:classr,
  };


  if (Math.random() < 0.5) {
    beam.delay = Math.floor(Math.random() * 5);
  }

 beams.push(beam);
   }

  
</script>

<div
  bind:this={parentRef}
  class={`h-50 md:h-[50vh] bg-gradient-to-b w-full from-neutral-600 to-neutral-800 dark:from-neutral-950 dark:to-neutral-800 relative flex items-center  justify-center overflow-hidden ${_class}`}
>
  {#each beams as beam}
    <CollisionMechanism {beam} bind:containerRef bind:parentRef />
  {/each}

  <slot />

  <div
    bind:this={containerRef}
    class="absolute bottom-0 bg-neutral-600 w-full inset-x-0 pointer-events-none"
    style="box-shadow: 0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
  ></div>
</div>
