<script>
  //import { getContext } from "svelte";
  import NavBtn from "./NavBtn.svelte";
  export let headerElement;
  </script>
  
  <div class="main-header">
    <h1>Robotic arm</h1>
    <header>
      <h1 bind:this={headerElement}>Your Title Here</h1>
  </header>
  </div>
  
  <nav class="top-right">
    <NavBtn content="About" url="#/about" />
    <NavBtn content ="Privacy Policy" url="#/privacy-policy"/>
  </nav>
  
  <nav class="top-left">
    <NavBtn content="Log Out" url="#/logout" />
    <NavBtn content="Home" url="#/home" />
  </nav>
  
  <style>
  
    .main-header {
      display: flex;
      position: relative;
      left: 2rem;
      top:1rem;
      font-size: 1.7rem;
    }
  
    .top-left {
      position: relative; 
      left: 25rem; 
      bottom: 2rem; 
      display: flex;
      gap: 1rem;
      padding: 0.5rem 1rem;
    }
  
    .top-right {
      position: relative; 
      top: 2rem; 
      right: 25rem; 
      display: flex;
      gap: 1rem;
      padding: 0.5rem 1rem;
    }
  </style>