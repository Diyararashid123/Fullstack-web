<script>
 import Header from "../lib/components/Header.svelte";
  import CustomBtn from "../lib/components/CustomBtn.svelte";
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  
  //import Guide from "../components/Guide.svelte";
  let showGuide = false;
  let step = 0;
</script>

<Header/>
<!-- {#if showGuide}
  <Guide bind:step />
{/if} -->
<div class="main-container">
  <div class="content">
      <div class="robot-text"
          in:fly={{ duration: 2000, y: -300, opacity: 0, easing: quintOut }}>
          <h1>Information part</h1>
          <h3>Robotic arms, marvels of modern engineering, have revolutionized industries ranging from manufacturing to medicine. These sophisticated machines mimic the dexterity of the human arm, programmed to perform intricate tasks with precision. Through advancements in technology, robotic arms offer enhanced efficiency and consistency. On this platform, users can seamlessly order specific robotic systems using an intuitive letter-based system.
          </h3>
      </div>

      <img src="/page1.PNG" alt="Profile" class="profile-pic"
    in:fly={{ delay: 500, duration: 2000, y: 300, opacity: 0, easing: quintOut }} />

  </div>

  <div class="button-container"
      in:fly={{ delay: 800, duration: 2000, y: 500, opacity: 0, easing: quintOut }}>
      <CustomBtn content="Go to Order" url={"/login"}/>
  </div>
</div>

<style>
 .main-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: calc(100vh - 150px); 
      gap: 1rem;
      padding: 1rem 0;
  }

  .content {
      display: flex;
      justify-content: center; 
      align-items: center;
      gap: 1rem;
      width: 100%;
      max-width: 65rem; 
  }

  .button-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
  }
  @media (min-width: 760px) and (max-width: 1500px) {
      .profile-pic {
          flex: 1;
          border-radius: 2rem;
          max-width: 30%;  
          height: auto;    
      }

      .robot-text {
          flex: 1;
          font-size: 1rem;
          max-width: 50%;
          color: #0a2239;
          padding: 0 1rem;
      }

      .button-container {
          position: relative;
          width: 80%;
          top:-1.5rem;
      }
  }

  h1 {
      margin: 0.5rem 0;
      font-size: 3rem;
      color: #0a2239;
  }

  h3 {
      font-size: 1.2rem;
      margin: 0.5rem 0;
  }
</style>