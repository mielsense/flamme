<script lang="ts">
   export let flip: boolean = true;
</script>

<main class="horizontal-scroll-item" class:flipped={flip}>
   <div class="line">
      <div class="ball"></div>
   </div>

      <!-- main content -->
      <div class="z-10 text-center flex items-center flex-col ">
         <h1 class="font-serif font-bold" style="font-size: 15dvw;">Bye Bye</h1>
         <p class="-mt-8" style="font-size: 3dvw;">And thank you for your time !</p>
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
      right: 5%;
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
      right: 0;
   }
</style>
