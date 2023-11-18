<script>
  import NavBtn from "./NavBtn.svelte";
  export let headerElement;
</script>

<div class="header-container">

  <h1 class="main-title">Robotic Arm</h1>

  <nav class="nav-buttons left-nav">
    <NavBtn content="Log Out" url="#/logout" />
    <NavBtn content="Home" url="/" />
  </nav>

  <nav class="nav-buttons right-nav">
    <NavBtn content="About" url="#/about" />
    <NavBtn content="Privacy Policy" url="#/privacy-policy"/>
  </nav>
</div>

<style>

  .header-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 3.5rem;
  }

  .nav-buttons {
    display: flex;
    gap: 1rem;
  }

  .left-nav {
    order: -1;
  }

  .main-title {
    font-size: 3rem;
    padding-bottom: 4rem;
  }
  h1{
    color: #feebdc;
  }

</style>
