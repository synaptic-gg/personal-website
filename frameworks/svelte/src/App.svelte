<script lang="ts" >
import "./app.css";
  import BackgroundBeamCollision from "./componets/BackgroundBeamCollision.svelte";
  let tag :String = "Just a nerd who codes for fun" ;

</script>
<div class="rounded-lg ">
<BackgroundBeamCollision class=" rounded-lg p-5 " >
  <div class=" flex flex-col items-center  h-full " >
    <div class="grow ">
      <div class="flex flex-col items-center h-full justify-center">
  <h2
    class="text-xl  relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight md:px-24 "
  >
    I am Synaptic
    <br />
    <div
      class="relative mx-auto inline-block w-max "
    >
      <div
        class="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]"
      >
        <span class="">{tag}</span>
      </div>
      <div
        class="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4 "
      >
        <span class="">{tag}</span>
      </div>
    </div>
   <div>
   </div>
  </h2>
  </div>
  </div>
  <br>
  <div class="" >
    <h3 class="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center"

    >This part is written in svelte</h3>
  </div>
  </div>
</BackgroundBeamCollision>
</div>