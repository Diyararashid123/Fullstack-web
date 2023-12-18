<script>
  import NavBtn from "./NavBtn.svelte";

</script>

<div class="header-container">
  
    <NavBtn content="Log Out" url="/logout" />
    <NavBtn content="Home" url="/" />


    <NavBtn content="About" url="/about" />
    <NavBtn content="Privacy Policy" url="/privacy policy"/>
    <NavBtn content="Orders status" url="/ordercheck/order"/>
  
</div>

<style>

  .header-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 3.5rem;
  }

</style>