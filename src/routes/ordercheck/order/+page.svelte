<script>
  import { onMount, onDestroy } from 'svelte';
  import Header from '../../../lib/components/Header.svelte';

  export let data; 
  let localData = data; 

  async function fetchProcessedOrders() {
    const sessionToken = localStorage.getItem('sessionToken');
    try {
      const response = await fetch('/api/processedOrder', {
        headers: {
          'Authorization': `Bearer ${sessionToken}`
        }
      });
      if (response.ok) {
        localData = await response.json();
      } else {
        console.error('Error fetching processed orders:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  


  let intervalId;
  onMount(() => {
    fetchProcessedOrders(); 
    intervalId = setInterval(fetchProcessedOrders, 3000); 
  });

  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>
<Header/>
<h2>Processed Orders</h2>
{#if localData && localData.length}
  <div class="orders">
    {#each localData as order}
      <div class="order">
        <p><strong>Username:</strong> {order.username}</p>
        <p><strong>Letters:</strong> {order.letters}</p>
      </div>
    {/each}
  </div>
{:else}
  <p>No processed orders yet.</p>
{/if}

<style>

  h2{
    color: white;
  }

  .orders {
    margin-top: 20px;
  }

  .order {
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid white; 
    border-radius: 4px;
    color: white; 
    background-color: #333; 
  }

</style>
