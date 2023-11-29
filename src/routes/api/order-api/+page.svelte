<script>
  export let data;
  console.log(data); // To see the data structure
</script>

{#if data && data.body && data.body.orderprocessed}
  {#each data.body.orderprocessed as order}
    <p>{order.username}</p>
    <p>{order.letters}</p>
  {/each}
{/if}
