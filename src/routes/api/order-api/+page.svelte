<script>
  export let data;
  import { createClient } from "@supabase/supabase-js";
  import { SUPABASE_ANNON_KEY, SUPABASE_URL } from "$env/static/private";

  const supabase = createClient(SUPABASE_URL, SUPABASE_ANNON_KEY);

  const handleUpdate = (payload) => {
    if (payload.new.processed) {
      
      const orderIndex = data.findIndex(order => order.id === payload.new.id);
      if (orderIndex !== -1) {
        data[orderIndex] = payload.new;
      }
    }
  };

  supabase
      .from('order')
      .on('UPDATE', handleUpdate)
      .subscribe();
</script>

<div>
  <h1>Your Orders</h1>
  {#each data as order}
    <div class="order">
      <p>Order Date: {order.orderDate}</p>
      <p>Status: {order.processed ? 'Processed' : 'Pending'}</p>
    </div>
  {/each}
</div>
