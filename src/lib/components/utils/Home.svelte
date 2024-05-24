<script lang="ts">
   export let flip: boolean = true;
</script>

<main class="horizontal-scroll-item" class:flipped={flip}>
   <div class="line">
      <div class="ball"></div>
   </div>

   <!-- main content -->
   <div class="z-10 text-center flex items-center flex-col ">
        <img src="{'images/meme.gif'}" alt="meme" class="w-[23dvw]">
        <h1 class="text-9xl pb-4 font-serif font-bold">The Olympic Flamme</h1>
        <p class="text-4xl">A record of the past and present ..</p>
   </div>

   <!-- overlay at bottom -->
   <div class="overlay-text text-xl">
       <p>from 2021 to 1896</p>
   </div>
</main>


<style>
   .horizontal-scroll-item {
      width: 100vw;
      height: 100vh;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
      position: relative;
   }

   .horizontal-scroll-item::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url("/images/bg.jpg");
      background-repeat: no-repeat;
      background-position: center;
      z-index: -1;
      transition: transform 0.3s;
   }

   .flipped::before {
      transform: scaleX(-1);
   }

   .line {
      position: absolute;
      top: 50%;
      left: 5%;
      width: 100%;
      height: 10px;
      background-color: whitesmoke;
      transform: translate(0, -50%);
      z-index: 1;
      opacity: 0.7;
      display: flex;
      align-items: center;
   }

   .ball {
      width: 5dvw;
      height: 5dvw;
      background-color: white;
      border-radius: 50%;
      position: absolute;
      left: 0;
   }

   .overlay-text {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 20;
      padding: 10px;
      text-align: center;
      font-family: serif;
   }
</style>
