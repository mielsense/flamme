<script>
   import "../app.css";
</script>

<main>
   <div class="logo-container">
      <img src="{'images/logo.png'}" alt="yes">
   </div>
   <slot></slot>
</main>

<div class="fixed inset-0 z-[9999999] pointer-events-none">
   <img
      src="images/frame.png"
      alt="frame"
      class="left-0 right-0 w-full h-full"
   />
</div>

<style>
   :global(body) {
      overflow-x: hidden;
   }

   .logo-container {
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 100;
   }

   .logo-container img {
      max-width: 100px;
   }

   .logo-container::before,
   .logo-container::after {
      content: '';
      position: absolute;
      top: 50%;
      width: 20dvw;
      height: 3px;
      opacity: 0.7;
      background-color: black;
      transform: translateY(-50%);
   }

   .logo-container::before {
      left: -20dvw;
   }

   .logo-container::after {
      right: -20dvw;
   }
</style>
