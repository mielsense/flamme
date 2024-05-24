<script lang="ts">
   export let flip: boolean = false;
   export let data: any;
</script>

<main class="horizontal-scroll-item" class:flipped={flip}>
   
   <!-- line (decoration) -->
   <div class="line"></div>
   

   <!-- top content -->
   <div class="top flex justify-between w-full">
      <!-- top left -->
      <div class="flex flex-col">
         <!-- general infos -->
         <section class="mb-8 flex flex-col">
            <span class="font-bold uppercase text-5xl">
               {data.hostCity}
            </span>

            <span class="text-4xl font-serif">
               {data.year}
            </span>
         </section>

         <!-- lighting ceremony -->
         <section class="flex flex-col">
            <span class="text-4xl font-bold"> Lighting ceremony </span>

            <span class="text-2xl">
               <span class="font-bold">|</span>
               {data.lightingCeremony.date} - {data.lightingCeremony.location}
            </span>
         </section>
      </div>

      <!-- top right -->
      <div class="flex flex-col text-right">
         <span class="text-3xl">
            Arrived the :
            <span class="font-bold font-serif">
               {data.arrivalAtTheStadium.date}
            </span>
         </span>

         <span class="text-2xl">
            Held by :
            <span class="font-bold font-serif">
               {data.arrivalAtTheStadium.finalTorchbearers[0]}
            </span>
         </span>
      </div>
   </div>

   <!-- center content -->
   <div class="center z-10 flex flex-col text-center">
      <span class="text-8xl font-serif font-bold pb-4">
         {data.torchRelay.distance}
      </span>

      <!-- dates -->
      <div class="text-3xl">
         <span>
            {data.torchRelay.startDate} - {data.torchRelay.endDate}
         </span>
      </div>

      <!-- torch bearers -->
      <div class="flex flex-col mt-8 text-center">
         <span class="text-2xl"> Notable torchbearers </span>

         {#each data.torchRelay.notableTorchbearers as item}
            <span>
               {item}
            </span>
         {/each}
      </div>
   </div>

   <!-- bottom content -->
   <div class="bottom flex justify-between w-full align-bottom">
      <!-- bottom left -->
      <div class="bottom-left flex flex-col justify-end">
         <span>
            {data.legacyAndImpact.memorableMoments[0]}
         </span>

         <span>
            {data.legacyAndImpact.impact}
         </span>

         <span class="font-bold text-2xl font-serif">
            Memorable moment and impact
         </span>
      </div>

      <!-- bottom right -->
      <div class="bottom-right flex flex-col justify-end">
         <!-- cauldron design -->
         <section class="mb-8 flex flex-col text-right">
            <span class="font-bold uppercase text-3xl"> Cauldron </span>

            <span class="text-2xl font-serif">
               Designed by :
               <span class="font-bold">
                  {data.olympicCauldron.designers[0]}
               </span>
            </span>

            <span>
               {data.olympicCauldron.description}
            </span>
         </section>

         <!-- lighting ceremony -->
         <section class="flex flex-col text-right">
            <span class="font-bold uppercase text-3xl"> Torch </span>

            <span class="text-2xl font-serif">
               Designed by :
               <span class="font-bold">
                  {data.torchDesign.designers[0]}
               </span>
            </span>

            <span>
               {data.torchDesign.description}
            </span>
         </section>
      </div>
   </div>
</main>

<style>
   .top {
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      padding: 10px 30px;
   }

   .center {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
   }

   .bottom {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      padding: 10px 30px;
      display: flex;
      align-items: flex-end;
   }

   .horizontal-scroll-item {
      width: 100vw;
      height: 100vh;
      flex-shrink: 0;
      z-index: 10;
      position: relative;
      background-color: white;
   }

   .horizontal-scroll-item::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      /* background-size: cover; */
      /* background-image: url('/images/waves.svg'); */
      background-image: url("/images/bg.jpg");
      background-repeat: no-repeat;
      background-position: center;
      z-index: -1;
      transition: transform 0.3s;
   }

   /* .horizontal-scroll-item::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 500px;
      height: 500px;
      background-image: url("/images/logo.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      transform: translate(-50%, -50%);
      opacity: 0.5;
      z-index: 0;
   } */

   .flipped::before {
      transform: scaleX(-1);
   }

   .line {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 10px;
      background-color: whitesmoke;
      transform: translateY(-50%);
      z-index: 1;
      opacity: 0.7;
   }


</style>
